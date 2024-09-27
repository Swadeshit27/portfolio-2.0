import Experience from '@/components/Home/Experience'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Experience ",
  openGraph: {
    title: "Experience ",
    description: "Hello 👋, I am Swadesh pal, from Bishnupur, west Bengal, Student of Jalpaiguri Government Engineering College in Information Technology Department. I'm a Full Stack Web Developer and React Native Developer from India.I have completed 2 months of internship at Baskethunt Pvt. Ltd as IT & Web Developer Role and 6 month of Internship at Achinatya Solutions as a MERN stack Developer role. Currently  I am doing internship at Get Me Therapy as a Front-end developer role",
    images: [{
      url: '/og.jpg',
      width: 1200,
      height: 630,
      alt: "Experience - Swadesh Pal",
    }],
    url: "/experience",
    type: "website",
  }
}

const Experiences = () => {
  return (
    <section className='py-6 xs:py-12'>
      <Experience  />
      <Experience
        heading='Open Source & Hackathons'
        headingImg='/hackathon.png' 
        category='Hackathon' 
      />
      
    </section>
  )
}

export default Experiences
