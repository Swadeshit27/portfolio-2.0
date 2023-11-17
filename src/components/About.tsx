"use client"
import React from 'react'
import myPhoto from "@/assets/myphoto.png"
import Image from 'next/image'
import EducationDetails from '@/data/Education.json'
import Education from '@/components/Education'
import { educationDetailsType } from '@/data/types'
import Header from '@/components/Header'
import { motion } from "framer-motion"
import education from "@/assets/education.png"
import Layout from './Layout'


const About = () => {
    return (
        <>
            <Layout>
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 * 0.5, duration: 0.6, ease: 'easeOut' }}
                >
                    <Header title={"about me"} />
                </motion.div>
                <div className="w-full max-w-[1300px] h-full flex max-md:flex-col justify-between mx-auto">
                    <div className="w-4/5 mx-auto md:w-[50%] min-h-[60vh] h-full  font-libre max-md:order-2">
                        <motion.p
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2 * 0.3, duration: 0.6, ease: 'easeOut' }}
                            className="text-sm sm:text-lg font-semibold text-yellow-500 w-full">
                            Hello, I&apos;m 👋
                        </motion.p>
                        <motion.h1
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 3 * 0.3, duration: 0.6, ease: 'easeOut' }}
                            className={`text-3xl sm:text-5xl font-[600] my-2 text-violet-600`}
                        >
                            Swadesh Pal
                        </motion.h1>
                        <motion.p
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 0.75 }}
                            transition={{ delay: 4 * 0.3, duration: 0.6, ease: 'easeOut' }}
                            className="opacity-75 max-sm:text-sm">
                            I am a passionate and driven individual pursuing a Bachelor of Technology degree in Information Technology from Jalpaiguri Government Engineering College in Jalpaiguri, West Bengal. I am a Full MERN stack developer with expertise in data structures and algorithms. I have developed web applications using React, Node.js, Express.js, and MongoDB. I am very much interested in open source contribution
                        </motion.p>
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 4 * 0.5, duration: 0.6, ease: 'easeOut' }}
                        >
                            <h1 className='text-xl sm:text-2xl font-libre mt-6 mb-2 capitalize'>language proficiency :-</h1>
                            <h2 className='text-sm sm:text-lg font-libre ms-4 mb-2 capitalize'>bengali <span className=' opacity-75 text-sm'>( Full professional proficiency )</span></h2>
                            <h2 className='text-sm sm:text-lg font-libre ms-4 mb-2 capitalize'>english <span className=' opacity-75 text-sm'>( Full professional proficiency )</span></h2>
                            <h2 className='text-sm sm:text-lg font-libre ms-4 mb-2 capitalize'>hindi <span className=' opacity-75 text-sm'>( Full professional proficiency )</span></h2>
                        </motion.div>
                    </div>
                    <div className="md:w-[50%] h-full relative flex  justify-center max-md:order-1 max-md:my-12">
                        <motion.div
                            initial={{ rotate: -8 }}
                            whileInView={{ rotate: 8 }}
                            transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
                            className="w-[15rem] sm:w-[18rem] h-[17rem] sm:h-[20rem] bg-gradient-to-b from-rose-500 to-violet-500 rounded-lg mx-auto rotate-[8deg] ">
                        </motion.div>
                        <motion.div
                            initial={{ rotate: 8 }}
                            whileInView={{ rotate: 0 }}
                            transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }} className=' absolute top-0 w-[15rem] sm:w-[18rem] h-[17rem] sm:h-[20rem] mx-auto rounded-lg'>
                            <Image src={myPhoto} alt="" width={150} height={150} className='w-full h-full rounded-lg object-cover' />
                        </motion.div>
                    </div>
                </div>
                {/* <div className=''>more details</div> */}
            </Layout >
        </>
    )
}

export default About