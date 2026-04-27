import AdminShell from '../../components/admin-shell';
import { CourseDistributionChart, EnrollmentChart, InquiryTrendChart } from '../../components/charts';

const cards = [
  { label: 'Students', value: '1,248', tone: 'bg-navy text-white' },
  { label: 'Revenue', value: '₹8.4L', tone: 'bg-gold text-navy' },
  { label: 'Inquiries', value: '86', tone: 'bg-white text-navy border border-slate-200' },
  { label: 'Library Members', value: '314', tone: 'bg-navy-deep text-white' }
];

const recent = [
  ['Aman Kumar', 'HS-CIT(A)', 'Pending'],
  ['Priya Sharma', 'Library', 'Approved'],
  ['Rohit Singh', 'Full Stack Web Dev', 'Follow-up'],
  ['Neha Verma', 'COPA', 'Admitted']
];

export default function AdminDashboardPage() {
  return (
    <AdminShell>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div key={card.label} className={`rounded-[1.5rem] p-5 shadow-sm ${card.tone}`}>
            <div className="text-sm font-semibold opacity-80">{card.label}</div>
            <div className="mt-2 font-heading text-3xl font-bold">{card.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <EnrollmentChart />
        <CourseDistributionChart />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <InquiryTrendChart />
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-heading text-lg font-bold text-navy">Recent Admissions</h3>
          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-3">Student</th>
                  <th className="px-4 py-3">Course</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recent.map(([student, course, status]) => (
                  <tr key={student} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-semibold text-slate-700">{student}</td>
                    <td className="px-4 py-3 text-slate-600">{course}</td>
                    <td className="px-4 py-3 text-slate-500">{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}