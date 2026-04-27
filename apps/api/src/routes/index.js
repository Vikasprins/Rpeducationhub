import { Router } from 'express';
import { authRouter } from './auth.js';
import { dashboardRouter } from './dashboard.js';
import { createResourceRouter } from './resource.js';
import { publicRouter } from './public.js';
import { Attendance, Certificate, Course, Content, Fee, Inquiry, LibraryMember, Staff, Student } from '../models/index.js';

export function createApiRouter() {
  const router = Router();

  router.use('/auth', authRouter());
  router.use('/dashboard', dashboardRouter());
  router.use('/public', publicRouter());
  router.use('/courses', createResourceRouter(Course, { searchFields: ['title', 'category', 'duration'] }));
  router.use('/students', createResourceRouter(Student, { searchFields: ['name', 'mobile', 'course', 'admissionNo'] }));
  router.use('/inquiries', createResourceRouter(Inquiry, { searchFields: ['name', 'mobile', 'course', 'status'] }));
  router.use('/fees', createResourceRouter(Fee, { searchFields: ['receiptNo', 'mode'] }));
  router.use('/attendance', createResourceRouter(Attendance, { searchFields: ['batch'] }));
  router.use('/certificates', createResourceRouter(Certificate, { searchFields: ['serialNo', 'status'] }));
  router.use('/library', createResourceRouter(LibraryMember, { searchFields: ['name', 'mobile', 'seatNo'] }));
  router.use('/staff', createResourceRouter(Staff, { searchFields: ['name', 'role', 'phone'] }));
  router.use('/content', createResourceRouter(Content));

  return router;
}