"use client";
import Image from "next/image";
import Link from "next/link";
import coding from "@/assets/coding.png";
import { Typewriter } from "react-simple-typewriter";
import Review from "@/components/Review";
import Layout from "@/components/Layout";
import About from "@/components/About";
import Skills from "./skills/page";
import Contact from "./contact/page";
import { motion } from "framer-motion";
import { FaSquareFacebook, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa6"
import { AiFillInstagram } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="h-[90vh] flex max-md:flex-col justify-between items-center">
          <div className=" md:w-[50%] max-md:h-auto h-full flex flex-col justify-center  items-center max-md:order-2 ">
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2 * 0.5, duration: 0.6, ease: 'easeOut' }}
              className="text-center text-sm md:text-2xl font-libre text-yellow-500">Hello I&apos;m ✋</motion.p>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 3 * 0.5, duration: 0.6, ease: 'easeOut' }}
              className="font-dancing text-5xl sm:text-6xl font-semibold capitalize my-4 text-violet-600">
              swadesh pal
            </motion.h1>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 4 * 0.5, duration: 0.6, ease: 'easeOut' }}
              className="text-center text-lg sm:text-2xl font-medium font-libre text-green-500">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={40}
                loop={0}
                typeSpeed={100}
                words={["Full Stack MERN Developer", "DSA With C++"]}
              />

            </motion.p>
            <div className="flex  my-6 font-libre">
              <Link href="">
                <button className=" text-lg sm:text-xl border-2 px-6 py-2 sm:py-3 cursor-pointer me-4">
                  Resume
                </button>
              </Link>
              <Link href="">
                <button className=" text-lg sm:text-xl border-2 px-6 py-2 sm:py-3 cursor-pointer">
                  Hire me
                </button>
              </Link>
            </div>
          </div>
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ ease: "easeOut", delay: 0.8, duration: 5, repeat: Infinity }}
            className=" md:w-[50%] h-full flex flex-col  justify-center items-center max-md:order-1 "
          >
            <Image src={coding} alt="" width={400} height={400} />
          </motion.div>
        </div>
      </Layout>
      <About />
      <Skills />
      <Review />
      {/*social icons  */}
      <div className="max-md:hidden w-16 bg-[#0000002d] shadow-md shadow-gray-600 backdrop-blur-md fixed top-[16rem] right-[1rem] z-99 flex flex-col items-center py-4 rounded-md" >
        <motion.div whileHover={{ scale: 1.1 }} className="my-2 cursor-pointer text-blue-400"><FaGithub size={30} /></motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="my-2 cursor-pointer text-blue-600"><BsLinkedin size={30} /></motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="my-2 cursor-pointer text-blue-500"><FaSquareFacebook size={30} /></motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="my-2 cursor-pointer text-rose-400"><FaInstagram size={30} /></motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="my-2 cursor-pointer text-blue-400"><FaTwitter size={30} /></motion.div>
      </div>
      
    </>
  );
} 
