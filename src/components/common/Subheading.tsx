"use client"

import React from 'react'
import { motion } from "framer-motion"
import { AnimationData } from '@/utils/animation'

const Subheading = ({ subtitle, className }: { subtitle: string, className?: string }) => {
    return (
        <>
            <motion.h1 {...AnimationData.lightPopUp} className={`header text-2xl xs:text-3xl md:text-4xl font-semibold text-green-500 ${className}`} >{subtitle}</motion.h1>
        </>
    )
}

export default Subheading
