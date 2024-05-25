"use client"
import { AnimationData } from "@/utils/animation"
import { motion } from "framer-motion"

const Layout = ({ children, title }: { title?: string, children: React.ReactNode }): JSX.Element => {
    return (
        <div className={`w-full p-4 sm:px-8 max-w-screen-xl max-md:h-auto min-h-screen ${title? "pt-8":"pt-24"} mx-auto relative`}>
            {title && <motion.h1
                {...AnimationData.popUp}
                className='header'>{title}</motion.h1>}
            {children}
        </div>
    )
}

export default Layout
