'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


const visionPoints = [
  {
    icon: "🚀",
    title: "Digital Transformation",
    description: "Leading Saudi Arabia's digital transformation journey by implementing cutting-edge technologies that revolutionize how businesses operate.",
    details: "We envision a future where every Saudi business leverages advanced technology to achieve unprecedented efficiency and growth."
  },
  {
    icon: "🌟",
    title: "Innovation Excellence",
    description: "Setting new standards in technology innovation through research, development, and implementation of groundbreaking solutions.",
    details: "Our commitment to innovation drives us to explore emerging technologies and create solutions that didn't exist before."
  },
  {
    icon: "🤝",
    title: "Strategic Partnerships",
    description: "Building strong partnerships with global technology leaders while fostering local talent and expertise development.",
    details: "We believe in collaborative growth, working with international partners while developing Saudi Arabia's tech ecosystem."
  },
  {
    icon: "🌍",
    title: "Global Impact",
    description: "Expanding our influence beyond Saudi Arabia to become a recognized technology leader in the Middle East and globally.",
    details: "Our vision extends beyond borders, aiming to export Saudi innovation and expertise to the world."
  },
  {
    icon: "🎯",
    title: "Smart Cities",
    description: "Contributing to Saudi Arabia's smart city initiatives by providing integrated technology solutions for urban development.",
    details: "We're committed to building the infrastructure that will power Saudi Arabia's cities of the future."
  },
  {
    icon: "💡",
    title: "AI Revolution",
    description: "Pioneering artificial intelligence solutions that transform industries and create new possibilities for human potential.",
    details: "AI is not just technology for us - it's the key to unlocking human creativity and solving complex challenges."
  }
];

const milestones = [
  {
    year: "2024",
    title: "Foundation & Vision",
    description: "Establishing Digital Link Technology with a clear vision to transform Saudi Arabia's digital landscape.",
    status: "completed"
  },
  {
    year: "2025",
    title: "Regional Expansion",
    description: "Expanding operations across major Saudi cities and establishing strategic partnerships.",
    status: "in-progress"
  },
  {
    year: "2026",
    title: "AI Center of Excellence",
    description: "Opening our dedicated AI research and development center in Riyadh.",
    status: "planned"
  },
  {
    year: "2027",
    title: "International Recognition",
    description: "Achieving international recognition as a leading technology solutions provider in the Middle East.",
    status: "planned"
  },
  {
    year: "2030",
    title: "Vision 2030 Alignment",
    description: "Fully aligned with Saudi Vision 2030, contributing significantly to the kingdom's digital transformation goals.",
    status: "planned"
  }
];

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, setting high standards and continuously improving our services.",
    color: "bg-blue-600"
  },
  {
    title: "Innovation",
    description: "Innovation is at the heart of our culture. We embrace new ideas and technologies to solve complex challenges.",
    color: "bg-blue-700"
  },
  {
    title: "Integrity",
    description: "We conduct business with the highest ethical standards, building trust through transparency and honesty.",
    color: "bg-blue-500"
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnerships to achieve extraordinary results together.",
    color: "bg-blue-800"
  },
  {
    title: "Customer Focus",
    description: "Our customers' success is our success. We go above and beyond to exceed their expectations.",
    color: "bg-blue-600"
  },
  {
    title: "Sustainability",
    description: "We're committed to sustainable practices that benefit society and preserve our environment for future generations.",
    color: "bg-blue-700"
  }
];

const VisionCard = ({ point, index }: { point: typeof visionPoints[0], index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      <div className="p-8">
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {point.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
          {point.title}
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          {point.description}
        </p>
        
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-gray-100">
            <p className="text-gray-600 text-sm leading-relaxed">
              {point.details}
            </p>
          </div>
        </motion.div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
          <svg 
            className={`ml-1 w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

const ValueCard = ({ value, index }: { value: typeof values[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className={`absolute inset-0 ${value.color} rounded-2xl transform group-hover:scale-105 transition-transform duration-300`} />
      <div className="relative bg-white m-1 rounded-xl p-6 h-full">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
        <p className="text-gray-700 leading-relaxed">{value.description}</p>
      </div>
    </motion.div>
  );
};

export default function VisionPage() {
  const [activeTimeline, setActiveTimeline] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev % milestones.length) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/vision/vision-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              Our <span className="text-blue-300">Vision</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Shaping Saudi Arabia's Digital Future Through Innovation, Excellence, and Strategic Vision
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => document.getElementById('vision-details')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Vision
              </button>
              <Link
                href="/team"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Meet Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Our Vision Statement</h2>
            <div className="bg-blue-50 rounded-3xl p-12 border border-blue-100">
              <blockquote className="text-3xl md:text-4xl font-light text-gray-800 leading-relaxed italic">
                "To be the catalyst that transforms Saudi Arabia into a global technology powerhouse, 
                empowering businesses and communities through innovative solutions that create lasting impact 
                and drive sustainable growth in alignment with Vision 2030."
              </blockquote>
              <div className="mt-8 text-xl text-blue-600 font-semibold">
                — Digital Link Technology Leadership Team
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section id="vision-details" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Vision Pillars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our vision is built on six fundamental pillars that guide our strategy, 
              innovation, and commitment to excellence in everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <VisionCard key={index} point={point} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Journey to 2030</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A roadmap of our strategic milestones as we work towards achieving our vision 
              and contributing to Saudi Arabia's transformation.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                    <div className={`inline-block px-4 py-2 rounded-full text-white font-bold text-lg mb-4 ${
                      milestone.status === 'completed' ? 'bg-green-500' :
                      milestone.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-400'
                    }`}>
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                    <div className={`mt-4 text-sm font-medium ${
                      milestone.status === 'completed' ? 'text-green-600' :
                      milestone.status === 'in-progress' ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {milestone.status === 'completed' ? '✅ Completed' :
                       milestone.status === 'in-progress' ? '🔄 In Progress' : '📅 Planned'}
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values define who we are, guide our decisions, and shape our culture 
              as we work towards achieving our vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 Alignment */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold mb-8">Aligned with Saudi Vision 2030</h2>
            <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Our vision is deeply aligned with Saudi Arabia's Vision 2030, contributing to the kingdom's 
              digital transformation, economic diversification, and technological advancement goals.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-2xl font-bold mb-4">Economic Diversification</h3>
                <p className="text-blue-100">Contributing to the non-oil economy through technology innovation and digital services.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-2xl font-bold mb-4">Human Capital Development</h3>
                <p className="text-blue-100">Building local talent and expertise in cutting-edge technologies.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-4">Digital Infrastructure</h3>
                <p className="text-blue-100">Strengthening Saudi Arabia's digital infrastructure and smart city initiatives.</p>
              </div>
            </div>

            <Link
              href="/About"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Join Us in Shaping the Future</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Be part of Saudi Arabia's digital transformation journey. Whether you're a client, 
              partner, or potential team member, we invite you to join us in creating a better tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/careers"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Careers
              </Link>
              <Link
                href="/Contact"
                className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
}