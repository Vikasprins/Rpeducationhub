import SiteShell from '../../components/site-shell';

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="panel rounded-[2rem] p-8">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Contact</div>
          <h1 className="section-title mt-3 text-4xl font-bold text-navy">Get in touch with the admissions desk</h1>
          <div className="mt-6 grid gap-4 text-sm text-slate-600">
            <div className="rounded-2xl bg-slate-50 px-4 py-3">1st Floor, Khalon Tower, Talaki Gate, Near Local Bus Stand, Hisar</div>
            <div className="rounded-2xl bg-slate-50 px-4 py-3">Phone: 76800-26900</div>
            <div className="rounded-2xl bg-slate-50 px-4 py-3">Phone: 76800-35900</div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <iframe
            title="RP Education Hub location"
            className="h-[34rem] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Khalon%20Tower%20Talaki%20Gate%20Hisar&output=embed"
          />
        </div>
      </section>
    </SiteShell>
  );
}