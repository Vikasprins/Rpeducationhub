"use client";

import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, BarElement, CategoryScale, Legend, LinearScale, LineElement, PointElement, Tooltip);

const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        boxWidth: 10,
        color: '#0b1b3f'
      }
    }
  }
};

export function EnrollmentChart() {
  return (
    <div className="h-80 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="font-heading text-lg font-bold text-navy">Enrollment Trend</h3>
        <p className="text-sm text-slate-500">Monthly enrollments across course categories</p>
      </div>
      <div className="h-56">
        <Bar
          options={commonOptions}
          data={{
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                label: 'Enrollments',
                data: [42, 58, 66, 72, 80, 91],
                backgroundColor: '#0B2A6B',
                borderRadius: 12
              }
            ]
          }}
        />
      </div>
    </div>
  );
}

export function CourseDistributionChart() {
  return (
    <div className="h-80 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="font-heading text-lg font-bold text-navy">Course Distribution</h3>
        <p className="text-sm text-slate-500">Admission mix across institute programs</p>
      </div>
      <div className="h-56">
        <Doughnut
          options={commonOptions}
          data={{
            labels: ['HKCL', 'IT', 'ITI / NCVT', 'Vocational', 'Library Science'],
            datasets: [
              {
                data: [38, 19, 21, 12, 10],
                backgroundColor: ['#0B2A6B', '#E6A817', '#C0392B', '#1F4AA5', '#9DB4F7'],
                borderWidth: 0
              }
            ]
          }}
        />
      </div>
    </div>
  );
}

export function InquiryTrendChart() {
  return (
    <div className="h-80 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="font-heading text-lg font-bold text-navy">Inquiry Trend</h3>
        <p className="text-sm text-slate-500">Walk-ins, calls, and form submissions</p>
      </div>
      <div className="h-56">
        <Line
          options={commonOptions}
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                label: 'Inquiries',
                data: [18, 22, 25, 24, 31, 34, 29],
                borderColor: '#E6A817',
                backgroundColor: 'rgba(230,168,23,0.18)',
                tension: 0.35,
                fill: true,
                pointRadius: 4
              }
            ]
          }}
        />
      </div>
    </div>
  );
}