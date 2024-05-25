"use client"

import React from "react";
import Image from "next/image";
import education from "@/assets/education.png";
import {
    EducationList,
} from "@/utils/Education";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion"
import Subheading from "@/components/common/Subheading";


const AcademicDetails = () => {
    return (
        <>
            <Subheading subtitle="Academic Details" className="header text-4xl md:text-5xl text-rose-500  capitalize mt-20 mb-10" />
            <div className="w-full max-w-7xl h-full  mx-auto relative pb-20">
                <div className="h-[45rem] w-[10px] bg-white mx-auto absolute max-lg:left-8 lg:left-[50%] -z-10 rounded-full"></div>
                {EducationList.map((item) => {
                    const { date, title, details, isReverse, result } = item;
                    return (
                        <motion.div
                            key={title}
                            className={`flex justify-end min-h-[12rem] lg:w-1/2  pt-12 font-libre  -translate-x-0.5 gap-x-4 ${!isReverse ? " max-lg:flex-row-reverse lg:translate-x-11" : " lg:-translate-x-9 lg:ms-auto  flex-row-reverse"
                                }`}
                        >
                            <motion.div
                                initial={{ x: isReverse ? 50 : -50, y: isReverse ? 50 : -50, opacity: 0 }}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut", type: "spring" }}
                                viewport={{ once: true }}
                                className="w-full  max-w-lg min-h-[8rem] rounded-lg bg-violet-700     relative p-3 sm:px-6 sm:py-4">
                                <div
                                    className={`absolute  top-8 border-solid   border-y-transparent border-y-8 ${!isReverse
                                        ? "lg:reverse_box max-lg:left_arrow  "
                                        : " left_arrow"
                                        }`}
                                ></div>
                                <div className="flex items-center ">
                                    <FaCalendarAlt className={"text-lg sm:text-xl"} />
                                    <span className="text-sm sm:text-base ms-2 sm:ms-4">
                                        {date}
                                    </span>{" "}
                                </div>
                                <h1 className="text-[14px] my-1 sm:my-2 sm:text-lg font-semibold text-yellow-500">
                                    {title}
                                </h1>
                                <h1 className="text-[12px] sm:text-[14px] opacity-75">
                                    {details}
                                </h1>
                                {result &&
                                    <Link target='__blank' href={result}>
                                        <button className='btn btn-success text-sm text-white font-poppins font-normal mt-3'>View Result</button>
                                    </Link>
                                }
                            </motion.div>
                            <div className="min-w-20 w-20 min-h-20 h-20 rounded-full bg-rose-300 border-[5px] border-white flex justify-center items-center ">
                                <Image
                                    src={education}
                                    alt="education"
                                    height={50}
                                    width={50}
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </>
    )
}

export default AcademicDetails
