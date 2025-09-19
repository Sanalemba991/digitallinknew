import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/config/db';
import Career from '../../models/Career';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const formData = await request.formData();
    
    // Extract form fields
    const jobId = formData.get('jobId') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const department = formData.get('department') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const experience = formData.get('experience') as string;
    const linkedIn = formData.get('linkedIn') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resume = formData.get('resume') as File;

    // Validation
    if (!jobId || !jobTitle || !department || !firstName || !lastName || !email || !phone || !experience || !coverLetter || !resume) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      );
    }

    // Check if user already applied for this job
    const existingApplication = await Career.findOne({ email, jobId });
    if (existingApplication) {
      return NextResponse.json(
        { error: 'You have already applied for this position' },
        { status: 409 }
      );
    }

    // Handle file upload
    let resumeUrl = '';
    let resumeFileName = '';
    
    if (resume && resume.size > 0) {
      // Create upload directory if it doesn't exist
      const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'resumes');
      try {
        await mkdir(uploadDir, { recursive: true });
      } catch (error) {
        // Directory might already exist
      }

      // Generate unique filename
      const timestamp = Date.now();
      const originalName = resume.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      resumeFileName = `${timestamp}_${originalName}`;
      const filePath = path.join(uploadDir, resumeFileName);
      
      // Convert File to Buffer and save
      const bytes = await resume.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await writeFile(filePath, buffer);
      
      resumeUrl = `/uploads/resumes/${resumeFileName}`;
    }

    // Get request metadata
    const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Create career application
    const careerApplication = new Career({
      jobId,
      jobTitle,
      department,
      firstName,
      lastName,
      email,
      phone,
      experience,
      linkedIn,
      coverLetter,
      resumeUrl,
      resumeFileName,
      ipAddress,
      userAgent
    });

    await careerApplication.save();

    return NextResponse.json(
      { 
        message: 'Application submitted successfully!',
        applicationId: careerApplication._id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Career application error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    const jobId = searchParams.get('jobId');
    const search = searchParams.get('search');

    // Build query
    const query: any = {};
    
    if (status && status !== 'all') {
      query.status = status;
    }
    
    if (jobId) {
      query.jobId = jobId;
    }
    
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { jobTitle: { $regex: search, $options: 'i' } }
      ];
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Get applications with pagination
    const applications = await Career.find(query)
      .sort({ appliedAt: -1 })
      .skip(skip)
      .limit(limit);

    // Get total count for pagination
    const total = await Career.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    // Get status statistics
    const statusStats = await Career.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);

    return NextResponse.json({
      applications,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      },
      statusStats: statusStats.reduce((acc, stat) => {
        acc[stat._id] = stat.count;
        return acc;
      }, {})
    });

  } catch (error) {
    console.error('Get careers error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}