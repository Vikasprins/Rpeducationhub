"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';
import { useMemo, useState } from 'react';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/hkcl-courses', label: 'HKCL Courses' },
  { href: '/library', label: 'Library' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/admission', label: 'Admission' }
];

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const activeLabel = useMemo(
    () => navigation.find((item) => item.href === pathname)?.label ?? 'Home',
    [pathname]
  );

  return (
    <div className="min-h-screen text-slate-900">
      <div className="bg-navy-deep text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm md:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-semibold">
              <Phone className="h-4 w-4 text-gold" />
              76800-26900 · 76800-35900
            </span>
            <span className="hidden rounded-full border border-white/15 px-3 py-1 text-white/85 md:inline-flex">
              Govt. Authorized HKCL Centre
            </span>
          </div>
          <div className="text-white/75">{activeLabel} • RP Education Hub</div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-lg font-black text-white shadow-glow">
              RP
            </div>
            <div>
              <div className="font-heading text-lg font-bold tracking-tight text-navy">RP Education Hub</div>
              <div className="text-xs font-medium uppercase tracking-[0.28em] text-slate-500">HKCL Computer Centre</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${pathname === item.href ? 'bg-navy text-white shadow' : 'text-slate-700 hover:bg-slate-100 hover:text-navy'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/admission"
              className="hidden rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 md:inline-flex btn-primary"
            >
              Enroll Now
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy lg:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden md:px-6">
            <div className="grid gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold ${pathname === item.href ? 'bg-navy text-white' : 'bg-slate-50 text-slate-700'}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/admission" onClick={() => setMenuOpen(false)} className="rounded-2xl px-4 py-3 text-center font-bold btn-primary">
                Enroll Now
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="bg-navy-deep text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 md:px-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-sm font-black text-navy-deep">
                RP
              </div>
              <div>
                <div className="font-heading text-lg font-bold">RP Education Hub</div>
                <div className="text-xs uppercase tracking-[0.28em] text-white/55">HKCL Computer Centre</div>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/72">
              Government authorized computer institute at Khalon Tower, Talaki Gate, Hisar. HKCL certified by Haryana Govt.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-gold">Quick Links</h3>
            <div className="grid gap-2 text-sm text-white/75">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-gold">Contact</h3>
            <div className="grid gap-2 text-sm text-white/75">
              <p>1st Floor, Khalon Tower, Talaki Gate</p>
              <p>Near Local Bus Stand, Hisar, Haryana</p>
              <p>76800-26900</p>
              <p>76800-35900</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-gold">Highlights</h3>
            <div className="grid gap-2 text-sm text-white/75">
              <p>HKCL, Haryana Govt. and NIELIT aligned curriculum</p>
              <p>Computer, ITI, vocational and library science programs</p>
              <p>Practical labs, placement support and certificate tracking</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/55 md:px-6">
          © {new Date().getFullYear()} RP Education Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}