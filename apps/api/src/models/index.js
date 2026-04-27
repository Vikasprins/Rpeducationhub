import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const commonOptions = { timestamps: true };

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true },
    role: { type: String, required: true, enum: ['admin', 'teacher', 'counselor', 'receptionist', 'lab', 'staff'] },
    name: { type: String, required: true, trim: true },
    active: { type: Boolean, default: true }
  },
  commonOptions
);

const courseSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    websiteVisible: { type: Boolean, default: true },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'User', default: null }
  },
  commonOptions
);

const inquirySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    email: { type: String, trim: true, default: '' },
    course: { type: String, required: true, trim: true },
    message: { type: String, default: '' },
    status: { type: String, default: 'new', enum: ['new', 'called', 'follow-up', 'converted', 'closed'] },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    followUps: [
      {
        note: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        createdBy: { type: String, default: 'system' }
      }
    ]
  },
  commonOptions
);

const studentSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    email: { type: String, trim: true, default: '' },
    aadhaar: { type: String, default: '' },
    photoUrl: { type: String, default: '' },
    course: { type: String, required: true, trim: true },
    admissionNo: { type: String, required: true, unique: true },
    batch: { type: String, default: '' },
    status: { type: String, default: 'active', enum: ['active', 'inactive', 'completed'] },
    feesPaid: { type: Number, default: 0 },
    remarks: [{ text: String, createdAt: { type: Date, default: Date.now }, createdBy: String }]
  },
  commonOptions
);

const feeSchema = new Schema(
  {
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    amount: { type: Number, required: true },
    mode: { type: String, required: true, enum: ['Cash', 'UPI', 'Online'] },
    receiptNo: { type: String, required: true, unique: true },
    paidAt: { type: Date, default: Date.now },
    remarks: { type: String, default: '' }
  },
  commonOptions
);

const attendanceSchema = new Schema(
  {
    batch: { type: String, required: true },
    date: { type: Date, required: true },
    entries: [
      {
        student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
        status: { type: String, required: true, enum: ['Present', 'Absent', 'Late'] },
        remark: { type: String, default: '' }
      }
    ]
  },
  commonOptions
);

const certificateSchema = new Schema(
  {
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    serialNo: { type: String, required: true, unique: true },
    status: { type: String, default: 'pending', enum: ['pending', 'issued'] },
    issuedAt: { type: Date, default: null }
  },
  commonOptions
);

const libraryMemberSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    seatNo: { type: String, default: '' },
    expiryDate: { type: Date, required: true },
    feeAmount: { type: Number, default: 599 },
    status: { type: String, default: 'active', enum: ['active', 'expired', 'renewal-due'] }
  },
  commonOptions
);

const staffSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, enum: ['teacher', 'counselor', 'receptionist', 'lab'] },
    phone: { type: String, default: '' },
    permissions: [{ type: String }],
    active: { type: Boolean, default: true }
  },
  commonOptions
);

const contentSchema = new Schema(
  {
    heroTitle: { type: String, default: '' },
    heroSubtitle: { type: String, default: '' },
    testimonials: [{ name: String, role: String, quote: String }],
    notices: [{ title: String, body: String }],
    gallery: [{ url: String, alt: String }],
    contactInfo: {
      address: { type: String, default: '' },
      phones: [{ type: String }],
      mapUrl: { type: String, default: '' }
    }
  },
  commonOptions
);

export const User = models.User || model('User', userSchema);
export const Course = models.Course || model('Course', courseSchema);
export const Inquiry = models.Inquiry || model('Inquiry', inquirySchema);
export const Student = models.Student || model('Student', studentSchema);
export const Fee = models.Fee || model('Fee', feeSchema);
export const Attendance = models.Attendance || model('Attendance', attendanceSchema);
export const Certificate = models.Certificate || model('Certificate', certificateSchema);
export const LibraryMember = models.LibraryMember || model('LibraryMember', libraryMemberSchema);
export const Staff = models.Staff || model('Staff', staffSchema);
export const Content = models.Content || model('Content', contentSchema);