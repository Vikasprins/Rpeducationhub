import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { Attendance, Certificate, Course, Fee, Inquiry, LibraryMember, Student } from '../models/index.js';

export function dashboardRouter() {
  const router = Router();

  router.get('/summary', requireAuth, async (_req, res, next) => {
    try {
      const [students, revenue, inquiries, members, courses] = await Promise.all([
        Student.countDocuments(),
        Fee.aggregate([{ $group: { _id: null, total: { $sum: '$amount' } } }]),
        Inquiry.countDocuments(),
        LibraryMember.countDocuments(),
        Course.countDocuments()
      ]);

      return res.json({
        students,
        revenue: revenue[0]?.total || 0,
        inquiries,
        members,
        courses,
        certificates: await Certificate.countDocuments({ status: 'issued' }),
        attendanceEntries: await Attendance.countDocuments()
      });
    } catch (error) {
      return next(error);
    }
  });

  router.get('/chart-data', requireAuth, async (_req, res, next) => {
    try {
      const inquiriesByStatus = await Inquiry.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]);
      const courseBreakdown = await Student.aggregate([{ $group: { _id: '$course', count: { $sum: 1 } } }, { $sort: { count: -1 } }, { $limit: 10 }]);

      return res.json({
        inquiriesByStatus,
        courseBreakdown,
        enrollmentTrend: [
          { label: 'Jul', value: 42 },
          { label: 'Aug', value: 58 },
          { label: 'Sep', value: 66 },
          { label: 'Oct', value: 72 },
          { label: 'Nov', value: 80 },
          { label: 'Dec', value: 91 }
        ]
      });
    } catch (error) {
      return next(error);
    }
  });

  return router;
}