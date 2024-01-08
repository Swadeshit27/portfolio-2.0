import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Photo from "@/assets/photo.jpg";
import { motion } from "framer-motion"
import { homeChildVariant, homeImgVariant, homePageVariant } from '@/utils/Variants';

const HomePage = (): JSX.Element => {
    return (
        <div className="h-auto max-sm:pt-8 md:h-full flex max-md:flex-col justify-between items-center">
            <motion.div initial={"hidden"} animate={"visible"} variants={homePageVariant} className="md:w-[50%] max-md:h-auto h-full flex flex-col justify-center  items-center max-md:order-2 ">
                <motion.p variants={homeChildVariant} className="text-center text-sm md:text-2xl font-libre text-yellow-500 max-sm:mt-4">Hello I&apos;m ✋</motion.p>
                <motion.h1 variants={homeChildVariant} className="font-dancing text-5xl sm:text-6xl font-semibold capitalize my-4 text-violet-600">
                    swadesh pal
                </motion.h1>
                <motion.p variants={homeChildVariant} className="text-center text-lg sm:text-2xl font-medium font-libre text-green-500">
                    <Typewriter
                        cursor
                        cursorBlinking
                        delaySpeed={1000}
                        deleteSpeed={40}
                        loop={0}
                        typeSpeed={100}
                        words={["Full Stack MERN Developer", "DSA With C++", "React Native Developer"]}
                    />
                </motion.p>
                <div className='flex gap-x-8 my-6 font-libre'>
                    <Link href={"https://drive.google.com/file/d/1Xp70JqnIYtOft9AHyetlVSFW8QtG9g-5/view?usp=sharing"}>
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className='filledBtn'>Resume</motion.div>
                    </Link>
                    <Link href={"/contact"}>
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className='outlinedBtn'>Hire Me</motion.div>
                    </Link>
                </div>
            </motion.div>
            <motion.div initial={"hidden"} animate={"visible"} variants={homeImgVariant} className="w-[70%] md:w-[50%] h-full flex flex-col  justify-center items-center max-md:order-1 ">
                <Image src={Photo} alt="" width={400} height={300} className='w-[16rem] h-[23rem] rounded-lg object-cover' />
            </motion.div>
        </div>
    )
}

export default HomePage