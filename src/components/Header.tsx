"use client"
import React from 'react'
import { motion } from "framer-motion"

const Header = ({ title }:{ title: string }) => {
    return (
        <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{delay:0.3, duration: 0.5, easing: 'easeOut'}}
            className=' text-center font-semibold font-dancing text-5xl  md:text-6xl capitalize my-3 md:mt-6 md:mb-10'>{title}</motion.h1>
    )
}

export default Header