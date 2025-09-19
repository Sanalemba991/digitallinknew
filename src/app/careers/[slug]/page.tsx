'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaBriefcase, 
  FaArrowLeft, 
  FaCheckCircle,
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFileUpload,
  FaSpinner
} from 'react-icons/fa';

// Job data from slug1
const jobDetails = {
  "senior-ai-engineer": {
    id: 1,
    title: "Senior AI Engineer",
    department: "Technology",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    level: "Senior",
    salary: "15,000 - 25,000 SAR",
    posted: "2 days ago",
    urgent: true,
    description: "Join our AI team to develop cutting-edge machine learning solutions for enterprise clients. You'll work on challenging projects involving computer vision, natural language processing, and predictive analytics.",
    responsibilities: [
      "Design and implement machine learning models for real-world applications",
      "Collaborate with cross-functional teams to integrate AI solutions",
      "Research and evaluate new AI technologies and methodologies",
      "Optimize model performance and scalability",
      "Mentor junior developers and contribute to best practices",
      "Work with large datasets and develop data preprocessing pipelines"
    ],
    requirements: [
      "Master's degree in Computer Science, AI, or related field",
      "5+ years of experience in AI/ML development",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with computer vision and NLP",
      "Strong understanding of deep learning architectures",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Excellent problem-solving and communication skills",
      "Fluency in English and Arabic"
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Comprehensive health insurance",
      "Professional development budget",
      "Flexible working arrangements",
      "Stock options",
      "Annual technology allowance"
    ],
    team: "AI & Machine Learning",
    reportsTo: "Chief Technology Officer",
    applicationDeadline: "2024-10-15"
  },
  "elv-systems-specialist": {
    id: 2,
    title: "ELV Systems Specialist",
    department: "Solutions",
    location: "Jeddah, Saudi Arabia",
    type: "Full-time",
    level: "Mid-Level",
    salary: "10,000 - 18,000 SAR",
    posted: "1 week ago",
    urgent: false,
    description: "Design and implement comprehensive ELV solutions for smart buildings and facilities. Work on cutting-edge projects involving building automation, security systems, and integrated technology solutions.",
    responsibilities: [
      "Design ELV systems including CCTV, access control, and fire alarm systems",
      "Create technical drawings and specifications using AutoCAD",
      "Oversee installation and commissioning of ELV systems",
      "Coordinate with project teams and clients",
      "Troubleshoot and maintain existing systems",
      "Ensure compliance with local and international standards"
    ],
    requirements: [
      "Bachelor's degree in Electrical Engineering or related field",
      "3+ years of experience in ELV systems design",
      "Proficiency in AutoCAD and electrical design software",
      "Knowledge of fire safety and security systems",
      "Understanding of building automation systems",
      "Project management experience",
      "Saudi Engineering Council registration preferred"
    ],
    benefits: [
      "Competitive salary package",
      "Health and dental insurance",
      "Professional certification support",
      "Career advancement opportunities",
      "Transportation allowance",
      "Annual leave and sick leave"
    ],
    team: "ELV Solutions",
    reportsTo: "Head of Solutions",
    applicationDeadline: "2024-10-30"
  },
  "cybersecurity-analyst": {
    id: 3,
    title: "Cybersecurity Analyst",
    department: "Security",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    level: "Mid-Level",
    salary: "12,000 - 20,000 SAR",
    posted: "3 days ago",
    urgent: true,
    description: "Protect our clients' digital assets with advanced security monitoring and threat detection. Join our cybersecurity team to implement robust security measures and respond to emerging threats.",
    responsibilities: [
      "Monitor security events and investigate potential threats",
      "Implement and maintain security tools and technologies",
      "Conduct vulnerability assessments and penetration testing",
      "Develop incident response procedures",
      "Create security awareness training programs",
      "Ensure compliance with cybersecurity frameworks"
    ],
    requirements: [
      "Bachelor's degree in Cybersecurity or related field",
      "CISSP, CEH, or similar security certifications",
      "3+ years of SOC experience",
      "Knowledge of SIEM tools and threat intelligence",
      "Experience with incident response procedures",
      "Understanding of network security protocols",
      "Strong analytical and problem-solving skills"
    ],
    benefits: [
      "Competitive salary with security bonuses",
      "Health insurance coverage",
      "Certification reimbursement program",
      "Flexible work schedule",
      "Professional development opportunities",
      "Security conference attendance"
    ],
    team: "Cybersecurity",
    reportsTo: "Lead Security Architect",
    applicationDeadline: "2024-10-20"
  },
  "audio-visual-technician": {
    id: 4,
    title: "Audio Visual Technician",
    department: "Solutions",
    location: "Dammam, Saudi Arabia",
    type: "Full-time",
    level: "Junior",
    salary: "8,000 - 14,000 SAR",
    posted: "5 days ago",
    urgent: false,
    description: "Install and maintain professional AV systems for corporate and educational environments. Work with cutting-edge audio and video technologies to create immersive experiences.",
    responsibilities: [
      "Install and configure AV equipment and systems",
      "Troubleshoot audio and video issues",
      "Provide technical support during events",
      "Maintain equipment inventory and documentation",
      "Train end-users on AV system operation",
      "Collaborate with project teams on AV implementations"
    ],
    requirements: [
      "Diploma in Electronics or related field",
      "2+ years of AV installation experience",
      "Knowledge of Crestron, AMX, or similar systems",
      "Experience with video conferencing solutions",
      "Understanding of sound system design",
      "Customer service skills",
      "Valid driver's license"
    ],
    benefits: [
      "Competitive starting salary",
      "Health insurance",
      "Technical training programs",
      "Career growth opportunities",
      "Tool and equipment allowance",
      "Performance bonuses"
    ],
    team: "AV Solutions",
    reportsTo: "AV Solutions Manager",
    applicationDeadline: "2024-11-05"
  },
  "project-manager": {
    id: 5,
    title: "Project Manager",
    department: "Operations",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    level: "Senior",
    salary: "18,000 - 28,000 SAR",
    posted: "1 day ago",
    urgent: true,
    description: "Lead complex technology implementation projects from conception to successful delivery. Manage cross-functional teams and ensure projects are delivered on time, within budget, and to client satisfaction.",
    responsibilities: [
      "Plan and execute technology implementation projects",
      "Manage project timelines, budgets, and resources",
      "Coordinate with clients and stakeholders",
      "Lead cross-functional project teams",
      "Monitor project progress and mitigate risks",
      "Ensure quality delivery and client satisfaction"
    ],
    requirements: [
      "Bachelor's degree in Engineering or Business",
      "PMP certification required",
      "5+ years of project management experience",
      "Experience with Agile and Scrum methodologies",
      "Strong leadership and communication skills",
      "Technology project experience preferred",
      "Fluency in English and Arabic"
    ],
    benefits: [
      "Executive compensation package",
      "Performance-based bonuses",
      "Leadership development programs",
      "Premium health insurance",
      "Flexible working arrangements",
      "Professional membership fees"
    ],
    team: "Project Management Office",
    reportsTo: "Operations Director",
    applicationDeadline: "2024-10-12"
  },
  "sales-engineer": {
    id: 6,
    title: "Sales Engineer",
    department: "Sales",
    location: "Multiple Cities",
    type: "Full-time",
    level: "Mid-Level",
    salary: "12,000 - 22,000 SAR + Commission",
    posted: "1 week ago",
    urgent: false,
    description: "Drive business growth by identifying opportunities and building client relationships. Combine technical expertise with sales acumen to promote our technology solutions.",
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Present technical solutions to prospective clients",
      "Develop and maintain client relationships",
      "Prepare proposals and technical presentations",
      "Collaborate with technical teams on solution design",
      "Achieve sales targets and KPIs"
    ],
    requirements: [
      "Bachelor's degree in Engineering or related field",
      "3+ years of B2B sales experience",
      "Technical background in IT or ELV systems",
      "Excellent presentation and communication skills",
      "CRM software experience",
      "Willingness to travel within Saudi Arabia",
      "Fluency in Arabic and English"
    ],
    benefits: [
      "Base salary plus commission structure",
      "Sales performance bonuses",
      "Company car or car allowance",
      "Health insurance",
      "Sales training and development",
      "Travel and entertainment allowance"
    ],
    team: "Sales",
    reportsTo: "Sales Director",
    applicationDeadline: "2024-11-10"
  }
};

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    linkedIn: '',
    resume: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const slug = params.slug as string;
    const jobData = jobDetails[slug as keyof typeof jobDetails];
    
    if (jobData) {
      setJob(jobData);
    } else {
      // Job not found, redirect to careers page
      router.push('/careers');
    }
    setLoading(false);
  }, [params.slug, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setSubmitMessage('Error: Please upload a PDF or Word document');
        return;
      }
      
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setSubmitMessage('Error: File size must be less than 5MB');
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    }
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.resume) {
      setSubmitMessage('Error: Please upload your resume');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('jobId', job.id.toString());
      formDataToSend.append('jobTitle', job.title);
      formDataToSend.append('department', job.department);
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('linkedIn', formData.linkedIn);
      formDataToSend.append('coverLetter', formData.coverLetter);
      formDataToSend.append('resume', formData.resume);

      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Application submitted successfully! We will review your application and get back to you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          experience: '',
          coverLetter: '',
          linkedIn: '',
          resume: null
        });
        // Reset file input
        const fileInput = document.getElementById('resume') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitMessage(`Error: ${data.error || 'Failed to submit application'}`);
      }
    } catch (error) {
      console.error('Application submission error:', error);
      setSubmitMessage('Error: Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <FaSpinner className="animate-spin text-3xl text-blue-600" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <Link href="/careers" className="text-blue-600 hover:text-blue-700">
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/careers"
            className="group inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 font-medium text-sm"
          >
            <FaArrowLeft className="mr-2 text-xs transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Careers
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{job.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center">
                  <FaBriefcase className="mr-2 text-xs" />
                  {job.department}
                </span>
                <span className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-xs" />
                  {job.location}
                </span>
                <span className="flex items-center">
                  <FaClock className="mr-2 text-xs" />
                  {job.type}
                </span>
                <span className="flex items-center">
                  <FaBriefcase className="mr-2 text-xs" />
                  {job.level}
                </span>
              </div>
              {job.urgent && (
                <span className="inline-block bg-red-100 text-red-600 text-xs px-2.5 py-1 rounded-full font-medium">
                  Urgent Hiring
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Description */}
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-2">
                {job.requirements.map((requirement: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits & Perks</h2>
              <ul className="space-y-2">
                {job.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Information */}
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Team</label>
                  <p className="text-gray-900">{job.team}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Reports To</label>
                  <p className="text-gray-900">{job.reportsTo}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Application Deadline</label>
                  <p className="text-gray-900">{new Date(job.applicationDeadline).toLocaleDateString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Salary Range</label>
                  <p className="text-gray-900">{job.salary}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Apply for this Position</h2>
              
              {submitMessage && (
                <div className={`mb-4 p-3 text-sm border ${
                  submitMessage.includes('successfully') 
                    ? 'bg-green-50 text-green-700 border-green-200' 
                    : 'bg-red-50 text-red-700 border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleApplicationSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Resume/CV *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-3 file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (max 5MB)</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter *
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="Tell us why you're the right fit for this role..."
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600 leading-4">
                    I agree to the processing and storage of my personal data in accordance with the company's privacy policy. *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <FaSpinner className="animate-spin mr-2" />
                      Submitting Application...
                    </span>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}