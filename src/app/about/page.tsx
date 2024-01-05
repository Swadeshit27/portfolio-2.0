"use client"
import React from 'react'
import Image from 'next/image'
import education from "@/assets/education.png"
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import myPhoto from "@/assets/myphoto.png"
import { CodingProfiles, EducationList, PersonalDetails } from "@/data/Education"
import { FaCalendarAlt } from "react-icons/fa";
import Link from 'next/link'


const AboutPage = () => {
    return (
        <>
            <Layout>
                <Header title={"about me"} />
                <div className="w-full max-w-[1200px] h-full flex max-md:flex-col justify-between mx-auto">
                    <div className="w-[90%] mx-auto md:w-[50%] min-h-[60vh] h-full  font-libre max-md:order-2">
                        <p className="text-sm sm:text-lg font-semibold text-yellow-500 w-full">
                            Hello, I&apos;m 👋
                        </p>
                        <h1 className={`text-3xl sm:text-5xl font-[600] my-2 text-violet-600`}>
                            Swadesh Pal
                        </h1>
                        <p className="opacity-75 max-sm:text-sm">
                            I am a passionate and driven individual pursuing a Bachelor of Technology degree in Information Technology from Jalpaiguri Government Engineering College in Jalpaiguri, West Bengal. I am a Full MERN stack developer with expertise in data structures and algorithms. I have developed web applications using React, Node.js, Express.js, and MongoDB. I am very much interested in open source contribution
                        </p>
                        <div className='flex gap-x-8 my-4'>
                            <Link href={"https://drive.google.com/file/d/1Xp70JqnIYtOft9AHyetlVSFW8QtG9g-5/view?usp=sharing"}>
                                <div className='cursor-pointer drop-shadow-lg shadow-violet-300 bg-violet-700 rounded-full text-lg text-white text-center w-36 py-3'>Resume</div>
                            </Link>
                            <Link href={"/contact"}>
                                <div className='cursor-pointer drop-shadow-lg shadow-violet-300 border-2 border-violet-700 rounded-full text-lg text-white text-center w-36 py-3'>Hire Me</div>
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-[50%] h-full relative flex  justify-center max-md:order-1 max-md:my-12">
                        <div className="w-[15rem] sm:w-[18rem] h-[17rem] sm:h-[20rem] bg-gradient-to-b from-rose-500 to-violet-500 rounded-lg mx-auto rotate-[8deg] ">
                        </div>
                        <div className=' absolute top-0 w-[15rem] sm:w-[18rem] h-[17rem] sm:h-[20rem] mx-auto rounded-lg'>
                            <Image src={myPhoto} alt="" width={150} height={150} className='w-full h-full rounded-lg object-cover' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap gap-x-16 font-libre'>
                    <div>
                        <h1 className='text-xl sm:text-2xl text-green-500 font-semibold my-4'>Personal Details:</h1>
                        <ul className='sm:text-lg font-medium ms-4'>
                            {
                                PersonalDetails.map(item => (<li key={item.key} className='text-violet-500'>{item.key} : <span className='text-blue-500'>{item.value}</span></li>))
                            }
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl sm:text-2xl text-green-500 font-semibold my-4'>Coding Profiles:</h1>
                        <ul className='sm:text-[16px] font-medium ms-4'>
                            {
                                CodingProfiles.map(item => (<li key={item.name} className='text-violet-500 hover:underline'><Link href={item.path}>{item.name}</Link></li>))
                            }
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl sm:text-2xl text-green-500 font-semibold my-4 capitalize'>language proficiency :-</h1>
                        <h2 className='sm:text-lg font-libre ms-4 mb-2 capitalize'>bengali <span className=' opacity-75 text-sm'>( Full professional proficiency )</span></h2>
                        <h2 className='sm:text-lg font-libre ms-4 mb-2 capitalize'>english <span className=' opacity-75 text-sm'>( Full professional proficiency )</span></h2>
                        <h2 className='sm:text-lg font-libre ms-4 mb-2 capitalize'>hindi <span className=' opacity-75 text-sm'>( Full professional proficiency )</span></h2>
                    </div>
                </div>


                {/* ****************************** Education Details ****************************************************** */}
                <h1 className=' text-center font-semibold font-dancing text-4xl capitalize mt-20 mb-10'>Education Details</h1>
                <div className="w-full sm:w-[80%] max-w-[1200px] h-full  mx-auto relative pb-20">
                    <div className="h-[45rem] w-[10px] bg-white mx-auto absolute max-lg:right-[2.2rem] lg:left-[50%] -z-10 rounded-full"></div>
                    {
                        EducationList.map(item => {
                            const { date, title, details, isReverse } = item;
                            return (
                                <div key={title} className={`flex justify-end min-h-[12rem] lg:w-[54%]  pt-12 font-libre  ${!isReverse ? "ms-2" : "ms-2 lg:ms-auto lg:flex-row-reverse"}`}>
                                    <div className='w-[16rem] sm:w-[25rem] min-h-[8rem] rounded-lg bg-violet-700 me-3 sm:mx-4 relative p-3 sm:px-6 sm:py-4'>
                                        <div className={`absolute  top-8 border-solid   border-y-transparent border-y-8 ${!isReverse ? "reverse_box" : "max-lg:reverse_box lg:left-[-8px] lg:border-r-violet-700 lg:border-r-8  lg:border-l-0"}`}></div>
                                        <div className='flex items-center '><FaCalendarAlt className={'text-lg sm:text-xl'} /> <span className='text-sm sm:text-[16px] ms-2 sm:ms-4'>{date}</span> </div>
                                        <h1 className='text-[14px] my-1 sm:my-2 sm:text-lg font-semibold text-yellow-400'>{title}</h1>
                                        <h1 className='text-[12px] sm:text-[14px] opacity-75'>{details}</h1>
                                    </div>
                                    <div className="min-w-20 w-20 min-h-20 h-20 rounded-full bg-rose-300 border-[5px] border-white flex justify-center items-center ">
                                        <Image src={education} alt='education' height={50} width={50} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Layout >
        </>
    )
}

export default AboutPage
