import { Metadata } from "next";
import PartnersPage from "@/app/Components/PartnersPage";

export const metadata: Metadata = {
  title: 'Our Partners | Digital Link Technology LLC',
  description: 'Discover the trusted partners of Digital Link Technology LLC. We collaborate with leading organizations to deliver innovative and reliable technology solutions.',
  keywords: 'partners, business partners, technology partnerships, collaborations, Digital Link Technology LLC, strategic alliances',
  openGraph: {
    title: 'Our Partners | Digital Link Technology LLC',
    description: 'Discover the trusted partners of Digital Link Technology LLC. We collaborate with leading organizations to deliver innovative and reliable technology solutions.',
    type: 'website',
    url: 'https://digitallinktechnology.com/partner', // update if actual route differs
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Partners() {
  return (
    <>
      <PartnersPage />
    </>
  );
}
