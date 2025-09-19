'use client';
import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Script from 'next/script';

// Privacy Policy Schema
const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://digitallink-sa.com/privacy",
  "name": "Privacy Policy - Digital Link Technology Saudi Arabia",
  "description": "Learn about how Digital Link Technology Saudi Arabia handles and protects your personal information. Our privacy policy outlines data collection, usage, and your rights under Saudi Arabian law.",
  "keywords": ["Digital Link Technology", "Saudi Arabia", "privacy policy", "data protection", "elevator systems", "audio visual solutions", "surveillance", "KSA law"],
  "publisher": {
    "@type": "Organization",
    "name": "Digital Link Technology Saudi Arabia",
    "logo": {
      "@type": "ImageObject",
      "url": "https://digitallink-sa.com/logo.png"
    }
  },
  "datePublished": "2024-01-01T08:00:00+03:00",
  "dateModified": "2024-03-19T08:00:00+03:00",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://digitallink-sa.com/privacy"
  }
};

const PrivacyPolicy = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <>
      <Head>
        <title>Digital Link Technology Saudi Arabia - Privacy Policy</title>
        <meta name="description" content="Digital Link Technology Saudi Arabia privacy policy. Learn how we handle and protect your personal information in compliance with Saudi Arabian data protection laws." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Primary Keywords */}
        <meta name="keywords" content="Digital Link Technology Saudi Arabia, privacy policy, data protection, elevator systems KSA, audio visual solutions Saudi Arabia, surveillance systems Riyadh" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Digital Link Technology Saudi Arabia - Privacy Policy" />
        <meta property="og:description" content="Privacy policy for Digital Link Technology Saudi Arabia. Data protection and privacy practices for elevator, audio visual, and surveillance solutions." />
        <meta property="og:image" content="https://digitallink-sa.com/logo.png" />
        <meta property="og:url" content="https://digitallink-sa.com/privacy" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Link Technology Saudi Arabia - Privacy Policy" />
        <meta name="twitter:description" content="Privacy policy for Digital Link Technology Saudi Arabia. Data protection practices." />
        <meta name="twitter:image" content="https://digitallink-sa.com/logo.png" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://digitallink-sa.com/privacy" />
        
        {/* Region-specific Tags */}
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Riyadh" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
      </Head>

      <Script
        id="privacy-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            Welcome to our Privacy Policy. This document outlines how Digital Link Technology Saudi Arabia collects, uses, and protects your personal information
            as a leading provider of elevator systems, audio visual solutions, and surveillance technologies in the Kingdom of Saudi Arabia.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact information (name, email, phone number, company details)</li>
            <li>Business registration and commercial registration information</li>
            <li>Project requirements and technical specifications</li>
            <li>Purchase history and service preferences</li>
            <li>Installation site information for elevator, audio visual, and surveillance systems</li>
            <li>Technical support and maintenance request details</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and fulfill orders for elevator systems, audio visual equipment, and surveillance solutions</li>
            <li>Provide technical support, installation, and maintenance services</li>
            <li>Send updates about new products, technologies, and service offerings</li>
            <li>Comply with Saudi Arabian building codes and safety regulations</li>
            <li>Improve our products and services based on customer feedback</li>
            <li>Conduct site surveys and project planning for installations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="mb-4">
            We implement comprehensive security measures to protect your information, following Saudi Arabian data protection laws
            and international security standards. This includes encryption, secure servers, restricted access protocols, and regular security audits.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">
            Under Saudi Arabian law, you have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Request corrections to your data</li>
            <li>Ask for deletion of your information</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Data portability for business records</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="pl-6">
            <p>Company: Digital Link Technology Saudi Arabia</p>
            <p>Email: sales@digitallink-sa.com</p>
            <p>Phone: +966 59 701 5415</p>
            <p>Address: Olaya Street- Riyadh - Saudi Arabia</p>
          </div>
        </section>

        <footer className="mt-12 text-sm text-gray-600">
          <p>Last updated: {currentDate}</p>
        </footer>
      </div>
    </>
  );
};

export default PrivacyPolicy;



