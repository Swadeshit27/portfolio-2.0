import React from 'react'
import { motion } from "framer-motion"
import { FaGithub, FaInstagram, FaSquareFacebook, FaTwitter } from 'react-icons/fa6'
import { BsLinkedin } from 'react-icons/bs'

const SocialIcons = (): JSX.Element => {
    return (
        <>
            <div className="max-md:hidden w-16 bg-[#0000002d] shadow-md shadow-gray-600 backdrop-blur-md fixed top-[20%] right-[1rem] z-99 flex flex-col items-center py-4 rounded-md" >
                <motion.div whileHover={{ scale: 1.1 }} className="my-2 cursor-pointer text-blue-400"><FaGithub size={30} /></motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="my-2 cursor-pointer text-blue-600"><BsLinkedin size={30} /></motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="my-2 cursor-pointer text-blue-500"><FaSquareFacebook size={30} /></motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="my-2 cursor-pointer text-rose-400"><FaInstagram size={30} /></motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="my-2 cursor-pointer text-blue-400"><FaTwitter size={30} /></motion.div>
            </div>
        </>
    )
}

export default SocialIcons
