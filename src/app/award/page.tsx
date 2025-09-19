import { Metadata } from "next";
import Awards from "../Components/Awards";

export const metadata: Metadata = {
  title: 'Awards & Achievements | Digital Link Technology LLC',
  description: 'Explore the awards and recognitions received by Digital Link Technology LLC for delivering innovative technology solutions and excellence in the IT industry.',
  keywords: 'awards, achievements, recognition, Digital Link Technology LLC, technology excellence, industry awards, innovation',
  openGraph: {
    title: 'Awards & Achievements | Digital Link Technology LLC',
    description: 'Explore the awards and recognitions received by Digital Link Technology LLC for delivering innovative technology solutions and excellence in the IT industry.',
    type: 'website',
    url: 'https://digitallinktechnology.com/awards', // update if actual route differs
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AwardsPage() {
  return (
    <>
      <Awards />
    </>
  );
}
