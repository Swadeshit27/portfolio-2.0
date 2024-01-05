"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaGithub, FaInstagram, FaSquareFacebook, FaTwitter } from 'react-icons/fa6'
import { BsLinkedin } from 'react-icons/bs'
import { NavItemList } from '@/data/NavItems';

const Navbar = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");
    return (
        <>
            <div className={`w-full h-20  fixed z-50 top-0 backdrop-blur-md flex justify-between items-center px-4 sm:px-12 shadow-md shadow-[#3a3a3a]`}>
                <Link href={"/"}>
                    <h1 className=' cursor-pointer font-dancing text-3xl capitalize'>swadesh pal</h1>
                </Link>
                <div className='md:hidden'>
                    <FiMenu size={30} onClick={() => setOpen(true)} />
                </div>
                <ul className='flex uppercase max-md:hidden'>
                    {NavItemList.map((item, index) => (
                        <li key={index} className='cursor-pointer mx-3 max-lg:text-sm font-libre relative group'>
                            <Link href={item.path} className={active == item.name ? "text-white" : "opacity-60 hover:opacity-100"} onClick={e => setActive(item.name)}>{item.name}</Link>
                            <div className="absolute w-0 h-[2px] bg-white group-hover:w-full transition-[width] ease-out duration-300" />
                        </li>
                    ))}
                </ul>
            </div>
            {/* *********************************** Responsive Navbar logic ************************************** */}
            {open && <div className='w-full h-full bg-gray-400/80 uppercase md:hidden fixed top-0  z-50'>
                <div className='w-4/5  h-full  gradient uppercase md:hidden fixed top-0  z-50  flex justify-center items-center '>
                    <div className='w-[98%] h-[99%] bg-black/50 p-4 rounded-md '>
                        <div className='float-right'>
                            <RxCross2 size={30} onClick={() => setOpen(false)} />
                        </div>
                        <h1 className='mt-12 text-center font-dancing text-2xl'>Swadesh pal</h1>
                        <ul className='w-2/5 h-[20rem] mx-auto pt-20'>
                            {NavItemList.map((item, index) => (
                                <li key={index} className='cursor-pointer  font-libre my-3 text-lg group'>
                                    <Link href={item.path} onClick={() => setOpen(false)}>{item.name}</Link>
                                    <div className=" absolute w-0 h-[3px] bg-white group-hover:w-full transition-[width] ease-out duration-300" />
                                </li>
                            ))}
                        </ul>
                        <div className='w-4/5 mx-auto mt-8'>
                            <h1 className='text-sm text-center mb-2'>follow me on</h1>
                            <div className="w-full flex justify-between" >
                                <div className="mx-2 cursor-pointer text-blue-400"><Link href={"https://github.com/Swadeshit27"}> <FaGithub size={25} /></Link></div>
                                <div className="mx-2 cursor-pointer text-blue-600"><Link href={"https://www.linkedin.com/in/swadesh-pal/"}> <BsLinkedin size={25} /></Link></div>
                                <div className="mx-2 cursor-pointer text-blue-500"><Link href={""}> <FaSquareFacebook size={25} /></Link></div>
                                <div className="mx-2 cursor-pointer text-rose-400"><Link href={"https://www.instagram.com/_swadesh_pal"}> <FaInstagram size={25} /></Link></div>
                                <div className="mx-2 cursor-pointer text-blue-400"><Link href={"https://twitter.com/Swadesh_Pal27"}> <FaTwitter size={25} /></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Navbar