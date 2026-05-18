import dotenv from 'dotenv';

// Load .env file only in local development
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  dotenv.config();
}

export const env = {
  port: Number(process.env.PORT || 4000),
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  webOrigin: process.env.WEB_ORIGIN || 'http://localhost:3000',
  adminUsername: process.env.ADMIN_USERNAME || 'admin',
  adminPassword: process.env.ADMIN_PASSWORD || 'Admin@12345',
  nodeEnv: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production'
};

// Validate required environment variables
if (!env.mongoUri) {
  console.error('ERROR: MONGO_URI environment variable is not set');
  if (!process.env.VERCEL) {
    throw new Error('MONGO_URI is required. Set it in .env or environment variables');
  }
}

if (!env.jwtSecret) {
  console.error('ERROR: JWT_SECRET environment variable is not set');
  if (!process.env.VERCEL) {
    throw new Error('JWT_SECRET is required. Set it in .env or environment variables');
  }
}