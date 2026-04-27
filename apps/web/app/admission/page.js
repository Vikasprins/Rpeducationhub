import Link from 'next/link';
import SiteShell from '../../components/site-shell';

const steps = [
  'Choose your program',
  'Submit enquiry or visit the centre',
  'Complete admission and fee formalities',
  'Start your batch with timetable support'
];

export default function AdmissionPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Admission</div>
          <h1 className="section-title mt-3 text-4xl font-bold text-navy">Admission process made simple</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">We keep the process straightforward, transparent, and centered around your learning goals.</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="panel rounded-[1.6rem] p-6">
              <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Step {index + 1}</div>
              <div className="mt-3 font-heading text-xl font-bold text-navy">{step}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-full px-6 py-3 text-sm font-bold btn-primary">
            Visit / Call Us
          </Link>
          <Link href="/admin/login" className="rounded-full px-6 py-3 text-sm font-bold btn-secondary">
            Admin Login
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}