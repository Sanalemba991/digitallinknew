"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Video, Filter, X } from 'lucide-react';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 1, 1] }
  }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 1, 1] }
  }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Your job data from slug2
const jobOpenings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Technology",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    level: "Senior",
    salary: "15,000 - 25,000 SAR",
    slug: "senior-ai-engineer",
    description: "Join our AI team to develop cutting-edge machine learning solutions for enterprise clients.",
    requirements: ["5+ years AI/ML experience", "Python, TensorFlow", "Computer Vision", "NLP"],
    posted: "2 days ago",
    urgent: true
  },
  {
    id: 2,
    title: "ELV Systems Specialist",
    department: "Solutions",
    location: "Jeddah, Saudi Arabia",
    type: "Full-time",
    level: "Mid-Level",
    salary: "10,000 - 18,000 SAR",
    slug: "elv-systems-specialist",
    description: "Design and implement comprehensive ELV solutions for smart buildings and facilities.",
    requirements: ["3+ years ELV experience", "AutoCAD", "Fire Safety Systems", "Access Control"],
    posted: "1 week ago",
    urgent: false
  },
  {
    id: 3,
    title: "Cybersecurity Analyst",
    department: "Security",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    level: "Mid-Level",
    salary: "12,000 - 20,000 SAR",
    slug: "cybersecurity-analyst",
    description: "Protect our clients' digital assets with advanced security monitoring and threat detection.",
    requirements: ["CISSP/CEH certified", "SOC experience", "Incident Response", "Risk Assessment"],
    posted: "3 days ago",
    urgent: true
  },
  {
    id: 4,
    title: "Audio Visual Technician",
    department: "Solutions",
    location: "Dammam, Saudi Arabia",
    type: "Full-time",
    level: "Junior",
    salary: "8,000 - 14,000 SAR",
    slug: "audio-visual-technician",
    description: "Install and maintain professional AV systems for corporate and educational environments.",
    requirements: ["2+ years AV experience", "Crestron/AMX", "Video Conferencing", "Sound Systems"],
    posted: "5 days ago",
    urgent: false
  },
  {
    id: 5,
    title: "Project Manager",
    department: "Operations",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    level: "Senior",
    salary: "18,000 - 28,000 SAR",
    slug: "project-manager",
    description: "Lead complex technology implementation projects from conception to successful delivery.",
    requirements: ["PMP certified", "5+ years PM experience", "Agile/Scrum", "Client Management"],
    posted: "1 day ago",
    urgent: true
  },
  {
    id: 6,
    title: "Sales Engineer",
    department: "Sales",
    location: "Multiple Cities",
    type: "Full-time",
    level: "Mid-Level",
    salary: "12,000 - 22,000 SAR + Commission",
    slug: "sales-engineer",
    description: "Drive business growth by identifying opportunities and building client relationships.",
    requirements: ["Technical background", "B2B sales experience", "Arabic & English", "Presentation skills"],
    posted: "1 week ago",
    urgent: false
  }
];

