"use client"
import React from 'react'
import { motion } from "framer-motion"

const Header = ({ title }: { title: string }): JSX.Element => {
    return (
        <motion.h1 className='text-rose-500 text-center font-semibold font-dancing text-5xl  md:text-6xl capitalize my-3 md:mt-6 md:mb-10'>{title}</motion.h1>
    )
}

export default Header