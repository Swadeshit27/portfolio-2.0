import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/common/Navbar'
import ScrollToTop from '@/components/common/ScrollToTop'
import ScrollToTopBtn from '@/components/common/ScrollToTopBtn'
import { Toaster } from 'react-hot-toast'


export const metadata: Metadata = { 
  title: {
    default: "Portfolio",
    template: "%s | Swadesh Pal"
  },
  description: "Create by Swadesh Pal, Student of Jalpaiguri Government Engineering College in Information Technology Department. Full Stack MERN & NextJs Developer and React Native Developer also.",
  // twitter: {
  //   description: "Hello, I am  Swadesh Pal, Student of Jalpaiguri Government Engineering College in Information Technology Department. Full Stack MERN & NextJs Developer and React Native Developer also.",
  // }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"w-full min-h-screen bg-[#1C2434] text-white"}>
        <Navbar />
        <ScrollToTop />
        <div className="w-full h-full relative z-20 ">
          {children}
        </div>
        <ScrollToTopBtn />
        <Toaster />
      </body>
    </html>
  )
}
