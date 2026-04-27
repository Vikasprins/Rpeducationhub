import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/auth.js';

export function createResourceRouter(model, { createRoles = ['admin'], updateRoles = ['admin'], deleteRoles = ['admin'], searchFields = [] } = {}) {
  const router = Router();

  router.get('/', requireAuth, async (req, res, next) => {
    try {
      const items = await model.find({}).sort({ createdAt: -1 }).limit(500).lean();
      return res.json({ items });
    } catch (error) {
      return next(error);
    }
  });

  if (searchFields.length) {
    router.get('/search', requireAuth, async (req, res, next) => {
      try {
        const query = String(req.query.q || '').trim();
        const filter = query
          ? {
              $or: searchFields.map((field) => ({ [field]: new RegExp(query, 'i') }))
            }
          : {};
        const items = await model.find(filter).limit(100).lean();
        return res.json({ items });
      } catch (error) {
        return next(error);
      }
    });
  }

  router.get('/:id', requireAuth, async (req, res, next) => {
    try {
      const item = await model.findById(req.params.id).lean();
      if (!item) {
        return res.status(404).json({ message: 'Not found' });
      }
      return res.json({ item });
    } catch (error) {
      return next(error);
    }
  });

  router.post('/', requireAuth, requireRole(...createRoles), async (req, res, next) => {
    try {
      const created = await model.create(req.body);
      return res.status(201).json({ item: created });
    } catch (error) {
      return next(error);
    }
  });

  router.put('/:id', requireAuth, requireRole(...updateRoles), async (req, res, next) => {
    try {
      const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!item) {
        return res.status(404).json({ message: 'Not found' });
      }
      return res.json({ item });
    } catch (error) {
      return next(error);
    }
  });

  router.delete('/:id', requireAuth, requireRole(...deleteRoles), async (req, res, next) => {
    try {
      const item = await model.findByIdAndDelete(req.params.id);
      if (!item) {
        return res.status(404).json({ message: 'Not found' });
      }
      return res.json({ message: 'Deleted' });
    } catch (error) {
      return next(error);
    }
  });

  return router;
}