"use client"

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { AnimationData } from '@/utils/animation'

const HireResumeBtn = () => {
    return (
        <>
            <div className="flex gap-x-8 my-6 font-libre">
                <Link
                    target="__blank"
                    href={
                        "https://cloud.appwrite.io/v1/storage/buckets/66241b72624e71cbcd6a/files/663621800028f75b7460/view?project=662415d3bdf8f8d8078b&mode=admin"
                    }
                >
                    <motion.button
                        {...AnimationData.zoomInOut}
                        className="filledBtn"
                    >
                        Resume
                    </motion.button>
                </Link>
                <Link href={"/contact"}>
                    <motion.button
                        {...AnimationData.zoomInOut}
                        className="outlinedBtn"
                    >
                        Hire Me
                    </motion.button>
                </Link>
            </div>
        </>
    )
}

export default HireResumeBtn
