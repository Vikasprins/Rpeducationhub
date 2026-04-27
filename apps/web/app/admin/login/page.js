"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function AdminLoginPage() {
  const [status, setStatus] = useState('idle');

  return (
    <div className="min-h-screen bg-hero px-4 py-10 md:px-6">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-glow lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-navy p-8 text-white md:p-12">
          <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.28em] text-gold">Admin Access</div>
          <h1 className="section-title mt-6 text-4xl font-bold leading-tight">JWT protected login for institute administration</h1>
          <p className="mt-4 max-w-lg text-base leading-8 text-white/78">
            Manage students, fees, inquiries, courses, library members, attendance, certificates, and reports from one secure dashboard.
          </p>
          <div className="mt-8 grid gap-3 text-sm text-white/76">
            <div className="rounded-2xl bg-white/10 px-4 py-3">Navy and gold admin theme</div>
            <div className="rounded-2xl bg-white/10 px-4 py-3">Role aware permissions and audit-friendly screens</div>
            <div className="rounded-2xl bg-white/10 px-4 py-3">Export-ready for receipts, certificates, and reports</div>
          </div>
        </div>

        <div className="flex items-center p-8 md:p-12">
          <div className="mx-auto w-full max-w-md">
            <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Admin Login</div>
            <h2 className="section-title mt-3 text-3xl font-bold text-navy">Sign in to continue</h2>
            <form
              className="mt-8 grid gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                setStatus('success');
              }}
            >
              <input className="input-field" placeholder="Username" required />
              <input className="input-field" placeholder="Password" type="password" required />
              <button type="submit" className="rounded-full px-6 py-3 text-sm font-bold btn-primary">
                Login
              </button>
            </form>
            {status === 'success' ? <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">Demo login captured. Connect this form to JWT auth next.</p> : null}
            <p className="mt-6 text-sm text-slate-500">
              Need staff access? <Link href="/staff" className="font-bold text-navy">Open staff panel</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}