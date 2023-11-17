"use client"
import { navItemsType } from '@/data/types'
import { Colors } from '@/data/Color'
import Link from 'next/link'
import React, { useState } from 'react'
import navItems from '@/data/NavItems.json'
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaGithub, FaInstagram, FaSquareFacebook, FaTwitter } from 'react-icons/fa6'
import { BsLinkedin } from 'react-icons/bs'
import { FaHome } from "react-icons/fa";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { motion } from 'framer-motion'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>

            <div className={`w-full h-20 ${Colors.navbarBgColor} fixed z-40 top-0 backdrop-blur-md flex justify-between items-center px-4 sm:px-12 shadow-md shadow-[#3a3a3a]`}>
                <div className="logo">
                    <h1 className='font-dancing text-3xl capitalize'>swadesh pal</h1>
                </div>
                <div className='md:hidden'>
                    <FiMenu size={30} onClick={() => setOpen(true)} />
                </div>
                <ul className='flex uppercase max-md:hidden'>
                    {navItems.map((item: navItemsType, index) => (
                        <motion.li initial={{borderBottomWidth:0}} whileHover={{borderBottom:100}} key={index} className='cursor-pointer mx-3 font-libre border-b-4'>
                            <Link href={item.path}>{item.name}</Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
            {open && <div className='w-full h-full bg-gray-400/80 uppercase md:hidden fixed top-0  z-50'>
                <div className='w-4/5  h-full  bg-gradient-to-bl from-violet-400 via-blue-400 to-rose-500 uppercase md:hidden fixed top-0  z-50  flex justify-center items-center '>
                    <div className='w-[98%] h-[99%] bg-black/50 p-4 rounded-md '>
                        <div className='float-right'>
                            <RxCross2 size={30} onClick={() => setOpen(false)} />
                        </div>
                        <h1 className='mt-12 text-center font-dancing text-2xl'>Swadesh pal</h1>
                        <ul className='w-2/5 h-[20rem] mx-auto pt-20'>
                            {navItems.map((item: navItemsType, index) => (
                                <li key={index} className='cursor-pointer  font-libre my-2 text-sm'>
                                    <Link href={item.path} onClick={() => setOpen(false)}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className='w-4/5 mx-auto mt-8'>
                            <h1 className='text-sm text-center mb-2'>follow me on</h1>
                            <div className="w-full flex justify-between" >
                                <div className="my-2 cursor-pointer text-blue-400"><FaGithub size={30} /></div>
                                <div className="my-2 cursor-pointer text-blue-600"><BsLinkedin size={30} /></div>
                                <div className="my-2 cursor-pointer text-blue-500"><FaSquareFacebook size={30} /></div>
                                <div className="my-2 cursor-pointer text-rose-400"><FaInstagram size={30} /></div>
                                <div className="my-2 cursor-pointer text-blue-400"><FaTwitter size={30} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Navbar