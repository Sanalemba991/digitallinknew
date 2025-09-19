import { Metadata } from "next";
import Audio from "../Components/Audio";

export const metadata: Metadata = {
  title: 'Audio Solutions | Digital Link Technology LLC',
  description: 'Digital Link Technology LLC offers professional audio solutions, delivering high-quality sound systems for businesses, events, and organizations with innovative technology.',
  keywords: 'audio solutions, sound systems, professional audio, business audio, event audio, Digital Link Technology LLC, technology solutions',
  openGraph: {
    title: 'Audio Solutions | Digital Link Technology LLC',
    description: 'Digital Link Technology LLC offers professional audio solutions, delivering high-quality sound systems for businesses, events, and organizations with innovative technology.',
    type: 'website',
    url: 'https://digitallinktechnology.com/audio-solutions', // update if actual route differs
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AudioSolutionsPage() {
  return (
    <>
      <Audio />
    </>
  );
}
