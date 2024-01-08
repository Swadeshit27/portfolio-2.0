import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import img from "./Icons/person96.png"

export const metadata: Metadata = {
  title: 'Portfolio|Swadesh Pal',
  description: 'Created by Swadesh Pal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"w-full h-screen overflow-y-scroll bg-gray-900"}>
        <Navbar />
        <div className="w-full h-full pt-20 relative z-20 ">
          {children}
        </div>
      </body>
    </html>
  )
}
