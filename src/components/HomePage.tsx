import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Photo from "@/assets/photo.jpg";

const HomePage = (): JSX.Element => {
    return (
        <div className="h-auto max-sm:pt-8 sm:h-full flex max-md:flex-col justify-between items-center">
            <div className="md:w-[50%] max-md:h-auto h-full flex flex-col justify-center  items-center max-md:order-2 ">
                <p className="text-center text-sm md:text-2xl font-libre text-yellow-500 max-sm:mt-4">Hello I&apos;m ✋</p>
                    <h1 className="  font-dancing text-5xl sm:text-6xl font-semibold capitalize my-4 text-violet-600">
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
                <div className="flex  my-6 font-libre">
                    <Link href="https://drive.google.com/file/d/1Xp70JqnIYtOft9AHyetlVSFW8QtG9g-5/view?usp=sharing">
                        <button className=" text-lg sm:text-xl border-2 px-6 py-2 sm:py-3 cursor-pointer me-4">
                            Resume
                        </button>
                    </Link>
                    <Link href="/about">
                        <button className=" text-lg sm:text-xl border-2 px-6 py-2 sm:py-3 cursor-pointer">
                            About me
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-[70%] md:w-[50%] h-full flex flex-col  justify-center items-center max-md:order-1 ">
                <Image src={Photo} alt="" width={400} height={300} className='w-[16rem] h-[23rem] rounded-lg object-cover' />
            </div>
        </div>
    )
}

export default HomePage