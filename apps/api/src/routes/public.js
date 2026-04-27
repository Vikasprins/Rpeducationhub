import { Router } from 'express';
import { z } from 'zod';
import { Content, Inquiry } from '../models/index.js';

const inquirySchema = z.object({
  name: z.string().min(2),
  mobile: z.string().min(6),
  email: z.string().email().optional().or(z.literal('')),
  course: z.string().min(2),
  message: z.string().optional().or(z.literal(''))
});

export function publicRouter() {
  const router = Router();

  router.get('/content', async (_req, res, next) => {
    try {
      const item = await Content.findOne({}).lean();
      return res.json({ content: item });
    } catch (error) {
      return next(error);
    }
  });

  router.post('/inquiries', async (req, res, next) => {
    try {
      const parsed = inquirySchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: 'Invalid inquiry payload' });
      }

      const inquiry = await Inquiry.create({
        ...parsed.data,
        status: 'new'
      });

      return res.status(201).json({ inquiry });
    } catch (error) {
      return next(error);
    }
  });

  return router;
}