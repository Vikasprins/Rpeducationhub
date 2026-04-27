import SiteShell from '../../components/site-shell';

const hkclCourses = [
  { name: 'HS-CIT (A)', duration: '6 Months', highlight: 'Digital foundation for new learners.' },
  { name: 'HS-CIT (A+)', duration: '1 Year', highlight: 'Extended practical computer certification.' },
  { name: 'DACA', duration: '1 Year', highlight: 'Application-centric HKCL diploma style track.' }
];

export default function HKCLCoursesPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">HKCL Courses</div>
          <h1 className="section-title mt-3 text-4xl font-bold text-navy">Government approved computer programs</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Certified computer training aligned to Haryana Govt. backed learning standards and practical lab usage.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {hkclCourses.map((course, index) => (
            <div key={course.name} className={`rounded-[1.8rem] p-6 text-white shadow-glow ${index === 1 ? 'bg-gold text-navy' : 'bg-navy'}`}>
              <div className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.28em] ${index === 1 ? 'bg-white/70 text-navy' : 'bg-white/10 text-white/75'}`}>
                HKCL Certified
              </div>
              <h2 className="mt-5 font-heading text-2xl font-bold">{course.name}</h2>
              <p className="mt-2 text-sm leading-6 text-white/78">{course.highlight}</p>
              <div className={`mt-6 rounded-2xl px-4 py-3 text-sm font-bold ${index === 1 ? 'bg-white/70 text-navy' : 'bg-white/8 text-white'}`}>
                Duration: {course.duration}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}