import SiteShell from '../../components/site-shell';

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">About Us</div>
            <h1 className="section-title mt-3 text-4xl font-bold text-navy">A disciplined institute with government authorized learning pathways</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              RP Education Hub serves students in Hisar through HKCL computer courses, ITI and vocational training, and library science support.
            </p>
          </div>
          <div className="panel rounded-[2rem] p-8">
            <h2 className="font-heading text-2xl font-bold text-navy">Our focus</h2>
            <div className="mt-5 grid gap-3 text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 px-4 py-3">Practical education with trackable progress</div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">Supportive admissions and counseling desk</div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">Certification-ready batches and lab support</div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">Community trust across the local area</div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}