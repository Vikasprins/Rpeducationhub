"use client";

import Link from 'next/link';
import { ArrowRight, BadgeCheck, Sparkles, Star } from 'lucide-react';
import { useMemo, useState } from 'react';
import SiteShell from '../components/site-shell';

const govtBadges = ['HKCL', 'Haryana Govt.', 'NIELIT', 'ITI'];

const featuredCourses = [
  {
    title: 'HS-CIT A',
    meta: '6 Months',
    badge: 'HKCL Govt.',
    color: 'from-navy to-[#163c8f]'
  },
  {
    title: 'HS-CIT A+',
    meta: '1 Year',
    badge: 'HKCL Govt.',
    color: 'from-[#10326f] to-[#1d4fd7]'
  },
  {
    title: 'DACA',
    meta: '1 Year',
    badge: 'HKCL Govt.',
    color: 'from-[#0a214f] to-[#163c8f]'
  }
];

const allCourses = [
  { title: 'Full Stack Web Dev', category: 'IT Courses', duration: '12 Months', icon: '💻' },
  { title: 'Graphics + Python', category: 'IT Courses', duration: '9 Months', icon: '🎨' },
  { title: 'UI/UX + Digital Marketing', category: 'IT Courses', duration: '8 Months', icon: '⚡' },
  { title: 'Electrician', category: 'ITI / NCVT', duration: '2 Years', icon: '🔌' },
  { title: 'COPA', category: 'ITI / NCVT', duration: '1 Year', icon: '🖥️' },
  { title: 'Radiology', category: 'ITI / NCVT', duration: '2 Years', icon: '🩻' },
  { title: 'Plumber', category: 'ITI / NCVT', duration: '1 Year', icon: '🚰' },
  { title: 'HSI', category: 'ITI / NCVT', duration: '1 Year', icon: '🏭' },
  { title: 'Fire Technology & Safety', category: 'Vocational', duration: '1 Year', icon: '🧯' },
  { title: 'Yoga Trainer', category: 'Vocational', duration: '6 Months', icon: '🧘' },
  { title: 'ECCE / NTT', category: 'Vocational', duration: '1 Year', icon: '📚' },
  { title: 'Library Science', category: 'Academic', duration: 'D.Lib / B.Lib / M.Lib', icon: '📖' }
];

const stats = [
  { value: '25+', label: 'Years of Guidance' },
  { value: '9+', label: 'Course Tracks' },
  { value: '1200+', label: 'Students Trained' },
  { value: '100%', label: 'Govt. Authorized' }
];

const reasons = [
  { title: 'Authorized Learning Path', text: 'HKCL-certified courses with practical classroom and lab sessions.' },
  { title: 'Career Guidance', text: 'Counseling, enrollment support, and placement-focused course planning.' },
  { title: 'Trusted by Families', text: 'Local reach in Hisar with transparent updates, fees, and progress tracking.' },
  { title: 'Modern Classroom Setup', text: 'Computer lab environment, attendance records, and digital learning support.' }
];

