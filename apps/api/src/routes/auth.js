import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { env } from '../config/env.js';
import { User } from '../models/index.js';
import { requireAuth } from '../middleware/auth.js';

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1)
});

export function authRouter() {
  const router = Router();

  router.post('/login', async (req, res, next) => {
    try {
      const parsed = loginSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const user = await User.findOne({ username: parsed.data.username, active: true });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const passwordOk = await bcrypt.compare(parsed.data.password, user.passwordHash);
      if (!passwordOk) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ sub: user._id.toString(), role: user.role, name: user.name, username: user.username }, env.jwtSecret, { expiresIn: '7d' });

      return res.json({
        token,
        user: {
          id: user._id,
          name: user.name,
          role: user.role,
          username: user.username
        }
      });
    } catch (error) {
      return next(error);
    }
  });

  router.get('/me', requireAuth, async (req, res) => {
    const user = await User.findById(req.user.sub).lean();
    return res.json({ user });
  });

  return router;
}

export async function seedDefaultUsers() {
  const existing = await User.countDocuments();
  if (existing > 0) {
    return;
  }

  const passwordHash = await bcrypt.hash(env.adminPassword, 10);
  await User.create([
    {
      username: env.adminUsername,
      passwordHash,
      role: 'admin',
      name: 'Administrator'
    },
    {
      username: 'teacher1',
      passwordHash,
      role: 'teacher',
      name: 'Teacher One'
    },
    {
      username: 'counselor1',
      passwordHash,
      role: 'counselor',
      name: 'Counselor One'
    },
    {
      username: 'reception1',
      passwordHash,
      role: 'receptionist',
      name: 'Reception One'
    }
  ]);
}