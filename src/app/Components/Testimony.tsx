"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimony = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    testimonial:
      "We recently upgraded our office security with Digital Link's CCTV cameras, and the results have been outstanding. The video quality is crystal clear, even at night, and the remote access feature makes monitoring from anywhere a breeze. The peace of mind knowing our premises are secure 24/7 is invaluable. Highly recommend their CCTV solutions!",
    social: { linkedin: "#", twitter: "#" },
    image: "/testimony/Rajesh.png", // Updated image path
  },
{
  id: 2,
  name: "Jhon",
  role: "IT Specialist",
  testimonial:
    "When we needed additional storage for our growing data center, Digital Link’s hard disks were the perfect choice. The reliability, speed, and secure design of the drives have made our backup processes much more efficient. We’ve had zero issues, and the scalable capacity options ensure we have room for growth in the future. Great value for the price!",
  social: { facebook: "#", instagram: "#" },
  image: "/testimony/Jhon.png", // Updated image path
}
,
  {
    id: 3,
    name: "Amit Patel",
    role: "Security Consultant",
    testimonial:
      "As a security consultant, I recommend Digital Link’s CCTV systems to all my clients. The installation was straightforward, and the cameras have excellent motion detection and real-time alerts. The quality of the footage is impeccable, even in low light. Their storage solutions, particularly the hard drives, complement the CCTV perfectly by offering large, fast, and secure data storage.",
    social: { twitter: "#", linkedin: "#" },
    image: "/testimony/Amit.png", // Updated image path
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <style jsx>{`
        @keyframes drawLine {
          0% {
            width: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 80px;
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-draw-line {
          animation: ${isVisible
            ? "drawLine 2s ease-out 0.5s forwards"
            : "none"};
        }

        .animate-fade-in-up {
          animation: ${isVisible ? "fadeInUp 0.8s ease-out forwards" : "none"};
        }

        .animate-pulse-custom {
          animation: ${isVisible ? "pulse 2s infinite" : "none"};
        }

        .testimonial-card {
          opacity: 0;
          transform: translateY(20px);
          animation: ${isVisible ? "fadeInUp 0.6s ease-out forwards" : "none"};
        }

        .testimonial-card:nth-child(1) {
          animation-delay: ${isVisible ? "0.2s" : "0s"};
        }

        .testimonial-card:nth-child(2) {
          animation-delay: ${isVisible ? "0.4s" : "0s"};
        }

        .testimonial-card:nth-child(3) {
          animation-delay: ${isVisible ? "0.6s" : "0s"};
        }
      `}</style>

      <section
        ref={sectionRef}
        className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h2
                className={`text-5xl font-bold text-gray-900 mb-6 tracking-tight ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
              >
                What People <span className="text-blue-600">Say</span>?
              </h2>

              <div className="relative flex justify-center mb-8">
                <div className="absolute w-20 h-1 bg-gray-200 rounded-full"></div>
                <div
                  className={`w-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-full shadow-lg ${
                    isVisible ? "animate-draw-line" : ""
                  }`}
                ></div>
                <div
                  className={`absolute w-0 h-1 bg-blue-600 rounded-full blur-sm opacity-60 ${
                    isVisible ? "animate-draw-line" : ""
                  }`}
                ></div>
                <div
                  className={`absolute right-0 w-2 h-2 bg-blue-500 rounded-full -translate-y-0.5 opacity-0 ${
                    isVisible ? "animate-pulse-custom" : ""
                  }`}
                  style={{
                    animationDelay: isVisible ? "2.5s" : "0s",
                    animationFillMode: isVisible ? "forwards" : "none",
                  }}
                ></div>
              </div>
            </div>

            <p
              className={`text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-800 ${
                isVisible
                  ? "animate-fade-in-up opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: isVisible ? "0.3s" : "0s" }}
            >
              Hear from our satisfied customers about their experiences with our products and services.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="text-center"
                variants={itemVariants}
              
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
                >
                  <svg
                    className="w-12 h-12 text-blue-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </motion.div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {testimonial.testimonial}
                </p>

                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-gray-200 relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        if (img && img.parentNode instanceof HTMLElement) {
                          img.style.display = "none";
                          img.parentNode.style.backgroundColor = "#e5e7eb";
                          img.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-600 text-2xl font-bold">${testimonial.name.charAt(
                            0
                          )}</div>`;
                        }
                      }}
                    />
                  </div>
                </motion.div>

                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-xs text-gray-500 mb-4">{testimonial.role}</p>

                <motion.div
                  className="flex justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  {testimonial.social.facebook && (
                    <motion.a
                      href={testimonial.social.facebook}
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                      aria-label={`${testimonial.name}'s Facebook`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaFacebookF size={14} />
                    </motion.a>
                  )}
                  {testimonial.social.twitter && (
                    <motion.a
                      href={testimonial.social.twitter}
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                      aria-label={`${testimonial.name}'s Twitter`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTwitter size={14} />
                    </motion.a>
                  )}
                  {testimonial.social.instagram && (
                    <motion.a
                      href={testimonial.social.instagram}
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                      aria-label={`${testimonial.name}'s Instagram`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaInstagram size={14} />
                    </motion.a>
                  )}
                  {testimonial.social.linkedin && (
                    <motion.a
                      href={testimonial.social.linkedin}
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                      aria-label={`${testimonial.name}'s LinkedIn`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin size={14} />
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimony;