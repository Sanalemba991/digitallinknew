// app/contact/page.js (Server Component)
import ContactClient from '../Components/Contact';

export const metadata = {
  title: 'Contact Digital Link Technology | Professional Support for Security & Technology Solutions',
  description: 'Professional support for security, surveillance, and technology solutions across Saudi Arabia and Middle East. 24/7 technical assistance available. Contact our expert team today.',
  keywords: 'Digital Link Technology contact, security solutions Saudi Arabia, surveillance Riyadh, technology support Middle East, professional assistance',
  robots: 'index, follow',
  canonical: 'https://digitallink-sa.com/Contact',
  openGraph: {
    type: 'website',
    url: 'https://digitallink-sa.com/Contact',
    title: 'Contact Digital Link Technology | Professional Support',
    description: 'Professional support for security, surveillance, and technology solutions across Saudi Arabia and Middle East. 24/7 technical assistance available.',
    images: ['https://digitallink-sa.com/images/contact-support.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://digitallink-sa.com/Contact',
    title: 'Contact Digital Link Technology | Professional Support',
    description: 'Professional support for security, surveillance, and technology solutions across Saudi Arabia and Middle East.',
    images: ['https://digitallink-sa.com/images/contact-support.jpg'],
  },
};

export const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://digitallinktech.ae/Contact",
  "name": "Contact Digital Link Technology - 24/7 Support for Security & Technology Solutions",
  "description": "Get in touch with Digital Link Technology's support team for all your security, surveillance, and technology needs. Professional assistance available 24/7 across Saudi Arabia and Middle East.",
  "url": "https://digitallink-sa.com/Contact",
  "keywords": "Digital Link Technology contact, security solutions Saudi Arabia, surveillance systems Riyadh, technology support Middle East, CCTV installation Saudi, elevator systems",
  "mainEntity": {
    "@type": "Organization",
    "name": "Digital Link Technology", 
    "telephone": "+966 59 701 5415",
    "email": "sales@digitallink-sa.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Olaya Street",
      "addressLocality": "Riyadh", 
      "addressRegion": "Riyadh",
      "addressCountry": "Saudi Arabia"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+966 59 701 5415",
        "contactType": "customer service",
        "areaServed": ["Saudi Arabia", "United Arab Emirates", "Bahrain"],
        "availableLanguage": ["English", "Arabic"],
        "contactOption": "TollFree",
        "hoursAvailable": "Mo-Fr 09:00-18:00"
      }
    ]
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  );
}