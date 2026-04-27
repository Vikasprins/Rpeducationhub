import SiteShell from '../../components/site-shell';

const courses = [
  { title: 'HS-CIT (A)', category: 'HKCL Govt', duration: '6 Months', detail: 'Computer literacy and practical digital skills.' },
  { title: 'HS-CIT (A+)', category: 'HKCL Govt', duration: '1 Year', detail: 'Advanced computer operation and application support.' },
  { title: 'DACA', category: 'HKCL Govt', duration: '1 Year', detail: 'Diploma track with practical office productivity training.' },
  { title: 'Full Stack Web Dev', category: 'IT Courses', duration: '12 Months', detail: 'Frontend, backend, database, and deployment fundamentals.' },
  { title: 'Graphics + Python', category: 'IT Courses', duration: '9 Months', detail: 'Design workflows, scripting, and automation basics.' },
  { title: 'UI/UX + Digital Marketing', category: 'IT Courses', duration: '8 Months', detail: 'Product design thinking with digital growth tools.' },
  { title: 'Electrician', category: 'ITI / NCVT', duration: '2 Years', detail: 'Trade-focused practical training for industrial work.' },
  { title: 'COPA', category: 'ITI / NCVT', duration: '1 Year', detail: 'Computer operator and programming assistant training.' },
  { title: 'Library Science', category: 'Academic', duration: 'D.Lib / B.Lib / M.Lib', detail: 'Academic path for library and information roles.' }
];

export default function CoursesPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Courses</div>
          <h1 className="section-title mt-3 text-4xl font-bold text-navy">All learning tracks in one place</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We offer government authorized HKCL programs, IT courses, ITI/NCVT trades, vocational tracks, and academic study support.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <article key={course.title} className="panel rounded-[1.6rem] p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.28em] text-gold">{course.category}</span>
                <span className="text-sm font-bold text-navy">{course.duration}</span>
              </div>
              <h2 className="mt-5 font-heading text-2xl font-bold text-navy">{course.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{course.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}