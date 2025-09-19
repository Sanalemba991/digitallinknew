import { Metadata } from "next";
import Servalliance from "../Components/Servelliance";

export const metadata: Metadata = {
  title: 'Our Services & Alliances | Digital Link Technology LLC',
  description: 'Explore the wide range of services and strategic alliances offered by Digital Link Technology LLC. We provide innovative technology solutions and trusted partnerships to drive business success.',
  keywords: 'services, alliances, partnerships, technology solutions, Digital Link Technology LLC, IT services, business growth',
  openGraph: {
    title: 'Our Services & Alliances | Digital Link Technology LLC',
    description: 'Explore the wide range of services and strategic alliances offered by Digital Link Technology LLC. We provide innovative technology solutions and trusted partnerships to drive business success.',
    type: 'website',
    url: 'https://digitallinktechnology.com/services-alliances', // update if actual route differs
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesAlliancePage() {
  return (
    <>
      <Servalliance />
    </>
  );
}
