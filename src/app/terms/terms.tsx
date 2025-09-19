'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Terms of Service Schema
const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://digitallinktech.sa/terms",
  "name": "Terms of Service - Digital Link Technology Saudi Arabia",
  "description": "Terms of Service for Digital Link Technology Saudi Arabia. Comprehensive terms and conditions for elevator systems, audio visual solutions, and surveillance services.",
  "keywords": ["Digital Link Technology", "Saudi Arabia", "terms of service", "terms and conditions", "elevator systems", "audio visual solutions", "surveillance", "KSA"],
  "publisher": {
    "@type": "Organization",
    "name": "Digital Link Technology Saudi Arabia",
    "logo": {
      "@type": "ImageObject",
      "url": "https://digitallinktech.sa/logo.png"
    }
  },
  "datePublished": "2024-01-01T08:00:00+03:00",
  "dateModified": "2024-03-19T08:00:00+03:00",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://digitallinktech.sa/terms"
  }
};

const Terms = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <>
      <Head>
        <title>Digital Link Technology Saudi Arabia - Terms of Service</title>
        <meta name="description" content="Terms of Service for Digital Link Technology Saudi Arabia. Comprehensive terms and conditions for our elevator, audio visual, and surveillance solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Primary Keywords */}
        <meta name="keywords" content="Digital Link Technology Saudi Arabia, terms of service, terms and conditions, elevator systems KSA, audio visual solutions Saudi Arabia, surveillance systems Riyadh" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Digital Link Technology Saudi Arabia - Terms of Service" />
        <meta property="og:description" content="Terms of Service for Digital Link Technology Saudi Arabia. Professional terms and conditions for technology solutions." />
        <meta property="og:image" content="https://digitallinktech.sa/logo.png" />
        <meta property="og:url" content="https://digitallinktech.sa/terms" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Link Technology Saudi Arabia - Terms of Service" />
        <meta name="twitter:description" content="Terms of Service for Digital Link Technology Saudi Arabia technology solutions." />
        <meta name="twitter:image" content="https://digitallinktech.sa/logo.png" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://digitallinktech.sa/terms" />
        
        {/* Region-specific Tags */}
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Riyadh" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
      </Head>

      <Script
        id="terms-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            Welcome to Digital Link Technology Saudi Arabia. These Terms of Service ("Terms") govern your use of our services
            and products, including elevator systems, audio visual solutions, and surveillance technologies. By engaging with our
            services, you agree to be bound by these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Services Offered</h2>
          <p className="mb-4">Digital Link Technology Saudi Arabia provides the following services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Elevator and ELV (Extra Low Voltage) systems installation and maintenance</li>
            <li>Audio visual solutions design, installation, and support</li>
            <li>Surveillance and security systems implementation</li>
            <li>IT and AI-driven technology solutions</li>
            <li>Technical consultation and project management</li>
            <li>Maintenance and support services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing our services, requesting quotations, entering into contracts, or using our products,
            you acknowledge that you have read, understood, and agree to be bound by these Terms of Service
            and all applicable laws and regulations in the Kingdom of Saudi Arabia.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Service Agreements</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All services are subject to written agreements and technical specifications</li>
            <li>Project timelines are estimates and may vary based on site conditions and approvals</li>
            <li>Changes to project scope require written approval and may affect pricing and timelines</li>
            <li>Installation sites must meet specified technical and safety requirements</li>
            <li>Client must provide necessary permits, approvals, and site access</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payment terms are specified in individual service agreements</li>
            <li>Advance payments may be required for material procurement</li>
            <li>Late payments may incur additional charges as per Saudi Arabian commercial law</li>
            <li>All prices are exclusive of VAT unless otherwise stated</li>
            <li>Currency exchange fluctuations may affect pricing for imported equipment</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Warranties and Guarantees</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Equipment warranties are provided as per manufacturer specifications</li>
            <li>Installation workmanship is guaranteed for a specified period post-completion</li>
            <li>Preventive maintenance programs extend equipment life and warranty coverage</li>
            <li>Warranty claims must be reported promptly and in writing</li>
            <li>Warranties may be void due to misuse, unauthorized modifications, or force majeure</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p className="mb-4">
            Digital Link Technology Saudi Arabia's liability is limited to the contract value of services provided.
            We are not liable for indirect, consequential, or punitive damages. Our liability is subject to
            the limitations set forth in Saudi Arabian commercial law and individual service agreements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All technical designs and documentation remain our intellectual property</li>
            <li>Clients receive usage rights for installed systems and provided documentation</li>
            <li>Proprietary software and configurations may not be duplicated or reverse-engineered</li>
            <li>Third-party equipment and software are subject to respective licensing terms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Compliance and Regulations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All installations comply with Saudi Arabian building codes and safety standards</li>
            <li>Equipment meets relevant international certification requirements</li>
            <li>Data protection and privacy measures align with KSA regulations</li>
            <li>Environmental and sustainability practices follow national guidelines</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Termination</h2>
          <p className="mb-4">
            Either party may terminate service agreements with written notice as specified in individual contracts.
            Termination procedures, payment obligations, and equipment ownership transfer are governed by
            the specific terms of each service agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p className="mb-4">
            These Terms of Service are governed by the laws of the Kingdom of Saudi Arabia.
            Any disputes shall be resolved through the appropriate legal channels in Saudi Arabia,
            with Arabic as the governing language for legal proceedings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">
            For questions regarding these Terms of Service, please contact us:
          </p>
          <div className="pl-6">
            <p>Company: Digital Link Technology Saudi Arabia</p>
            <p>Email: sales@digitallink-sa.com</p>
            <p>Phone: +966 59 701 5415</p>
            <p>Address: Olaya Street, Riyadh, Kingdom of Saudi Arabia</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Updates to Terms</h2>
          <p className="mb-4">
            We reserve the right to update these Terms of Service periodically. Updated terms will be
            posted on our website with the effective date. Continued use of our services constitutes
            acceptance of any updated terms.
          </p>
        </section>

        <footer className="mt-12 text-sm text-gray-600">
          <p>Last updated: {currentDate}</p>
          <p>Effective Date: January 1, 2024</p>
        </footer>
      </div>
    </>
  );
};

export default Terms;