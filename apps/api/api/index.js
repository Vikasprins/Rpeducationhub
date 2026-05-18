import { connectDatabase } from '../src/config/db.js';
import { env } from '../src/config/env.js';
import { createApp } from '../src/app.js';

let app;
let dbConnected = false;

async function initializeApp() {
  if (app) return app;

  try {
    if (!dbConnected && env.mongoUri) {
      await connectDatabase(env.mongoUri);
      dbConnected = true;
    }
    app = createApp({ webOrigin: env.webOrigin });
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
    // Call Express app with request and response
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
