"use client"

import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'
import { motion } from "framer-motion"

const ScrollToTopBtn = () => {
    const bottomToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <button
                onClick={bottomToTop}
                className='btn w-12 h-12 z-40 rounded-full border-none hover:bg-rose-500  bg-rose-600 text-white fixed bottom-8 right-2'
            >
                <motion.div
                    animate={{ y: [-3, 0, 3, 0, -3] }}
                    transition={{ duration: 2, easings: ["easeIn", "easeOut"], repeat: Infinity }} 
                > 
                    <FaArrowUpLong size={18} />
                </motion.div>
            </button>
        </>
    )
}

export default ScrollToTopBtn
