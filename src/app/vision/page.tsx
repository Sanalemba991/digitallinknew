import { Metadata } from "next";
import VisionPage from "../Components/VisionPage";

export const metadata: Metadata = {
  title: 'Our Vision | Digital Link Technology LLC',
  description: 'Discover the vision of Digital Link Technology LLC. Learn how we strive to deliver innovative technology solutions and create lasting impact for our clients.',
  keywords: 'vision, company vision, Digital Link Technology LLC, technology solutions, innovation, future goals',
  openGraph: {
    title: 'Our Vision | Digital Link Technology LLC',
    description: 'Discover the vision of Digital Link Technology LLC. Learn how we strive to deliver innovative technology solutions and create lasting impact for our clients.',
    type: 'website',
    url: 'https://digitallinktechnology.com/vision', // adjust if your actual URL differs
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Vision() {
  return (
    <>
      <VisionPage />
    </>
  );
}
