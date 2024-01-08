"use client"
import { LayoutHeaderVariant } from "@/utils/Variants"
import { motion } from "framer-motion"
const Layout = ({ children, title }: { title: string, children: React.ReactNode }): JSX.Element => {
    return (
        <motion.div className='w-full p-4 sm:p-8 max-w-[1200px] max-md:h-auto h-auto pt-4 mx-auto relative'>
            <motion.h1
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{  type: 'spring', duration: 0.5 }}
                className='text-rose-500 text-center font-semibold font-dancing text-5xl  md:text-6xl capitalize my-3 md:mt-6 md:mb-10'>{title}</motion.h1>
            {children}
        </motion.div>
    )
}

export default Layout
