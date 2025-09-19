'use client'
import React, { useState, useRef } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { motion, useInView } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Loader2,
  MessageSquare,
  Headphones,
  Shield,
  Award,
  Users,
  ArrowRight
} from 'lucide-react';
import { FaInstagram, FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';

const ContactClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    subject: '',
    message: ''
  });

  const contactRef = useRef(null);
  const followUsRef = useRef(null);
  const findUsRef = useRef(null);
  
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" });
  const isFollowUsInView = useInView(followUsRef, { once: true, margin: "-100px" });
  const isFindUsInView = useInView(findUsRef, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      toast.error("Please enter a valid phone number");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          service: formData.service,
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you within 24 hours.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          subject: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    "Surveillance Systems",
    "Audio Visual Solutions", 
    "Elevator Systems",
    "IT & AI Solutions",
    "Smart Building Solutions",
    "Security Consulting",
    "Maintenance & Support",
    "Other"
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Communication",
      description: "Your data is protected with enterprise-grade encryption"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Our certified technicians provide professional assistance"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "ISO certified processes and industry-leading standards"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "50+ experts across Saudi Arabia and the Middle East"
    }
  ];

  const socialIcons = [
    { 
      icon: <FaFacebook className="text-2xl" />,
      href: "https://www.facebook.com/profile.php?id=100087290161175&mibextid=ZbWKwL",
      hoverClass: "hover:bg-blue-600",
      label: "Facebook"
    },
    { 
      icon: <FaInstagram className="text-2xl" />,
      href: "https://www.instagram.com/digitallinktechnologyllc/",
      hoverClass: "hover:bg-pink-600",
      label: "Instagram"
    },
    { 
      icon: <FaLinkedinIn className="text-2xl" />,
      href: "https://www.linkedin.com/company/digital-link-technology-uae/posts/?feedView=all",
      hoverClass: "hover:bg-blue-700",
      label: "LinkedIn"
    }
  ];

  return (
    <div className="w-full bg-gray-50">
      <Toaster position="top-right" />
      
    
      

      {/* Contact Form Section */}
      <section className="py-16 bg-white" id="contact-form" ref={contactRef}>
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isContactInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              Get in touch
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isContactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Contact Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isContactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Ready to discuss your project? Fill out the form below and we'll respond within 24 hours.
            </motion.p>
          </div>
          
          <motion.div
            initial="hidden"
            animate={isContactInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
            }}
            className="grid md:grid-cols-5 gap-8"
          >
            {/* Contact Information - Left Side */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  },
                },
              }}
              className="md:col-span-2 bg-white p-6 rounded-xl border border-gray-200 space-y-6 shadow-sm"
            >
              <div>
                <h3 className="font-medium text-gray-800 text-lg border-b pb-2 mb-3">
                  Contact
                </h3>
                <div className="text-gray-600 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <BsTelephoneFill className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">PHONE</p>
                      <a href="tel:+966597015415" className="text-blue-500 hover:underline block">+966 59 701 5415</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <SiGmail className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">EMAIL</p>
                      <a href="mailto:sales@digitallink-sa.com" className="text-blue-500 hover:underline">
                        sales@digitallink-sa.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-lg border-b pb-2 mb-3">
                  Location
                </h3>
                <div className="text-gray-600">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <IoLocationSharp className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">
                        RIYADH OFFICE
                      </p>
                      <p>Olaya Street</p>
                      <p>Riyadh, Saudi Arabia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-lg border-b pb-2 mb-3">
                  Hours
                </h3>
                <div className="text-gray-600 space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Mon-Fri:</span>
                    <span>9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Emergency:</span>
                    <span>24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  },
                },
              }}
              className="md:col-span-3"
            >
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-900 hover:border-blue-300"
                        required
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-900 hover:border-blue-300"
                        required
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Phone *
                      </label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-900 hover:border-blue-300"
                        required
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Company
                      </label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-900 hover:border-blue-300"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Service *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-900 hover:border-blue-300"
                        required
                      >
                        <option value="">Select Service *</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Subject *
                      </label>
                      <input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-900 hover:border-blue-300"
                        required
                        placeholder="Subject of your message"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-900 resize-y hover:border-blue-300"
                      required
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-6 pt-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="flex items-center space-x-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="font-medium">We'll respond within 24 hours</span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold text-base rounded-full transition-all duration-300 group transform hover:scale-105 hover:shadow-lg min-w-[180px] justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="animate-spin w-4 h-4 mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-16 bg-white" ref={followUsRef}>
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isFollowUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isFollowUsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
              </svg>
              Social Connections
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isFollowUsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Follow <span className="text-blue-500">Us</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isFollowUsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Stay connected with us on social media for the latest updates, news, and offers.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={isFollowUsInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4,
                },
              },
            }}
            className="flex justify-center gap-6 flex-wrap"
          >
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 10
                    }
                  },
                }}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gray-100 p-5 rounded-full transition-all duration-300 hover:text-white ${social.hoverClass}`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="bg-white w-full" ref={findUsRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isFindUsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl mb-16">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isFindUsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-500 text-sm font-medium mb-6"
              >
                Visit Our Location
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isFindUsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              >
                Find Us in <span className="text-blue-500">Saudi Arabia</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isFindUsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              >
                Visit our office at Olaya Street, Riyadh, Saudi Arabia
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isFindUsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="w-full h-[600px] relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.563!2d46.674!3d24.6877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f00000000000:0x0!2sOlaya%20Street%2C%20Riyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1699000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Olaya Street, Riyadh, Saudi Arabia"
              className="absolute inset-0"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactClient;