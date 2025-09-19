import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Cookie Policy Schema
const cookiePolicySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://digitallink-sa.com/cookies",
  "name": "Cookie Policy - Digital Link Technology Saudi Arabia",
  "headline": "Cookie Policy for Digital Link Technology Saudi Arabia",
  "description": "Learn about how Digital Link Technology Saudi Arabia uses cookies and similar technologies on our website. Understand your choices and how to manage cookie preferences.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://digitallink-sa.com/cookies"
  },
  "datePublished": "2024-01-01T08:00:00+03:00",
  "dateModified": "2024-03-19T08:00:00+03:00",
  "publisher": {
    "@type": "Organization",
    "name": "Digital Link Technology Saudi Arabia",
    "logo": {
      "@type": "ImageObject",
      "url": "https://digitallink-sa.com/logo.png"
    }
  },
  "keywords": [
    "Digital Link Technology",
    "Digital Link Technology Saudi Arabia",
    "Digital Link Technology Riyadh",
    "Digital Link Technology KSA",
    'Technology Solutions for Saudi Arabia',
    'Technology Solutions in Saudi Arabia',
    'Technology Solutions in Riyadh',
    'Technology Solutions in KSA',
    'Elevator Systems Saudi Arabia',
    'Audio Visual Solutions Saudi Arabia',
    'Surveillance Systems Saudi Arabia',
    "cookie policy Saudi Arabia",
    "Digital Link Technology cookies",
    "privacy policy Riyadh",
    "website cookies Saudi Arabia",
    "Digital Link Technology Saudi Arabia privacy",
    "cookie preferences Riyadh",
    "digital link technology saudi arabia",
    "digital link technology riyadh",
    "digital link technology privacy policy",
    "digital link technology cookie policy"
  ]
};

const CookiePolicy = () => {
  return (
    <>
      <Head>
        <title>Cookie Policy | Digital Link Technology - Official Technology Solutions Provider</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Cookie Policy | Digital Link Technology - Official Technology Solutions Provider" />
        <meta name="description" content="Official Digital Link Technology dealer and distributor. Leading provider of security cameras, CCTV systems, and surveillance solutions in Riyadh, Saudi Arabia. Best prices and professional installation." />
        <meta name="keywords" content="Digital Link Technology Saudi Arabia, Digital Link Technology Riyadh, Digital Link Technology dealer, Digital Link Technology distributor, Digital Link Technology security camera, Digital Link Technology CCTV, Digital Link Technology price, Digital Link Technology installation, Digital Link Technology products" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://digitallink-sa.com/cookies" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digitallink-sa.com/cookies" />
        <meta property="og:title" content="Cookie Policy | Digital Link Technology - Official Technology Solutions Provider" />
        <meta property="og:description" content="Official Digital Link Technology dealer and distributor. Leading provider of security cameras, CCTV systems, and surveillance solutions in Riyadh, Saudi Arabia." />
        <meta property="og:image" content="https://digitallink-sa.com/images/digitallink-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://digitallink-sa.com/cookies" />
        <meta property="twitter:title" content="Cookie Policy | Digital Link Technology - Official Technology Solutions Provider" />
        <meta property="twitter:description" content="Official Digital Link Technology dealer and distributor. Leading provider of security cameras, CCTV systems, and surveillance solutions in Riyadh, Saudi Arabia." />
        <meta property="twitter:image" content="https://digitallink-sa.com/images/digitallink-og.jpg" />
      </Head>

      <Script
        id="cookie-policy-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookiePolicySchema) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">About This Cookie Policy</h2>
            <p className="mb-4">
              This Cookie Policy explains how Digital Link Technology Saudi Arabia, authorized distributor of technology solutions in Saudi Arabia,
              uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are
              and why we use them, as well as your rights to control our use of them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely
              used by website owners to make their websites work, or work more efficiently, as well as to provide reporting information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">How We Use Cookies</h2>
            <p className="mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To enable certain functions of our website</li>
              <li>To provide analytics and understand how you use our website</li>
              <li>To store your preferences for product configurations and inquiries</li>
              <li>To enable our e-commerce functionality for Digital Link Technology products</li>
              <li>To improve our website security and protect against unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Essential Cookies:</h3>
                <p>These are necessary for the website to function properly and cannot be switched off in our systems.</p>
              </div>
              <div>
                <h3 className="font-semibold">Performance Cookies:</h3>
                <p>These allow us to count visits and traffic sources to measure and improve our website&apos;s performance.</p>
              </div>
              <div>
                <h3 className="font-semibold">Functional Cookies:</h3>
                <p>These enable enhanced functionality and personalization, such as product preferences and chat services.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Your Cookie Choices</h2>
            <p className="mb-4">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
              If you disable or refuse cookies, please note that some parts of our website may become inaccessible or not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:<br />
              Email: sales@digitallink-sa.com<br />
              Phone: +966 59 701 5415<br />
              Address: Olaya Street- Riyadh - Saudi Arabia
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
