
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/common/Navbar'
import ScrollToTop from '@/components/common/ScrollToTop'
import ScrollToTopBtn from '@/components/common/ScrollToTopBtn'
import { Toaster } from 'react-hot-toast'
import { Space_Mono } from "next/font/google"
import AnimatedBoxes from '@/components/animated-boxes'
import { Suspense } from 'react'
import Loading from './loading'
import Footer from '@/components/common/Footer'
import { revalidate } from './revalidate'

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-swadesh-pal.vercel.app"),
  title: {
    default: "Portfolio",
    template: "%s | Swadesh Pal"
  },
  description: "Hello 👋, I am Swadesh pal, from Bishnupur, west Bengal, Student of Jalpaiguri Government Engineering College in Information Technology Department. I'm a Full Stack Web Developer and React Native Developer from India.",
  twitter: {
    title: {
      default: "Portfolio",
      template: "%s | Swadesh Pal"
    },
    description: "Hello 👋, I am Swadesh pal, from Bishnupur, west Bengal, Student of Jalpaiguri Government Engineering College in Information Technology Department. I'm a Full Stack Web Developer and React Native Developer from India.",
    card: "summary_large_image"
  },
  openGraph: {
    title: {
      default: "Portfolio",
      template: "%s | Swadesh Pal"
    },
    description: "Hello 👋, I am Swadesh pal, from Bishnupur, west Bengal, Student of Jalpaiguri Government Engineering College in Information Technology Department. I'm a Full Stack Web Developer and React Native Developer from India.",
    countryName: "India",
    url: "https://portfolio-swadesh-pal.vercel.app",
    type: "website",
  }
}

revalidate()
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`w-full min-h-screen bg-[#1C2434] text-white ${spaceMono.className}`}>
        <Navbar />
        <ScrollToTop />
        <div className="w-full min-h-screen relative z-20 ">
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </div>
        <AnimatedBoxes />
        <ScrollToTopBtn />
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
