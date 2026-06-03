import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { createApiRouter } from './routes/index.js';
import { requireAuth } from './middleware/auth.js';

export function createApp({ webOrigin, ensureDatabaseConnected } = {}) {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: webOrigin, credentials: true }));
  app.use(express.json({ limit: '2mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));

  app.get('/health', (_req, res) => {
    res.json({ ok: true });
  });

  if (ensureDatabaseConnected) {
    app.use(async (req, res, next) => {
      if (req.path === '/health') {
        return next();
      }

      try {
        await ensureDatabaseConnected();
        return next();
      } catch (error) {
        console.error('Database unavailable:', error.message);
        return res.status(503).json({ message: 'Database unavailable' });
      }
    });
  }

  app.use('/api', createApiRouter());

  app.get('/api/private', requireAuth, (_req, res) => {
    res.json({ message: 'Authenticated' });
  });

  app.use((error, _req, res, _next) => {
    const status = error.status || 500;
    res.status(status).json({ message: error.message || 'Server error' });
  });

  return app;
}