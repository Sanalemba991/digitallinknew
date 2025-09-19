import { Metadata } from "next";
import Team from "../Components/Team";

export const metadata: Metadata = {
  title: 'About Us | Digital Link Technology LLC',
  description: 'Learn more about Digital Link Technology LLC, our team, our values, and how we deliver innovative technology solutions that make a difference.',
  keywords: 'about us, Digital Link Technology LLC, our team, company values, technology solutions, innovation',
  openGraph: {
    title: 'About Us | Digital Link Technology LLC',
    description: 'Learn more about Digital Link Technology LLC, our team, our values, and how we deliver innovative technology solutions that make a difference.',
    type: 'website',
    url: 'https://digitallinktechnology.com/about', // adjust if actual URL differs
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
  return (
    <>
      <Team />
    </>
  );
}
