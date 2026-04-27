import { notFound } from 'next/navigation';
import AdminShell from '../../../components/admin-shell';

const moduleConfig = {
  students: {
    title: 'Student Management',
    description: 'Add, edit, delete, export, print ID cards, and manage Aadhaar, fee, photo, and status records.',
    stats: [
      ['Total Students', '1,248'],
      ['Active', '1,102'],
      ['Pending Fees', '86']
    ],
    actions: ['Add Student', 'Upload Photo', 'Export Excel', 'Print ID Card']
  },
  courses: {
    title: 'Course Management',
    description: 'Maintain course visibility, batch assignments, and staff ownership for each program.',
    stats: [
      ['Visible Courses', '18'],
      ['Hidden Drafts', '4'],
      ['Assigned Staff', '9']
    ],
    actions: ['Create Course', 'Toggle Visibility', 'Assign Staff', 'Archive']
  },
  inquiries: {
    title: 'Inquiry Management',
    description: 'Track all enquiry submissions, follow-up notes, and conversion status by counselor.',
    stats: [
      ['New', '24'],
      ['Follow-up', '19'],
      ['Converted', '43']
    ],
    actions: ['Assign Staff', 'Add Follow-up', 'Convert to Enrollment', 'Close Inquiry']
  },
  fees: {
    title: 'Fee Management',
    description: 'Record payments, issue receipts, and surface overdue alerts for students and library members.',
    stats: [
      ['Collected Today', '₹42,600'],
      ['Overdue', '₹1.8L'],
      ['Receipts Issued', '118']
    ],
    actions: ['Record Payment', 'Generate Receipt', 'Mark Overdue', 'Review History']
  },
  attendance: {
    title: 'Attendance',
    description: 'Mark batch-wise daily attendance and flag students below the required threshold.',
    stats: [
      ['Batches Active', '14'],
      ['Below 75%', '17'],
      ['Late Entries', '8']
    ],
    actions: ['Mark Present', 'Mark Absent', 'Mark Late', 'Export Report']
  },
  certificates: {
    title: 'Certificate Management',
    description: 'Auto-generate certificates, assign serial numbers, and track pending versus issued records.',
    stats: [
      ['Pending', '29'],
      ['Issued', '214'],
      ['Serials Generated', '243']
    ],
    actions: ['Generate Certificate', 'Assign Serial No.', 'Preview PDF', 'Mark Issued']
  },
  library: {
    title: 'Library Management',
    description: 'Register members, assign seats, track renewal reminders, and manage library revenue.',
    stats: [
      ['Members', '314'],
      ['Seat Assignments', '92'],
      ['Renewals Due', '21']
    ],
    actions: ['Register Member', 'Assign Seat', 'Renew Membership', 'Send Reminder']
  },
  staff: {
    title: 'Staff Management',
    description: 'Maintain teacher, counselor, receptionist, and lab permissions with secure access control.',
    stats: [
      ['Active Staff', '12'],
      ['Roles', '4'],
      ['Permissions Sets', '8']
    ],
    actions: ['Add Staff', 'Edit Role', 'Set Permissions', 'Deactivate']
  },
  content: {
    title: 'Content Management',
    description: 'Edit hero text, testimonials, notices, gallery, and contact details from one screen.',
    stats: [
      ['Notices', '6'],
      ['Testimonials', '3'],
      ['Gallery Assets', '18']
    ],
    actions: ['Edit Hero', 'Update Testimonials', 'Publish Notice', 'Manage Gallery']
  },
  reports: {
    title: 'Reports',
    description: 'Generate monthly enrollment, fee, attendance, and library revenue reports in PDF or Excel form.',
    stats: [
      ['This Month', '128'],
      ['Exports', '34'],
      ['Scheduled', '7']
    ],
    actions: ['Generate PDF', 'Export Excel', 'Schedule Report', 'Send Email']
  }
};

export default function AdminModulePage({ params }) {
  const config = moduleConfig[params.module];

  if (!config) {
    notFound();
  }

  return (
    <AdminShell>
      <section className="grid gap-6">
        <div className="panel rounded-[2rem] p-8">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Module</div>
          <h2 className="section-title mt-3 text-3xl font-bold text-navy">{config.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{config.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {config.stats.map(([label, value]) => (
            <div key={label} className="rounded-[1.5rem] bg-white p-5 shadow-sm border border-slate-200">
              <div className="text-sm font-semibold text-slate-500">{label}</div>
              <div className="mt-2 font-heading text-3xl font-bold text-navy">{value}</div>
            </div>
          ))}
        </div>

        <div className="panel rounded-[2rem] p-8">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Actions</div>
          <div className="mt-4 flex flex-wrap gap-3">
            {config.actions.map((action) => (
              <button key={action} type="button" className="rounded-full px-5 py-3 text-sm font-bold btn-secondary">
                {action}
              </button>
            ))}
          </div>
        </div>
      </section>
    </AdminShell>
  );
}