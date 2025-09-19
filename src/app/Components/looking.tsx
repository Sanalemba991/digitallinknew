"use client"
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Looking Schema
const lookingSchema = {
  "@context": "https://schema.org",
  "@type": ["Service", "Organization"],

  "@id": "https://digitallinktech.sa/",
  "name": "Professional Digital Link Technology Solutions Saudi Arabia",
  "headline": "Professional Technology Solutions in Saudi Arabia",
  "description": "Leading technology solutions provider in Saudi Arabia offering comprehensive elevator, audio visual, and surveillance solutions. Expert technical support and competitive pricing available.",
  "brand": {
    "@type": "Brand",
    "name": "Digital Link Technology"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://digitallinktech.sa/"
  },
  "datePublished": "2024-01-01T08:00:00+03:00",
  "dateModified": new Date().toISOString(),
  "provider": {
    "@type": "Organization",
    "name": "Digital Link Technology Saudi Arabia",
    "url": "https://digitallinktech.sa",
    "logo": {
      "@type": "ImageObject",
      "url": "https://digitallinktech.sa/logo.png"
    }
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "SAR",
    "price": "500.00",
    "availability": "https://schema.org/InStock"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+966 59 701 5415",
    "contactType": "sales",
    "areaServed": "Saudi Arabia",
    "availableLanguage": ["English", "Arabic"]
  },
  "sameAs": [
    "https://digitallinktech.sa",
    "https://www.instagram.com/digitallinktechsa",
  ],
  "areaServed": [
    "Riyadh",
    "Jeddah",
    "Dammam",
    "Mecca",
    "Medina",
    "Khobar",
    "Tabuk"
  ],
  "hasMap": "https://www.google.com/maps?cid=YOUR_GOOGLE_BUSINESS_ID",
  "priceRange": "SAR 500 - SAR 25000"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is the leading technology solutions provider in Saudi Arabia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are Digital Link Technology Saudi Arabia, providing comprehensive elevator systems, audio visual solutions, and surveillance systems with professional installation and 24/7 technical support across Riyadh and all regions."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I get technology solutions in Saudi Arabia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can get comprehensive technology solutions from our office in Riyadh or through our authorized service providers across Saudi Arabia. We offer installation services and technical support."
      }
    },
    {
      "@type": "Question",
      "name": "What are technology solution prices in Saudi Arabia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Technology solution prices in Saudi Arabia start from SAR 500 for basic systems to SAR 25000 for advanced complete solutions. Contact us for the best deals and package prices."
      }
    }
  ]
}

const Looking = () => {
  return (
    <>
      <Head>
        <title>Professional Digital Link Technology Solutions in Saudi Arabia | Official Distributor</title>
        <meta
          name="description"
          content="Leading Digital Link Technology distributor in Saudi Arabia offering comprehensive security solutions and professional-grade surveillance equipment. Contact our technical team for expert support and competitive pricing."
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Professional Digital Link Technology Solutions in Saudi Arabia | Official Distributor" />
        <meta property="og:description" content="Leading Digital Link Technology distributor in Saudi Arabia offering comprehensive security solutions and professional-grade surveillance equipment. Contact our technical team for expert support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digitallink-sa.com/" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Digital Link Technology Solutions in Saudi Arabia" />
        <meta property="twitter:description" content="Leading Digital Link Technology distributor in Saudi Arabia offering comprehensive security solutions and professional-grade surveillance equipment." />
        
        {/* SEO Keywords */}
        <meta name="keywords" content="Digital Link Technology Saudi Arabia, security solutions Saudi Arabia, surveillance equipment Riyadh, CCTV distributor Saudi Arabia, Digital Link Technology authorized dealer, security systems Riyadh, professional surveillance Saudi Arabia" />
        
        {/* SEO Essentials */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://digitallink-sa.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        id="looking-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lookingSchema) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="text-black">Professional </span>
          <span className="text-red-600">Digital Link Technology Solutions in Saudi Arabia</span>
        </h1>
        
        <h2 className="text-2xl font-semibold mb-6">
          Authorized Digital Link Technology Distributor - Saudi Arabia
        </h2>
        
        <p className="text-lg leading-relaxed">
          As a trusted Digital Link Technology distributor in Saudi Arabia, we offer comprehensive security solutions and professional-grade surveillance equipment. Our extensive inventory includes the latest Digital Link Technology products at competitive prices. For detailed product information and pricing, please contact our technical sales team at <a href="tel:+966597015415" className="text-blue-600 hover:underline">+966 59 701 5415</a>. Our experts will assist you in selecting the right security solutions tailored to your requirements.
        </p>
      </div>
    </>
  );
};

export default Looking;
