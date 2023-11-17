"use client"
import Header from '@/components/Header'
import React from 'react'
import skills from "@/data/Skills.json"
import Image from 'next/image'
import { motion } from "framer-motion"
import { useState } from "react"


const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState("web");
    return (
        <>
            <div className='w-full max-w-[1300px] min-h-screen pt-24 mx-auto '>
                <Header title='skills' />
                <div className="w-[20rem] sm:w-[30rem] mx-auto px-1 sm:px-2  my-8 flex justify-evenly bg-gray-800/50 rounded-full backdrop-blur-md shadow-sm shadow-gray-500">
                    <div className='w-[33%]  activeBtn py-2 rounded-full text-center text-sm  sm:text-xl font-libre  capitalize cursor-pointer my-1 sm:my-2' onClick={e => setSelectedSkill("web")} >Web dev</div>
                    <div className='w-[33%]  py-2 rounded-full text-center  text-sm  sm:text-xl  font-libre opacity-75 capitalize cursor-pointer my-1 sm:my-2' onClick={e => setSelectedSkill("tools&languages")}>tools </div>
                    <div className='w-[33%] py-2 rounded-full text-center text-sm  sm:text-xl  font-libre opacity-75 capitalize cursor-pointer my-1 sm:my-2' onClick={e => setSelectedSkill("softSkills")}>soft skills</div>
                </div>
                {/* <div className="w-full flex justify-between"> */}
                <div className='w-full flex flex-wrap  px-2 '>
                        {
                            skills.filter(value => value.category === selectedSkill)?.map((item, i) => {
                                return (
                                    <motion.div custom={i}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        animate="visible"
                                        transition={{
                                            delay: i * 0.3,
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        }}
                                        key={i} >
                                        <div className="w-24 min-w-24 h-24 min-h-24 sm:w-36 sm:min-w-36 sm:h-36 sm:min-h-36 rounded-md bg-gradient-to-bl from-rose-500 via-blue-300 to-violet-500 sm:m-4 m-2 flex justify-center items-center">
                                            <div className="w-[99%] min-w-[99%] h-[99%] min-h-[99%] bg-black/80 backdrop-blur-lg rounded-md flex flex-col justify-center items-center p-4">
                                                <Image src={item.icon} alt='html' width={100} height={100} className=' w-12 h-12 sm:w-16 sm:h-16' />
                                                <h1 className=' text-[10px] sm:text-sm font-libre  uppercase opacity-75 text-center mt-2'>{item.name}</h1>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Skills
