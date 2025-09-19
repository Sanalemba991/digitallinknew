import Terms from './terms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Digital Link Technology Saudi Arabia',
  description: 'Terms of Service for Digital Link Technology Saudi Arabia. Learn about our terms and conditions for elevator systems, audio visual solutions, and surveillance services.',
  keywords: 'Digital Link Technology Saudi Arabia, terms of service, terms and conditions, elevator systems, audio visual solutions, surveillance',
  openGraph: {
    title: 'Terms of Service - Digital Link Technology Saudi Arabia',
    description: 'Terms of Service for Digital Link Technology Saudi Arabia. Professional technology solutions in the Kingdom of Saudi Arabia.',
    url: 'https://digitallinktech.sa/terms',
    siteName: 'Digital Link Technology Saudi Arabia',
    images: [
      {
        url: 'https://digitallinktech.sa/logo.png',
        width: 1200,
        height: 630,
        alt: 'Digital Link Technology Saudi Arabia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - Digital Link Technology Saudi Arabia',
    description: 'Terms of Service for Digital Link Technology Saudi Arabia technology solutions.',
    images: ['https://digitallinktech.sa/logo.png'],
  },
  alternates: {
    canonical: 'https://digitallinktech.sa/terms',
  },
};

export default function TermsPage() {
  return <Terms />;
}