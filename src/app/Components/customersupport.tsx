import React from 'react';
import Head from 'next/head';

// Update schema markup with more comprehensive details
const schema = {
  "@context": "https://schema.org",
  "@type": ["Service", "Organization"],
  "@id": "https://digitallink-sa.com/customer-support",
  "name": "Technology Systems Customer Support",
  "headline": "24/7 Technology Systems Customer Support in Riyadh",
  "description": "24/7 professional customer support and after-sale services for technology systems in Riyadh, Saudi Arabia and Middle East",
  "image": [
    "https://digitallink-sa.com/images/customer-support.jpg"
  ],
  "imageObject": {
    "@type": "ImageObject",
    "url": "https://digitallink-sa.com/images/customer-support.jpg",
    "width": 1200,
    "height": 630
  },
  "brand": {
    "@type": "Brand",
    "name": "Digital Link Technology"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://digitallink-sa.com/customer-support"
  },
  "datePublished": "2024-01-01T08:00:00+03:00",
  "dateModified": new Date().toISOString(),
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Olaya Street",
    "addressLocality": "Riyadh",
    "addressCountry": "Saudi Arabia"
  },
  "telephone": "+966 59 701 5415",
  "openingHours": "Mo-Su 00:00-24:00",
  "areaServed": ["Riyadh", "Saudi Arabia", "Middle East"],
  "serviceType": ["Elevator Installation", "Audio Visual Support", "Surveillance Installation", "After-Sales Service"],
  "provider": {
    "@type": "Organization",
    "name": "Digital Link Technology Saudi Arabia",
    "url": "https://digitallink-sa.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://digitallink-sa.com/logo.png"
    }
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "SAR",
    "price": "3000.00",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Digital Link Technology Saudi Arabia"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Add FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What kind of support services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer 24/7 customer support, professional installation, maintenance services, and comprehensive after-sales support for all security systems."
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact your support team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can reach our support team through multiple channels including phone, email, or by visiting our location in Dubai. We provide 24/7 assistance for urgent matters."
      }
    }
  ]
};

const CustomerSupport: React.FC = () => {
  return (
    <>
      <Head>
        <title>24/7 Security Systems Customer Support in Riyadh | Professional Technology Service</title>
        <meta name="description" content="Get expert 24/7 customer support for security cameras in Riyadh. Professional installation, maintenance & after-sales service. Best security solutions in Saudi Arabia." />
        <meta name="keywords" content="security system support Riyadh, CCTV maintenance Saudi Arabia, technology support, security camera installation, 24/7 technical support, CCTV service Riyadh, security system maintenance Saudi" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="24/7 Security Systems Customer Support in Riyadh | Professional Technology Service" />
        <meta property="og:description" content="Get expert 24/7 customer support for security cameras in Riyadh. Professional installation, maintenance & after-sales service." />
        <meta property="og:image" content="https://digitallink-sa.com/images/customer-support.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digitallink-sa.com/customer-support" />
        <meta property="og:locale" content="en_SA" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="24/7 Security Systems Customer Support in Riyadh" />
        <meta name="twitter:description" content="Expert 24/7 customer support for security cameras in Riyadh. Professional installation & maintenance services." />
        <meta name="twitter:image" content="https://digitallink-sa.com/images/customer-support.jpg" />
        
        {/* Additional SEO tags */}
        <link rel="canonical" href="https://digitallink-sa.com/customer-support" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Schema markup */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-red-600">Need Awesome Customer Support</span>
              <br className="md:hidden" />
              <span className="text-black"> & Whole After-Sale Service?</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-red-600">24/7 Support Available</h3>
              <p className="text-gray-700 leading-relaxed">
                We understand the importance of reliable customer support and comprehensive after-sale services for your satisfaction. Our dedicated support team is available around the clock to assist you with any questions or concerns you may encounter.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Multiple Contact Options</h3>
              <p className="text-gray-700 leading-relaxed">
                Reaching us is convenient through multiple channels—phone, email, or visit our location in Riyadh. We offer extended support hours including 24/7 assistance for urgent matters.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Professional Installation</h3>
              <p className="text-gray-700 leading-relaxed">
                Our service goes beyond product delivery. We provide expert installation services to ensure your security system operates at peak performance and efficiency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Comprehensive Resources</h3>
              <p className="text-gray-700 leading-relaxed">
                We provide extensive resources including user guides and training sessions to help you maximize your security system&apos;s potential. Our straightforward return and refund process ensures your peace of mind. We&apos;re not just your supplier; we&apos;re your security partner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-red-600">Why Choose</span>
            <span className="text-black"> Our Services?</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            We combine industry expertise with exceptional service to deliver the best security solutions in Saudi Arabia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Premium Quality</h3>
            <p className="text-gray-600">
              We offer only genuine, high-quality products, ensuring you get the finest security solutions available in the market.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Expert Team</h3>
            <p className="text-gray-600">
              Our certified professionals bring years of experience in security system installation and maintenance.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Guaranteed Results</h3>
            <p className="text-gray-600">
              We stand behind our work with comprehensive warranties and guaranteed customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
