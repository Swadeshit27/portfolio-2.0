"use client"
import React from 'react'
import Image from 'next/image'
import education from "@/assets/education.png"
import Layout from '@/components/Layout'
import About from '@/components/About'


const AboutPage = () => {
    return (
        <>
            <About />
            <Layout>
                {/* ****************************** Education Details ****************************************************** */}
                <h1 className=' text-center font-semibold font-dancing text-4xl capitalize my-6'>Education Details</h1>
                <div className="w-full max-w-[1300px] h-full  mx-auto relative">
                    <div className="h-[60rem] w-[10px] bg-white mx-auto absolute left-[50%] -z-10">
                    </div>
                    <div className='flex h-[12rem] w-[80%] mx-auto py-12 mb-12'>
                        <div className='w-[20rem] h-[10rem] rounded-lg bg-violet-500 mt-4   mx-8 relative '>
                            <div className=' absolute right-[-8px] top-8 border-solid border-l-violet-500  border-l-8 border-y-transparent border-y-8 border-r-0 '></div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum placeat soluta expedita.
                        </div>
                        <div className=" w-32 h-32 rounded-full bg-rose-300 border-[10px] border-white flex justify-center items-center ">
                            <Image src={education} alt='education' height={80} width={80} />
                        </div>
                    </div>
                    <div className='flex justify-start flex-row-reverse h-[12rem] w-[82%] mx-auto py-12 mb-12'>
                        <div className='w-[20rem] h-[10rem] rounded-lg bg-violet-500 mt-4   mx-8 relative '>
                            <div className=' absolute left-[-8px] top-8 border-solid border-r-violet-500   border-r-8 border-y-transparent border-y-8 border-l-0 '></div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum placeat soluta expedita.
                        </div>
                        <div className=" w-32 h-32 rounded-full bg-rose-300 border-[10px] border-white flex justify-center items-center ">
                            <Image src={education} alt='education' height={80} width={80} />
                        </div>
                    </div>
                    <div className='flex h-[12rem] w-[80%] mx-auto py-12 mb-12'>
                        <div className='w-[20rem] h-[10rem] rounded-lg bg-violet-500 mt-4   mx-8 relative '>
                            <div className=' absolute right-[-8px] top-8 border-solid border-l-violet-500  border-l-8 border-y-transparent border-y-8 border-r-0 '></div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum placeat soluta expedita.
                        </div>
                        <div className=" w-32 h-32 rounded-full bg-rose-300 border-[10px] border-white flex justify-center items-center ">
                            <Image src={education} alt='education' height={80} width={80} />
                        </div>
                    </div>
                    <div className='flex justify-start flex-row-reverse h-[12rem] w-[82%] mx-auto py-12 mb-12'>
                        <div className='w-[20rem] h-[10rem] rounded-lg bg-violet-500 mt-4   mx-8 relative '>
                            <div className=' absolute left-[-8px] top-8 border-solid border-r-violet-500   border-r-8 border-y-transparent border-y-8 border-l-0 '></div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum placeat soluta expedita.
                        </div>
                        <div className=" w-32 h-32 rounded-full bg-rose-300 border-[10px] border-white flex justify-center items-center ">
                            <Image src={education} alt='education' height={80} width={80} />
                        </div>
                    </div>
                </div>
            </Layout >
        </>
    )
}

export default AboutPage
