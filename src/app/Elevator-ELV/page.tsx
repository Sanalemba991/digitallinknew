import { Metadata } from "next";
import ElevatorELVSolutions from "../Components/ElevatorELVSolutions";

export const metadata: Metadata = {
  title: 'Elevator & ELV Solutions | Digital Link Technology LLC',
  description: 'Digital Link Technology LLC provides advanced Elevator and ELV (Extra Low Voltage) solutions, delivering reliable, innovative, and efficient technology for modern buildings and businesses.',
  keywords: 'Elevator solutions, ELV solutions, building technology, smart solutions, Digital Link Technology LLC, security systems, automation',
  openGraph: {
    title: 'Elevator & ELV Solutions | Digital Link Technology LLC',
    description: 'Digital Link Technology LLC provides advanced Elevator and ELV (Extra Low Voltage) solutions, delivering reliable, innovative, and efficient technology for modern buildings and businesses.',
    type: 'website',
    url: 'https://digitallinktechnology.com/elevator-elv-solutions', // update if actual route differs
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ElevatorELVSolutionsPage() {
  return (
    <>
      <ElevatorELVSolutions />
    </>
  );
}
