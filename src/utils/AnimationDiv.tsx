"use client"

import React from 'react'
import { motion } from "framer-motion"
import { AnimationData } from './animation'

export const SlideUpAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      {...AnimationData.slideUp}
    >
      {children}
    </motion.div >
  )
} 
