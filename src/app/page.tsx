import Banner from './Components/banner'
import { notFound } from 'next/navigation'
import Approach from "./Components/Approach";
import Partners from "./Components/Partner";
import HomeContact from "./Components/HomeContact";
import Testimony from "./Components/Testimony";
import OurDetails from "./Components/OurDetails";
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Digital Link Technology - Leading Security Solutions Provider in Saudi Arabia',
  description: 'Digital Link Technology is your trusted partner for advanced security solutions in Saudi Arabia. We offer top-notch CCTV systems, access control, and surveillance services to protect your home and business.',
}

export default function Home() {
  try {

    return (
      <div>

        <Banner />
        <OurDetails />
        <Approach />
        <Partners />
        <Testimony />
        <HomeContact />

      </div>
    )
  } catch (error) {
    console.error('Error in Home component:', error)
    notFound()
  }
}