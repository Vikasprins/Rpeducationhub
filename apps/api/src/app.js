import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { createApiRouter } from './routes/index.js';
import { requireAuth } from './middleware/auth.js';

export function createApp({ webOrigin }) {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: webOrigin, credentials: true }));
  app.use(express.json({ limit: '2mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));

  app.get('/health', (_req, res) => {
    res.json({ ok: true });
  });

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