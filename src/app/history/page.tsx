import { Metadata } from "next";
import DigitalLinkHistory from "@/app/Components/History";

export const metadata: Metadata = {
  title: 'Company Overview & History | Digital Link Technology LLC',
  description: 'Discover the journey of Digital Link Technology LLC. Learn about our company history, growth, and commitment to delivering innovative technology solutions worldwide.',
  keywords: 'company overview, company history, Digital Link Technology LLC, technology solutions, innovation, business growth, about company',
  openGraph: {
    title: 'Company Overview & History | Digital Link Technology LLC',
    description: 'Discover the journey of Digital Link Technology LLC. Learn about our company history, growth, and commitment to delivering innovative technology solutions worldwide.',
    type: 'website',
    url: 'https://digitallinktechnology.com/history', // update if actual route differs
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HistoryPage() {
  return (
    <>
      <DigitalLinkHistory />
    </>
  );
}
