import Link from 'next/link';

const roles = [
  { title: 'Teacher', items: ['Assigned course list', 'Attendance marking', 'Remarks and progress notes', 'Struggling student flags'] },
  { title: 'Counselor', items: ['Assigned inquiries', 'Follow-up notes', 'Walk-in inquiry form', 'Inquiry to enrollment conversion'] },
  { title: 'Receptionist', items: ['Enrollment form', 'Fee collection', 'Receipt print', 'Library member registration'] }
];

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-hero px-4 py-10 md:px-6">
      <section className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-glow">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-navy-deep p-8 text-white md:p-12">
            <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.28em] text-gold">Staff Portal</div>
            <h1 className="section-title mt-6 text-4xl font-bold">Role-based access for teachers, counselors, and receptionists</h1>
            <p className="mt-4 max-w-lg text-base leading-8 text-white/78">
              Staff members can manage their own duties, attendance, inquiry follow-up, enrollment, and daily reporting without seeing restricted admin areas.
            </p>
            <Link href="/admin/login" className="mt-8 inline-flex rounded-full px-6 py-3 text-sm font-bold btn-primary">
              Admin login instead
            </Link>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="section-title text-3xl font-bold text-navy">Available role scopes</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {roles.map((role) => (
                <div key={role.title} className="panel rounded-[1.6rem] p-5">
                  <div className="font-heading text-xl font-bold text-navy">{role.title}</div>
                  <ul className="mt-4 grid gap-2 text-sm text-slate-600">
                    {role.items.map((item) => (
                      <li key={item} className="rounded-2xl bg-slate-50 px-3 py-2">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}