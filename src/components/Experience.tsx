import React from 'react'
import Layout from './Layout'
import { FaCalendarAlt } from "react-icons/fa";
import { ExperienceList } from '@/data/Experience';
import { motion } from "framer-motion"


const Experience = (): JSX.Element => {
    return (
        <Layout title='Experience'>
            <div className='w-full md:w-[80%] lg:w-[60%]  mx-auto relative'>
                <div className='w-[10px] h-[52rem] sm:h-[65rem] absolute  left-[10px] bg-rose-300 rounded-full'></div>
                {
                    ExperienceList.map((item,i) => (
                        <div className='w-full flex gap-x-2 py-4 sm:py-8' key={i}>
                            <motion.div  className='mt-4 w-8 h-8 border-2 border-rose-500 relative after:absolute after:contents-[""] after:h-4 after:w-4 after:left-[50%] after:top-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-full after:bg-rose-500 bg-gray-900 rounded-full max-sm:mt-1 me-2'></motion.div>
                            <motion.div initial={{ x: 1000, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: (i+1)* 0.4 }} className='w-[90%] md:w-[80%] font-libre p-3 sm:p-6 bg-violet-800 rounded-md relative'>
                                <div className={`absolute top-3 sm:top-[25px] border-solid border-y-transparent border-y-8 left-[-8px]  border-r-violet-800 border-r-8  border-l-0}`}></div>
                                <div className='flex items-center'>
                                    <FaCalendarAlt />
                                    <h1 className='ms-3 max-sm:text-sm opacity-80'>{item.date}</h1>
                                </div>
                                <h1 className='text-xl md:text-2xl font-medium text-green-400 my-1'>{item.CompName}</h1>
                                <h1 className='text-sm sm:text-[16px] mb-2 opacity-80'>{item.role}</h1>
                                <ul className='opacity-75 ms-6 list-disc max-sm:text-[12px]'>
                                    <li>{item.details}</li>
                                </ul>
                            </motion.div>
                        </div>
                    ))
                }
            </div>
            {/* <div className="w-[90%] md:w-4/5 lg:w-3/5 mx-auto font-libre mb-12">
                <div className='flex sm:items-center'>
                    <div className='w-4 h-4 bg-violet-700 rounded-full max-sm:mt-1 me-2'></div>
                    <div className='flex max-sm:flex-col gap-x-12 items-center '>
                        <h1 className='text-xl md:text-2xl font-medium text-green-500 max-sm:mb-2'>BasketHunt Pvt. Ltd</h1>
                        <div className='flex items-center max-sm:mb-2'>
                            <FaCalendarAlt />
                            <h1 className='ms-3 max-sm:text-sm opacity-75'>Aug. 2023 - Sept. 2023</h1>
                        </div>
                    </div>
                </div>
                <div className='ms-6'>
                    <h1 className='text-sm sm:text-lg text-blue-500 my-2'>IT & Web Development Intern</h1>
                    <ul className='opacity-75 ms-8 list-disc max-sm:text-[12px]'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laborum.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laborum.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laborum.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laborum.</li>
                    </ul>
                </div>
            </div> */}
        </Layout>
    )
}

export default Experience
