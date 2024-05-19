"use client"

import { AnimationData } from "@/utils/animation";
import { motion } from "framer-motion"
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

const ExperienceCard: React.FC<ExperienceListType> = ({ date, role, CompName, category, certificate, LOR, offerLatter, details }) => {
    return (
        <div className='w-full flex gap-x-2 py-4 sm:py-8'>
            <div className='mt-4 min-w-[2rem] w-8 h-8 border-2 border-rose-500 relative after:absolute after:contents-[""] after:h-4 after:w-4 after:left-[50%] after:top-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-full after:bg-rose-500 bg-gray-900 rounded-full max-sm:mt-1 me-2'></div>
            <motion.div 
                {...AnimationData.slideRightBottom}
                className='w-full font-libre p-3 sm:p-6 bg-violet-800 rounded-md relative'
            >
                <div className={`absolute top-3 sm:top-[25px] border-solid border-y-transparent border-y-8 left-[-8px]  border-r-violet-800 border-r-8  border-l-0}`}></div>
                <div className='flex items-center  '>
                    <FaCalendarAlt />
                    <h1 className='ms-3 max-sm:text-sm opacity-80'>{date}</h1>
                </div>
                <h1 className='xs:text-lg md:text-xl font-semibold  tracking-wider text-yellow-400 my-2'>{CompName}</h1>
                <h1 className='text-sm sm:text-[16px] mb-2 capitalize '>{role}</h1>
                <ul className='opacity-75 text-sm   max-xs:text-xs '>
                    <li>{details}</li>
                </ul>
                <div className='space-x-8 mt-3'>
                    {offerLatter &&
                        <Link target='__blank' href={offerLatter}>
                            <button className='btn btn-success xs:text-sm text-white font-poppins font-normal'>Offer Letter</button>
                        </Link>
                    }
                    {certificate &&
                        <Link target='__blank' href={certificate}>
                            <button className='btn btn-success text-sm text-white font-poppins font-normal'>Certificate</button>
                        </Link>
                    }
                </div>
            </motion.div>
        </div>
    )
}

export default ExperienceCard;