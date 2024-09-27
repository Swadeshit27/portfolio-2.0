"use client";

import Image from "next/image";
import React, { FC } from "react";
import Subheading from "../common/Subheading";
import { motion } from "framer-motion";
import fileService from "@/appwrite/file";

type Props = {
    heading: string;
    category: string;
    skills: SkillProps[];
};

const SkillsIcons: FC<Props> = ({ heading, category, skills }) => {
    return (
        <>
            {skills &&
                skills.filter((ele) => ele.category === category).length > 0 && (
                    <div className="w-full">
                        <Subheading
                            subtitle={heading}
                            className="font-medium capitalize   text-start mb-4 "
                        />
                        <div className="w-full grid grid-cols-5 xs:grid-cols-7 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                            {skills &&
                                skills
                                    .filter((ele) => ele.category === category)
                                    .map((item, i) => (
                                        <motion.div
                                            initial={{ opacity: 0, translateX: 10, translateY: 10 }}
                                            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                                            transition={{ duration: 1.2, delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            className="tooltip tooltip-warning text-white capitalize "
                                            data-tip={item.name}
                                            key={Math.random()}
                                        >
                                            <div className="w-14 min-w-14 h-14 min-h-14 sm:w-14 sm:min-w-14 sm:h-14 sm:min-h-14 rounded-md gradient  flex justify-center items-center cursor-pointer">
                                                <div className="w-[3.4rem] min-w-[3.4rem] h-[3.4rem] min-h-[3.4rem] bg-black/80 backdrop-blur-lg rounded-md flex flex-col justify-center items-center p-2">
                                                    <Image
                                                        src={String(fileService.getFilePreview(item.icon))}
                                                        alt={item.name}
                                                        width={100}
                                                        height={100}
                                                        className=" w-12 h-12 sm:w-full sm:h-full object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                        </div>
                    </div>
                )}
        </>
    );
};

export default SkillsIcons;
