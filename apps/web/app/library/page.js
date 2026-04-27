import SiteShell from '../../components/site-shell';

const features = [
  'Study seating and focused timing',
  'Affordable monthly library plan',
  'Renewal reminders and fee tracking',
  'Support for exam preparation'
];

export default function LibraryPage() {
  return (
    <SiteShell>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] bg-navy p-8 text-white shadow-glow">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Library</div>
          <h1 className="section-title mt-3 text-4xl font-bold">A focused study zone for serious learners</h1>
          <p className="mt-4 text-base leading-8 text-white/76">
            The library package is designed to be affordable and practical, with a revised price of ₹599/month.
          </p>
          <div className="mt-6 flex items-end gap-3">
            <div className="text-5xl font-black text-gold">₹599</div>
            <div className="pb-2 text-sm text-white/55 line-through">₹1200</div>
          </div>
        </div>

        <div className="panel rounded-[2rem] p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="rounded-3xl border border-slate-200 bg-white p-5">
                <div className="font-heading text-lg font-bold text-navy">{feature}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">Regular access, practical oversight, and clean study conditions.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}