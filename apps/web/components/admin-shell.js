"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, BookOpen, CalendarCheck, ChevronRight, CircleDollarSign, FileBadge2, LayoutDashboard, LogOut, MessageSquareMore, ScrollText, Settings2, ShieldCheck, UserCog, Users } from 'lucide-react';

const modules = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/students', label: 'Student Management', icon: Users },
  { href: '/admin/courses', label: 'Course Management', icon: BookOpen },
  { href: '/admin/inquiries', label: 'Inquiry Management', icon: MessageSquareMore },
  { href: '/admin/fees', label: 'Fee Management', icon: CircleDollarSign },
  { href: '/admin/attendance', label: 'Attendance', icon: CalendarCheck },
  { href: '/admin/certificates', label: 'Certificate', icon: FileBadge2 },
  { href: '/admin/library', label: 'Library', icon: ScrollText },
  { href: '/admin/staff', label: 'Staff', icon: UserCog },
  { href: '/admin/content', label: 'Content', icon: Settings2 },
  { href: '/admin/reports', label: 'Reports', icon: BarChart3 },
  { href: '/admin/login', label: 'Logout', icon: LogOut }
];

export default function AdminShell({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-80 flex-col bg-navy-deep text-white lg:flex">
          <div className="border-b border-white/10 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-lg font-black text-navy-deep">RP</div>
              <div>
                <div className="font-heading text-lg font-bold">RP Admin</div>
                <div className="text-xs uppercase tracking-[0.28em] text-white/55">HKCL Centre</div>
              </div>
            </div>
          </div>

          <nav className="flex-1 space-y-1 p-4">
            {modules.map((item) => {
              const Icon = item.icon;
              const active =
                item.href === pathname ||
                (item.href !== '/admin' && item.href !== '/admin/login' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${active ? 'bg-gold text-navy-deep' : 'text-white/78 hover:bg-white/8 hover:text-white'}`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </span>
                  <ChevronRight className="h-4 w-4 opacity-65" />
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-white/10 p-6 text-sm text-white/70">
            <div className="mb-3 flex items-center gap-3 rounded-2xl bg-white/6 px-4 py-3">
              <ShieldCheck className="h-5 w-5 text-gold" />
              Secure JWT access
            </div>
            <p>Role-based controls for staff, fees, certificates, and reports.</p>
          </div>
        </aside>

        <div className="flex-1">
          <div className="border-b border-slate-200 bg-white px-4 py-4 shadow-sm md:px-6">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Admin Panel</p>
                <h1 className="font-heading text-xl font-bold text-navy">Dashboard Overview</h1>
              </div>
              <Link href="/admin/login" className="rounded-full px-4 py-2 text-sm font-semibold btn-secondary">
                Log out
              </Link>
            </div>
          </div>

          <main className="mx-auto max-w-7xl px-4 py-6 md:px-6">{children}</main>
        </div>
      </div>
    </div>
  );
}