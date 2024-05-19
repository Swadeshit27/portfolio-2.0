"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Photo2 from "@/assets/photo2.png";
import { motion } from "framer-motion"
import { AnimationData } from '@/utils/animation';

const HomePage = (): JSX.Element => {
    return (
        <div className="h-auto max-md:pt-24 md:h-screen flex max-md:flex-col justify-between items-center">
            <motion.div {...AnimationData.slideUp} className="md:w-[50%] max-md:h-auto h-full flex flex-col justify-center  items-center max-md:order-2  max-md:pt-8">
                <p className="text-center text-sm md:text-2xl font-libre text-yellow-500 max-sm:mt-4">Hello I&apos;m ✋</p>
                <h1 className="font-dancing text-5xl sm:text-6xl font-semibold capitalize my-4 text-violet-600">
                    swadesh pal
                </h1>
                <p className="text-center text-lg sm:text-2xl font-medium font-libre text-green-500">
                    <Typewriter
                        cursor
                        cursorBlinking
                        delaySpeed={1000}
                        deleteSpeed={40}
                        loop={0}
                        typeSpeed={100}
                        words={["Full Stack MERN Developer", "DSA With C++", "React Native Developer"]}
                    />
                </p>
                <div className='flex gap-x-8 my-6 font-libre'>
                    <Link target='__blank' href={"https://cloud.appwrite.io/v1/storage/buckets/66241b72624e71cbcd6a/files/66435eeb002084a85efa/view?project=662415d3bdf8f8d8078b&mode=admin"}>
                        <motion.button {...AnimationData.zoomInOut} className='filledBtn'>Resume</motion.button>
                    </Link>
                    <Link href={"/contact"}>
                        <motion.button {...AnimationData.zoomInOut} className='outlinedBtn'>Hire Me</motion.button>
                    </Link>
                </div>
            </motion.div>
            <motion.div  {...AnimationData.lightPopUp} className="w-[70%] md:w-[50%] h-full flex flex-col  justify-center items-center max-md:order-1 ">
                <div className='border-custom w-[300px] sm:w-[350px] h-[300px]  sm:h-[350px] overflow-hidden'>
                    <Image src={Photo2} alt="photo" width={400} height={300} className='w-[25rem]   rounded-lg object-contain translate-y-4' />
                </div>
            </motion.div>
        </div>
    )
}

export default HomePage