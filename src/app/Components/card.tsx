"use client"
import Image from 'next/image'
import darkfighter from '../../../public/darkfighter.png'
import tandemvu from '../../../public/tandem.png'
import colorvu from '../../../public/color.png'
import { Metadata } from 'next'
import Script from 'next/script'

interface TechnologyCardProps {
  title: string;
  logoSrc: string;
  description?: string;
  learnMoreUrl?: string;
  logoAlt?: string;
}

const TechnologyCard = ({ 
  title, 
  logoSrc, 
  description, 
  learnMoreUrl,
  logoAlt 
}: TechnologyCardProps) => {
  return (
    <div 
      className="group relative bg-white
                rounded-xl sm:rounded-[2rem] p-4 sm:p-8 flex flex-col items-center justify-center 
                min-h-[380px] sm:min-h-[420px]
                shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
                hover:shadow-[0_8px_30px_rgb(239,68,68,0.1)]
                transition-all duration-500 ease-out
                border border-gray-100/50
                hover:border-red-200/50
                backdrop-blur-sm
                overflow-hidden"
      role="article"
      tabIndex={0}
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-white opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative w-36 sm:w-48 h-24 sm:h-32 mb-6 sm:mb-8 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-100/10 to-transparent 
                     rounded-full blur-2xl scale-150 opacity-0 group-hover:opacity-100 
                     transition-opacity duration-500" />
        <Image
          src={logoSrc}
          alt={logoAlt || `${title} logo`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={true}
          className="transition-all duration-500 ease-out group-hover:scale-110 
                   drop-shadow-lg object-contain"
        />
      </div>

      <h2 className="relative text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center z-10
                   text-black
                   transition-all duration-500">
        {title}
      </h2>

      {description && (
        <p className="relative text-black text-center text-sm sm:text-base mb-6 sm:mb-8 
                    max-w-[280px] leading-relaxed transition-all duration-500 ease-out z-10
                    group-hover:text-gray-900">
          {description}
        </p>
      )}

      {learnMoreUrl && (
        <a
          href={learnMoreUrl}
          className="absolute bottom-0 left-0 right-0 py-4 sm:py-5
                   bg-gradient-to-r from-red-600 to-red-700 
                   text-white text-center font-semibold text-sm
                   transform translate-y-full group-hover:translate-y-0 
                   transition-all duration-500 ease-out
                   hover:from-red-700 hover:to-red-800
                   active:from-red-800 active:to-red-900
                   focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                   uppercase tracking-wider"
          aria-label={`Learn more about ${title}`}
        >
          Explore Technology
        </a>
      )}
    </div>
  );
};

const TechnologyGrid = () => {
  const technologies: TechnologyCardProps[] = [
    {
      title: "DarkFighter Technology",
      logoSrc: darkfighter.src,
      description: "Advanced low-light imaging technology optimized for UAE's challenging lighting conditions. Perfect for 24/7 surveillance in Dubai's diverse environments.",
      learnMoreUrl: "/Darkfighter",
      logoAlt: "DarkFighter Technology UAE"
    },
    {
      title: "TandemVu Technology",
      logoSrc: tandemvu.src,
      description: "Dual-lens security solution designed for UAE's commercial spaces. Combines thermal and optical imaging for comprehensive surveillance coverage.",
      learnMoreUrl: "/Tandemvu",
      logoAlt: "TandemVu Technology UAE"
    },
    {
      title: "ColorVu Technology",
      logoSrc: colorvu.src,
      description: "Full-color night vision technology adapted for UAE conditions. Delivers crystal-clear color imaging even in complete darkness.",
      learnMoreUrl: "/Colorvu",
      logoAlt: "ColorVu Technology UAE"
    },
    {
      title: "AcuSense Technology",
      logoSrc: darkfighter.src,
      description: "AI-powered security detection optimized for UAE businesses. Reduces false alarms while ensuring accurate threat detection.",
      learnMoreUrl: "/Acusense",
      logoAlt: "AcuSense Technology UAE"
    },
  ];

  return (
    <section className="py-16 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 leading-tight">
          <span className="text-black">Our Tech</span>
          <span className="text-red-600">nologies</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                      gap-6 sm:gap-8 xl:gap-12">
          {technologies.map((tech: TechnologyCardProps) => (
            <TechnologyCard
              key={tech.title}
              {...tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const metadata: Metadata = {
  title: 'Digital Link Technology Saudi Arabia | Leading Technology Solutions Provider',
  description: 'Leading technology solutions provider in Saudi Arabia offering elevator systems, audio visual & surveillance technologies. Expert installation & technology solutions in Riyadh. Contact +966 59 701 5415.',
  keywords: 'Digital Link Technology Saudi Arabia, Digital Link Technology Riyadh, technology solutions provider Saudi Arabia, elevator systems Riyadh, audio visual installation Saudi Arabia, elevator systems, audio visual solutions, surveillance systems, technology Riyadh',
  alternates: {
    canonical: 'https://www.digitallinktech.sa/'
  },
  openGraph: {
    title: 'Digital Link Technology Saudi Arabia | Leading Technology Solutions Provider',
    description: 'Discover advanced technology solutions in Saudi Arabia. Premium elevator systems, audio visual & surveillance solutions in Riyadh. Visit our office or call +966 59 701 5415.',
    type: 'website',
    locale: 'en_SA',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Link Technology Saudi Arabia',
      },
    ],
    siteName: 'Digital Link Technology Saudi Arabia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Link Technology Saudi Arabia | Technology Solutions Provider',
    description: 'Leading technology solutions provider in Saudi Arabia. Expert installation & support in Riyadh.',
    creator: '@digitallinktechsa',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hikvision UAE',
  description: 'Official Hikvision dealer in Dubai, providing premium security cameras and CCTV solutions',
  url: 'https://www.hikvisionuae.ae',
  logo: 'https://www.hikvisionuae.ae/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+966597015415',
    contactType: 'sales',
    areaServed: 'AE',
    availableLanguage: ['en', 'ar']
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 12, Al khabaisi, Abu hail',
    addressLocality: 'Dubai',
    addressCountry: 'UAE'
  },
  sameAs: [
    'https://www.facebook.com/hikvisionuae',
    'https://www.instagram.com/hikvisionuae',
    // Add your actual social media URLs
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Hikvision Security Technologies',
    itemListElement: [
      {
        '@type': 'Product',
        name: 'DarkFighter Technology',
        image: 'https://www.hikvisionuae.ae/darkfighter.png',
        description: 'Advanced low-light imaging technology for superior night vision surveillance in UAE conditions',
        brand: {
          '@type': 'Brand',
          name: 'Hikvision'
        },
        category: 'Security Cameras',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'AED',
          price: '999.00',
          lowPrice: '999.00',
          highPrice: '4999.00',
          offerCount: '5',
          availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '127',
          bestRating: '5',
          worstRating: '1'
        }
      },
      {
        '@type': 'Product',
        name: 'TandemVu Technology',
        image: 'https://www.hikvisionuae.ae/tandem.png',
        description: 'Dual-lens security camera technology optimized for Middle East surveillance needs',
        brand: {
          '@type': 'Brand',
          name: 'Hikvision'
        },
        category: 'Security Cameras',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'AED',
          price: '1299.00',
          lowPrice: '1299.00',
          highPrice: '5999.00',
          offerCount: '4',
          availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.7',
          reviewCount: '98',
          bestRating: '5',
          worstRating: '1'
        }
      },
      {
        '@type': 'Product',
        name: 'ColorVu Technology',
        image: 'https://www.hikvisionuae.ae/color.png',
        description: 'Full-color night vision security cameras perfect for UAE commercial and residential use',
        brand: {
          '@type': 'Brand',
          name: 'Hikvision'
        },
        category: 'Security Cameras',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'AED',
          price: '1499.00',
          lowPrice: '1499.00',
          highPrice: '6999.00',
          offerCount: '3',
          availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.6',
          reviewCount: '76',
          bestRating: '5',
          worstRating: '1'
        }
      },
      {
        '@type': 'Product',
        name: 'AcuSense Technology',
        image: 'https://www.hikvisionuae.ae/acusense.png',
        description: 'AI-powered security detection system for enhanced surveillance in Dubai and UAE',
        brand: {
          '@type': 'Brand',
          name: 'Hikvision'
        },
        category: 'Security Cameras',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'AED',
          price: '1999.00',
          lowPrice: '1999.00',
          highPrice: '9999.00',
          offerCount: '2',
          availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.5',
          reviewCount: '58',
          bestRating: '5',
          worstRating: '1'
        }
      }
    ]
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 25.2048,
      longitude: 55.2708
    },
    geoRadius: '100km',
    description: 'Riyadh, Saudi Arabia region'
  }
};

const SchemaScript = () => {
  return (
    <Script
      id="schema-script"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function Page() {
  return (
    <>
      <TechnologyGrid />
      
      <SchemaScript />
    </>
  );
}
