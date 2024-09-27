"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import {
    FaGithub,
    FaInstagram,
    FaSquareFacebook,
    FaTwitter,
} from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { NavItemList } from "@/utils/NavItems";
import Image from "next/image";

const Navbar = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <div
                className={`w-full h-20 z-[9] flex justify-between items-center px-4 sm:px-12 bg-[#1C2434]  shadow-md shadow-[#3a3a3a]  transition-all ease-in-out duration-300"}`}
            >
                <Link href={"/"} className="z-[99]">
                    <Image
                        src="/logo.png"
                        width={150}
                        height={80}
                        alt="logo"
                        className="h-20 w-auto object-contain cursor-pointer z-[99999]"
                    />
                </Link>
                <div className="md:hidden z-[99]">
                    <FiMenu size={30} onClick={() => setOpen(true)} />
                </div>
                <ul className="flex uppercase max-md:hidden z-[99999]">
                    {NavItemList.map((item, index) => (
                        <li
                            key={index}
                            className="cursor-pointer font-medium mx-3 max-lg:text-sm relative group"
                        >
                            <Link
                                href={item.path}
                                className={
                                    pathname == item.path
                                        ? "text-white"
                                        : "opacity-60 hover:opacity-100"
                                }
                            >
                                {item.name}
                            </Link>
                            <div className="absolute w-0 h-[2px] bg-white group-hover:w-full transition-[width] ease-out duration-300" />
                        </li>
                    ))}
                </ul>
            </div>
            {/* {open && (
                <div className="w-full h-full bg-gray-400/50 uppercase md:hidden fixed top-0  z-50 transition-all ease-linear duration-500">
                    <div
                        className={`w-4/5  h-full  gradient uppercase  fixed top-0  z-50  flex justify-center items-center ${open
                                ? "left-0  transition-all ease-linear duration-500 "
                                : "-left-[100%]  transition-all ease-linear duration-500"
                            } `}
                    >
                        <div className="w-[98%] h-[99%] bg-gray-800/80 p-6   ">
                            <div className="float-right translate-x-4 -translate-y-4">
                                <RxCross2 size={30} onClick={() => setOpen(false)} />
                            </div>
                            <h1 className="mt-6 text-start font-dancing text-2xl">
                                Swadesh pal
                            </h1>
                            <ul className="h-[20rem] mx-auto pt-12">
                                {NavItemList.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`cursor-pointer  font-libre my-3 text- ${pathname === item.path && "text-green-500"
                                            } `}
                                    >
                                        <Link
                                            href={item.path}
                                            className="flex items-center gap-x-2"
                                            onClick={() => setOpen(false)}
                                        >
                                            {item.icon} {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="w-4/5 mx-auto mt-8">
                                <h1 className="text-sm text-center mb-2">follow me on</h1>
                                <div className="w-full flex justify-between">
                                    <div className="mx-2 cursor-pointer text-blue-400">
                                        <Link href={"https://github.com/Swadeshit27"}>
                                            {" "}
                                            <FaGithub size={25} />
                                        </Link>
                                    </div>
                                    <div className="mx-2 cursor-pointer text-blue-600">
                                        <Link href={"https://www.linkedin.com/in/swadesh-pal/"}>
                                            {" "}
                                            <BsLinkedin size={25} />
                                        </Link>
                                    </div>
                                    <div className="mx-2 cursor-pointer text-blue-500">
                                        <Link href={""}>
                                            {" "}
                                            <FaSquareFacebook size={25} />
                                        </Link>
                                    </div>
                                    <div className="mx-2 cursor-pointer text-rose-400">
                                        <Link href={"https://www.instagram.com/_swadesh_pal"}>
                                            {" "}
                                            <FaInstagram size={25} />
                                        </Link>
                                    </div>
                                    <div className="mx-2 cursor-pointer text-blue-400">
                                        <Link href={"https://twitter.com/Swadesh_Pal27"}>
                                            {" "}
                                            <FaTwitter size={25} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
            <div
                className={`drawer z-[9999] ${open ? "  drawer-open" : ""}`}
            >
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                    checked={open}
                    readOnly
                />
                <div className="drawer-side w-full max-w-sm">
                    <div
                        className={`menu p-6 w-4/5 h-full bg-[#1C2434]  transition-all ease-linear duration-500 flex justify-center items-center`}
                    >
                        <div className="w-full h-full">
                            {/* Close Icon */}
                            <div className="float-right translate-x-4 -translate-y-4">
                                <RxCross2 size={30} onClick={() => setOpen(false)} />
                            </div>
                            <Link
                                href={"/"}
                                className="z-[99] w-48 mx-auto"
                                onClick={() => setOpen(false)}
                            >
                                <Image
                                    src="/logo.png"
                                    width={150}
                                    height={80}
                                    alt="logo"
                                    className="h-auto w-48 mx-auto object-contain cursor-pointer z-[99999]"
                                />
                            </Link>

                            {/* <h1 className="mt-6 text-start font-dancing text-2xl">
                                Swadesh pal
                            </h1> */}

                            {/* Navigation Items */}
                            <ul className="min-h-[20rem] mx-auto pt-6">
                                {NavItemList.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`cursor-pointer my-1.5 ${pathname === item.path ? "text-green-500" : "text-white"}`}
                                    >
                                        <Link href={item.path}>
                                            <span
                                                className="flex items-center gap-x-2 text-base capitalize"
                                                onClick={() => setOpen(false)}
                                            >
                                                {item.icon} {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Social Media Links */}
                            <div className="w-4/5 mx-auto mt-8">
                                <h1 className="text-sm text-center mb-0.5">Follow me on</h1>
                                <div className="flex justify-between">
                                    <Link href={"https://github.com/Swadeshit27"}>
                                        <span className="mx-2 cursor-pointer text-blue-400">
                                            <FaGithub size={25} />
                                        </span>
                                    </Link>
                                    <Link href={"https://www.linkedin.com/in/swadesh-pal/"}>
                                        <span className="mx-2 cursor-pointer text-blue-600">
                                            <BsLinkedin size={25} />
                                        </span>
                                    </Link>
                                    <Link href={""}>
                                        <span className="mx-2 cursor-pointer text-blue-500">
                                            <FaSquareFacebook size={25} />
                                        </span>
                                    </Link>
                                    <Link href={"https://www.instagram.com/_swadesh_pal"}>
                                        <span className="mx-2 cursor-pointer text-rose-400">
                                            <FaInstagram size={25} />
                                        </span>
                                    </Link>
                                    <Link href={"https://twitter.com/Swadesh_Pal27"}>
                                        <span className="mx-2 cursor-pointer text-blue-400">
                                            <FaTwitter size={25} />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
