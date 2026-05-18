import mongoose from 'mongoose';

export async function connectDatabase(connectionString) {
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
      retryWrites: true,
      w: 'majority'
    });
    console.log('Database connected successfully');
    return mongoose.connection;
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    throw error;
  }
}