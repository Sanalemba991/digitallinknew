import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';
import { Toaster } from "react-hot-toast";
import favicon from '../../public/favicon.jpg';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Whatsapp from "./Components/Whatsapp";


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Digital Link Technology Saudi Arabia - Professional Technology Solutions",
  description: "Premier provider of elevator systems, audio visual solutions, and surveillance technologies in Saudi Arabia",
  keywords: ["digital link technology saudi arabia", "elevator systems ksa", "audio visual solutions riyadh", "surveillance systems saudi arabia", "elevator elv solutions", "digital technology riyadh", "elevator installation saudi arabia", "audio visual riyadh", "surveillance solutions ksa", "elevator maintenance saudi arabia", "audio visual systems saudi arabia", "surveillance cameras riyadh", "elevator modernization ksa", "av solutions saudi arabia", "security systems riyadh", "elevator technology saudi arabia", "audio visual installation riyadh", "surveillance equipment ksa", "elevator consulting saudi arabia", "digital solutions riyadh"],

  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: favicon.src,
  },




};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans`}>
        <Navbar />
        <Toaster position="top-right" />
        {children}
       <Whatsapp/>
        <Footer />
      </body>
    </html>
  );
}