const testimonials = [
  {
    name: 'Aman Kumar',
    role: 'HS-CIT Student',
    quote: 'The HKCL course structure is practical, and the support team keeps the learning pace comfortable.'
  },
  {
    name: 'Priya Sharma',
    role: 'Library Member',
    quote: 'The upgraded library plan and study environment made revision and exam prep much easier.'
  },
  {
    name: 'Rohit Singh',
    role: 'Full Stack Learner',
    quote: 'Strong guidance on projects, attendance, and certificates. The centre feels organized and responsive.'
  }
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const testimonial = useMemo(() => testimonials[index], [index]);

  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 soft-grid opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm">
              <Sparkles className="h-4 w-4 text-gold" />
              Government Authorized HKCL Computer Centre
            </div>
            <h1 className="section-title max-w-4xl text-4xl font-bold leading-tight text-navy md:text-6xl">
              उज्जवल भविष्य के लिए एक trusted computer institute
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              RP Education Hub combines HKCL-certified computer education, ITI-aligned training, vocational programs,
              and library science support under one disciplined learning environment in Hisar.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/admission" className="rounded-full px-6 py-3 text-sm font-bold btn-primary">
                Start Admission
              </Link>
              <Link href="/courses" className="rounded-full px-6 py-3 text-sm font-bold btn-secondary">
                Explore Courses
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="panel rounded-3xl p-5">
                  <div className="text-2xl font-black text-navy">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel relative rounded-[2rem] p-6 shadow-glow">
            <div className="absolute right-5 top-5 rounded-full bg-gold px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-navy-deep">
              Enroll Open
            </div>
            <div className="space-y-5 pt-14">
              <div className="rounded-[1.5rem] bg-navy p-6 text-white">
                <div className="text-xs uppercase tracking-[0.28em] text-white/60">Campus Highlight</div>
                <div className="mt-2 font-heading text-3xl font-bold">Khalon Tower, Talaki Gate</div>
                <p className="mt-3 text-sm leading-7 text-white/76">
                  Near Local Bus Stand, Hisar. Accessible for students from city and nearby villages.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {govtBadges.map((badge) => (
                  <div key={badge} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center font-bold text-navy">
                    {badge}
                  </div>
                ))}
              </div>

              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Library Offer</div>
                    <div className="mt-1 font-heading text-xl font-bold text-navy">₹599 / month</div>
                  </div>
                  <div className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold">Was ₹1200</div>
                </div>
                <p className="mt-3 text-sm text-slate-500">Reading seats, study support, and focused preparation space for learners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="panel flex flex-wrap items-center justify-between gap-4 rounded-3xl px-6 py-5">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Authorized By</div>
            <h2 className="section-title mt-1 text-2xl font-bold text-navy">HKCL | Haryana Govt. | NIELIT | ITI</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {govtBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">HKCL Courses</div>
            <h2 className="section-title mt-1 text-3xl font-bold text-navy">Featured government programs</h2>
          </div>
          <Link href="/hkcl-courses" className="hidden items-center gap-2 text-sm font-bold text-navy md:inline-flex">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredCourses.map((course) => (
            <div key={course.title} className={`rounded-[1.75rem] bg-gradient-to-br ${course.color} p-6 text-white shadow-glow`}>
              <div className="inline-flex rounded-full bg-white/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.28em] text-white/80">
                {course.badge}
              </div>
              <h3 className="mt-5 font-heading text-2xl font-bold">{course.title}</h3>
              <p className="mt-2 text-white/75">{course.meta} program with classroom support, lab guidance, and certification preparation.</p>
              <Link href="/admission" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-navy">
                Enroll now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="mb-8 max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">All Courses</div>
          <h2 className="section-title mt-1 text-3xl font-bold text-navy">Computer, ITI, vocational, and academic options</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {allCourses.map((course) => (
            <div key={course.title} className="panel rounded-[1.5rem] p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="text-3xl">{course.icon}</div>
                <div className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold">{course.duration}</div>
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy">{course.title}</h3>
              <p className="mt-2 text-sm font-semibold text-slate-500">{course.category}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600">
                <BadgeCheck className="h-4 w-4 text-gold" />
                Practical lab support
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-navy p-8 text-white shadow-glow">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Library Section</div>
          <h2 className="section-title mt-3 text-3xl font-bold">Study atmosphere for learners who need focus</h2>
          <p className="mt-4 text-sm leading-7 text-white/75">
            The library offers structured seats, study timing support, and a reduced monthly package designed for regular exam preparation.
          </p>
          <div className="mt-6 flex items-end gap-3">
            <div className="text-4xl font-black text-gold">₹599</div>
            <div className="pb-1 text-sm text-white/55 line-through">₹1200</div>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-white/78 sm:grid-cols-2">
            {['Quiet reading desks', 'Daily access control', 'Renewal reminders', 'Affordable monthly plan'].map((item) => (
              <div key={item} className="rounded-2xl bg-white/8 px-4 py-3">{item}</div>
            ))}
          </div>
        </div>

        <div className="panel rounded-[2rem] p-8">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Why Choose Us</div>
          <h2 className="section-title mt-3 text-3xl font-bold text-navy">The institute experience is intentional, not generic</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {reasons.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5">
                <div className="font-heading text-lg font-bold text-navy">{item.title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Testimonials</div>
            <h2 className="section-title mt-1 text-3xl font-bold text-navy">Student reviews</h2>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-navy">
              Prev
            </button>
            <button type="button" onClick={() => setIndex((value) => (value + 1) % testimonials.length)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-navy">
              Next
            </button>
          </div>
        </div>

        <div className="panel rounded-[2rem] p-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[1.6rem] bg-navy p-6 text-white">
              <div className="flex items-center gap-2 text-gold">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="mt-4 text-sm uppercase tracking-[0.28em] text-white/55">{testimonial.role}</div>
              <div className="mt-2 font-heading text-2xl font-bold">{testimonial.name}</div>
            </div>
            <div className="flex items-center rounded-[1.6rem] bg-slate-50 p-6">
              <p className="text-lg leading-8 text-slate-700">“{testimonial.quote}”</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-6 lg:grid-cols-[1fr_0.9fr]">
        <form
          className="panel rounded-[2rem] p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Enrollment Form</div>
          <h2 className="section-title mt-3 text-3xl font-bold text-navy">Send an admission enquiry</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input className="input-field" placeholder="Student name" required />
            <input className="input-field" placeholder="Mobile number" required />
            <input className="input-field" placeholder="Email address" type="email" />
            <select className="input-field">
              <option>Choose course</option>
              <option>HS-CIT(A)</option>
              <option>HS-CIT(A+)</option>
              <option>DACA</option>
              <option>Full Stack Web Dev</option>
              <option>Electrician</option>
            </select>
          </div>
          <textarea className="input-field mt-4 min-h-36" placeholder="Tell us about your goal or preferred batch timing" />
          <button type="submit" className="mt-5 rounded-full px-6 py-3 text-sm font-bold btn-primary">
            Submit Enquiry
          </button>
          {submitted ? <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">Your enquiry has been prepared for the admissions desk.</p> : null}
        </form>

        <div className="grid gap-6">
          <div className="panel rounded-[2rem] p-8">
            <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Contact & Visit</div>
            <h2 className="section-title mt-3 text-3xl font-bold text-navy">Locate the centre in Hisar</h2>
            <div className="mt-6 grid gap-4 text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 px-4 py-3">1st Floor, Khalon Tower, Talaki Gate</div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">Near Local Bus Stand, Hisar, Haryana</div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">Phone: 76800-26900, 76800-35900</div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <iframe
              title="RP Education Hub location"
              className="h-96 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Khalon%20Tower%20Talaki%20Gate%20Hisar&output=embed"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}