import mongoose from 'mongoose';

const CareerSchema = new mongoose.Schema({
  // Job Information
  jobId: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  
  // Applicant Information
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  experience: {
    type: String,
    required: true,
    enum: ['0-2', '3-5', '6-10', '10+']
  },
  linkedIn: {
    type: String,
    trim: true
  },
  
  // Application Content
  coverLetter: {
    type: String,
    required: true
  },
  
  // Resume File
  resumeUrl: {
    type: String,
    required: true
  },
  resumeFileName: {
    type: String,
    required: true
  },
  
  // Application Status
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'shortlisted', 'interview', 'hired', 'rejected'],
    default: 'pending'
  },
  
  // Admin Notes
  adminNotes: {
    type: String,
    default: ''
  },
  
  // Timestamps
  appliedAt: {
    type: Date,
    default: Date.now
  },
  
  // Additional metadata
  ipAddress: String,
  userAgent: String
}, {
  timestamps: true
});

// Index for efficient queries
CareerSchema.index({ email: 1, jobId: 1 });
CareerSchema.index({ status: 1 });
CareerSchema.index({ appliedAt: -1 });

const Career = mongoose.models.Career || mongoose.model('Career', CareerSchema);

export default Career;