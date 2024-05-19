"use client"

import { SkillsList } from '@/utils/Skills'
import Image from 'next/image'
import React from 'react'
import Subheading from '../common/Subheading'
import { motion } from 'framer-motion'

type Props = {
    heading: string,
    category: string,
}

const SkillsIcons = (props: Props): JSX.Element => {
    return (
        <div className="w-full">
            <Subheading subtitle={props.heading} className='font-medium capitalize   text-start mb-4 ' />
            <div className="w-full grid grid-cols-5 xs:grid-cols-7 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                {SkillsList.filter((ele) => ele.category === props.category).map(
                    (item, i) => (
                        <motion.div
                            initial={{ opacity: 0, translateX: 10, translateY: 10 }}
                            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="tooltip tooltip-warning text-white capitalize " data-tip={item.name}
                            key={item.name}
                        >
                            <div className="w-14 min-w-14 h-14 min-h-14 sm:w-14 sm:min-w-14 sm:h-14 sm:min-h-14 rounded-md gradient  flex justify-center items-center cursor-pointer">
                                <div className="w-[3.4rem] min-w-[3.4rem] h-[3.4rem] min-h-[3.4rem] bg-black/80 backdrop-blur-lg rounded-md flex flex-col justify-center items-center p-2">
                                    <Image
                                        src={item.icon!}
                                        alt={item.name}
                                        width={100}
                                        height={100}
                                        className=" w-12 h-12 sm:w-full sm:h-full object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )
                )}
            </div>
        </div>
    )
}

export default SkillsIcons