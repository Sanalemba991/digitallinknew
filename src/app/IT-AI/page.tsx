import { Metadata } from "next";
import ItServices from "../Components/ItServices";

export const metadata: Metadata = {
  title: 'IT Services & Solutions | Digital Link Technology LLC',
  description: 'Discover a wide range of IT services and technology solutions offered by Digital Link Technology LLC. From software development to IT consulting, we deliver innovative and reliable solutions for businesses.',
  keywords: 'IT services, technology solutions, software development, IT consulting, Digital Link Technology LLC, business technology',
  openGraph: {
    title: 'IT Services & Solutions | Digital Link Technology LLC',
    description: 'Discover a wide range of IT services and technology solutions offered by Digital Link Technology LLC. From software development to IT consulting, we deliver innovative and reliable solutions for businesses.',
    type: 'website',
    url: 'https://digitallinktechnology.com/it-services', // adjust if actual URL differs
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ItServicesPage() {
  return (
    <>
      <ItServices />
    </>
  );
}
