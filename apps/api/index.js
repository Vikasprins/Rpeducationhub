import { connectDatabase } from './src/config/db.js';
import { env } from './src/config/env.js';
import { createApp } from './src/app.js';
import { seedDefaultUsers } from './src/routes/auth.js';

let app;
let dbConnected = false;
let connectionPromise;
let seedPromise;

async function ensureDatabaseConnected() {
  if (dbConnected) {
    return;
  }

  if (!connectionPromise) {
    connectionPromise = connectDatabase(env.mongoUri, env.mongoFallbackUri)
      .then(async () => {
        dbConnected = true;

        if (!seedPromise) {
          seedPromise = seedDefaultUsers().catch((error) => {
            console.error('Default user seeding skipped:', error.message);
          });
        }

        await seedPromise;
      })
      .catch((error) => {
        connectionPromise = undefined;
        throw error;
      });
  }

  return connectionPromise;
}

async function initializeApp() {
  if (app) return app;

  try {
    app = createApp({
      webOrigin: env.webOrigin,
      ensureDatabaseConnected,
    });
    return app;
  } catch (error) {
    console.error('Failed to initialize app:', error);
    throw error;
  }
}

export default async (req, res) => {
  try {
    if (!app) {
      app = await initializeApp();
    }
    return app(req, res);
  } catch (error) {
    console.error('Function error:', error);
    if (!res.headersSent) {
      res.status(500).json({
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? error.message : 'An error occurred'
      });
    }
  }
};
