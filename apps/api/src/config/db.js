import mongoose from 'mongoose';

function decodeDnsText(record) {
  return record.replace(/^"|"$/g, '').replace(/\\"/g, '"');
}

function buildDirectMongoUri(connectionString, servers, queryParams) {
  const sourceUrl = new URL(connectionString);
  const credentials = sourceUrl.username
    ? `${encodeURIComponent(decodeURIComponent(sourceUrl.username))}:${encodeURIComponent(decodeURIComponent(sourceUrl.password))}@`
    : '';
  const databaseName = sourceUrl.pathname && sourceUrl.pathname !== '/' ? sourceUrl.pathname : '';
  const queryString = queryParams.toString();

  return `mongodb://${credentials}${servers.join(',')}${databaseName}${queryString ? `?${queryString}` : ''}`;
}

async function resolveAtlasConnectionString(connectionString) {
  const sourceUrl = new URL(connectionString);
  const srvName = `_mongodb._tcp.${sourceUrl.hostname}`;

  const [srvResponse, txtResponse] = await Promise.all([
    fetch(`https://dns.google/resolve?name=${encodeURIComponent(srvName)}&type=SRV`),
    fetch(`https://dns.google/resolve?name=${encodeURIComponent(srvName)}&type=TXT`),
  ]);

  if (!srvResponse.ok) {
    throw new Error(`Failed to resolve SRV record for ${sourceUrl.hostname}`);
  }

  const srvJson = await srvResponse.json();
  const servers = (srvJson.Answer || [])
    .filter((record) => record.type === 33)
    .map((record) => {
      const parts = record.data.trim().split(/\s+/);
      const port = parts[2];
      const host = parts[3].replace(/\.$/, '');
      return `${host}:${port}`;
    });

  if (!servers.length) {
    throw new Error(`No MongoDB SRV records returned for ${sourceUrl.hostname}`);
  }

  const queryParams = new URLSearchParams(sourceUrl.searchParams);

  if (txtResponse.ok) {
    const txtJson = await txtResponse.json();
    for (const record of txtJson.Answer || []) {
      if (record.type !== 16) {
        continue;
      }

      for (const value of decodeDnsText(record.data).split('&')) {
        const [key, rawValue = ''] = value.split('=');
        if (key && !queryParams.has(key)) {
          queryParams.set(key, rawValue);
        }
      }
    }
  }

  if (!queryParams.has('tls') && !queryParams.has('ssl')) {
    queryParams.set('tls', 'true');
  }

  return buildDirectMongoUri(connectionString, servers, queryParams);
}

function isSrvLookupError(error) {
  return (
    error?.code === 'ECONNREFUSED' ||
    error?.code === 'ENOTFOUND' ||
    error?.code === 'EAI_AGAIN' ||
    String(error?.message || '').includes('querySrv')
  );
}

export async function connectDatabase(connectionString, fallbackConnectionString) {
  if (!connectionString) {
    throw new Error('MONGO_URI is required');
  }

  // If already connected, return existing connection
  if (mongoose.connection.readyState === 1) {
    console.log('Database already connected');
    return mongoose.connection;
  }

  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(connectionString, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 2,
    });
    console.log('Database connected successfully');
    return mongoose.connection;
  } catch (error) {
    console.error('MongoDB connection error:', error.message);

    if (connectionString.startsWith('mongodb+srv://') && isSrvLookupError(error)) {
      try {
        const resolvedConnectionString = await resolveAtlasConnectionString(connectionString);
        console.warn('Retrying MongoDB connection with a direct Atlas URI...');
        await mongoose.connect(resolvedConnectionString, {
          serverSelectionTimeoutMS: 10000,
          socketTimeoutMS: 45000,
          maxPoolSize: 10,
          minPoolSize: 2,
        });
        console.log('Database connected successfully');
        return mongoose.connection;
      } catch (resolutionError) {
        console.error('Direct Atlas connection failed:', resolutionError.message);
      }
    }

    if (
      fallbackConnectionString &&
      fallbackConnectionString !== connectionString &&
      connectionString.startsWith('mongodb+srv://') &&
      isSrvLookupError(error)
    ) {
      console.warn('Falling back to local MongoDB connection...');
      await mongoose.connect(fallbackConnectionString, {
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        maxPoolSize: 10,
        minPoolSize: 2,
      });
      console.log('Database connected successfully');
      return mongoose.connection;
    }

    throw error;
  }
}