// Benefits data
const benefits = [
  {
    icon: "💰",
    title: "Competitive Salary",
    description: "Market-leading compensation packages with performance bonuses"
  },
  {
    icon: "🏥",
    title: "Health Insurance",
    description: "Comprehensive medical coverage for you and your family"
  },
  {
    icon: "📚",
    title: "Learning & Development",
    description: "Continuous training programs and certification support"
  },
  {
    icon: "🏖️",
    title: "Flexible Time Off",
    description: "Generous vacation policy and flexible working arrangements"
  },
  {
    icon: "🚀",
    title: "Career Growth",
    description: "Clear promotion paths and leadership development programs"
  },
  {
    icon: "🎯",
    title: "Innovation Time",
    description: "20% time for personal projects and innovation initiatives"
  }
];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = React.useState("All Departments");
  const [selectedType, setSelectedType] = React.useState("All Job Types");
  const [selectedLocation, setSelectedLocation] = React.useState("All Locations");
  
  // Intersection observers for different sections
  const [bannerRef, bannerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [opportunitiesRef, opportunitiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [filtersRef, filtersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [jobsRef, jobsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesDepartment =
      selectedDepartment === "All Departments" || job.department === selectedDepartment;
    const matchesType =
      selectedType === "All Job Types" || job.type === selectedType;
    const matchesLocation =
      selectedLocation === "All Locations" || job.location.includes(selectedLocation);
    return matchesDepartment && matchesType && matchesLocation;
  });

  // Get unique values for filters
  const departments = Array.from(new Set(jobOpenings.map(job => job.department)));
  const locations = Array.from(new Set(jobOpenings.map(job => job.location)));
  const jobTypes = Array.from(new Set(jobOpenings.map(job => job.type)));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      {/* Banner Section */}
      <motion.section
        ref={bannerRef}
        className="relative py-8 md:py-12 lg:py-20 bg-gradient-to-br from-cyan-900 to-blue-800 overflow-hidden"
        initial="hidden"
        animate={bannerInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-10 left-10 md:top-20 md:left-20 w-32 h-32 md:w-72 md:h-72 bg-purple-600/10 rounded-full blur-3xl hidden md:block"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94] as any
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-3xl hidden md:block"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 1, 1] as any
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <motion.div 
              className="space-y-4 md:space-y-6 lg:space-y-8 overflow-hidden" 
              initial="hidden"
              animate={bannerInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <motion.div 
                  className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-xs md:text-sm font-medium mb-4 md:mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Video className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                  We're Hiring Talents
                </motion.div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 md:mb-4 lg:mb-6">
                  Build Your <span className='text-blue-300'>Future</span> With Us
                </h1>
                <p className="text-sm md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Join Digital Link Technology and be part of Saudi Arabia's digital transformation. 
                  We offer exciting opportunities to work with cutting-edge technologies.
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-2 gap-4 max-w-md"
                variants={staggerContainer}
              >
                <motion.div 
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                >
                  <div className="text-2xl font-bold text-blue-300">{jobOpenings.length}</div>
                  <div className="text-sm text-blue-100">Open Positions</div>
                </motion.div>
                <motion.div 
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                >
                  <div className="text-2xl font-bold text-blue-300">50+</div>
                  <div className="text-sm text-blue-100">Team Members</div>
                </motion.div>
                <motion.div 
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                >
                  <div className="text-2xl font-bold text-blue-300">5</div>
                  <div className="text-sm text-blue-100">Office Locations</div>
                </motion.div>
                <motion.div 
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                >
                  <div className="text-2xl font-bold text-blue-300">98%</div>
                  <div className="text-sm text-blue-100">Employee Satisfaction</div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative overflow-hidden"
              initial="hidden"
              animate={bannerInView ? "visible" : "hidden"}
              variants={slideInRight}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Career Opportunities"
                className="w-full h-48 md:h-64 lg:h-80 xl:h-96 object-cover rounded-xl md:rounded-2xl shadow-2xl"
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Benefits Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.1 }}
        variants={fadeIn}
        className="py-16 bg-white dark:bg-neutral-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Join Digital Link?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We believe in creating an environment where our team members can thrive, grow, and make a meaningful impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Opportunities Section */}
      <motion.section
        ref={opportunitiesRef}
        initial="hidden"
        animate={opportunitiesInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <motion.h2 
          variants={fadeInUp}
          className="mb-12 text-center text-3xl font-semibold dark:text-white tracking-tight leading-tight font-sans"
        >
          Current <span className="text-blue-500">Opportunities</span>
        </motion.h2>

        {/* Professional Filter Section */}
        <motion.div
          ref={filtersRef}
          initial="hidden"
          animate={filtersInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-2xl shadow-lg p-6 mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Filter className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filter Jobs</h3>
            </div>
            {(selectedDepartment !== "All Departments" || selectedType !== "All Job Types" || selectedLocation !== "All Locations") && (
              <button 
                onClick={() => {
                  setSelectedDepartment("All Departments");
                  setSelectedType("All Job Types");
                  setSelectedLocation("All Locations");
                }}
                className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
                Clear all
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div variants={fadeInUp} className="relative">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Department
              </label>
              <div className="relative">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400 dark:hover:border-neutral-500"
                >
                  <option value="All Departments">All Departments</option>
                  {departments.map(department => (
                    <option key={department} value={department}>{department}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400 pointer-events-none"></div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Job Type
              </label>
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400 dark:hover:border-neutral-500"
                >
                  <option value="All Job Types">All Types</option>
                  {jobTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400 pointer-events-none"></div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400 dark:hover:border-neutral-500"
                >
                  <option value="All Locations">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div 
          variants={fadeInUp}
          className="mb-6"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Showing <span className="font-semibold text-blue-600 dark:text-blue-400">{filteredJobs.length}</span> positions
          </p>
        </motion.div>

        {/* Job Listings */}
        <motion.div
          ref={jobsRef}
          initial="hidden"
          animate={jobsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          <AnimatePresence>
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                variants={scaleUp}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-xl bg-white p-4 shadow-lg transition-all duration-300 ease-in-out 
                           transform hover:shadow-xl hover:z-10 
                           dark:bg-neutral-800 dark:hover:shadow-neutral-700/30
                           sm:p-6 flex flex-col h-full"
                whileHover={{ y: -5 }}
              >
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white sm:text-xl">
                      {job.title}
                    </h3>
                    {job.urgent && (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                        Urgent
                      </span>
                    )}
                  </div>

                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">{job.department}</p>

                  <div className="mb-3 flex flex-col gap-1 text-gray-600 dark:text-gray-300 sm:flex-row sm:items-center sm:gap-2">
                    <span className="text-sm sm:text-base">{job.type}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-sm sm:text-base">{job.location}</span>
                  </div>

                  <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <motion.span
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 
                                 rounded-full px-2.5 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm 
                                 dark:text-white/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {job.level}
                    </motion.span>
                    <motion.span
                      className="bg-green-100 text-green-800 dark:bg-green-900 
                                 rounded-full px-2.5 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm 
                                 dark:text-white/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {job.salary}
                    </motion.span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">Key Requirements:</h4>
                    <div className="flex flex-wrap gap-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                          {req}
                        </span>
                      ))}
                      {job.requirements.length > 3 && (
                        <span className="text-blue-600 dark:text-blue-400 text-xs px-2 py-1">
                          +{job.requirements.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Posted {job.posted}</span>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-[transform] duration-200 group"
                  >
                    View Details
                    <svg
                      className="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredJobs.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No positions found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search criteria or check back later for new opportunities.</p>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
}