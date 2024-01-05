"use client"
import React from 'react'
import Header from '@/components/Header'
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot, FaWhatsapp, FaTelegram } from "react-icons/fa6";
import Layout from '@/components/Layout';
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
    return (
        <>
            <Layout>
                <Header title='Contact me' />
                <div className='w-full font-libre p-4'>
                    <h3 className="text-2xl sm:text-3xl font-medium text-green-500 tracking-wide">
                        Get in touch
                    </h3>
                    <p className="text-sm sm:text-lg opacity-70">
                        I am available for any freelance or internship or full-time positions
                    </p>
                    <p className=" text-sm sm:text-lg opacity-80">Connect me and let&apos;s talk</p>
                </div>
                <div className="w-full flex max-md:flex-col mt-4 mb-12 p-4">
                    <div className="md:w-2/5 max-md:mb-6 md:pe-8">
                        <div className="w-full h-[26rem] rounded-md bg-gradient-to-bl gradient flex justify-center items-center">
                            <div className='w-[99%] h-[99%] bg-black/80 backdrop-blur-lg rounded-md  p-4'>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6823.133238509599!2d87.30504014128167!3d23.112309916443614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7912fa05d3e89%3A0x4c195efefee44206!2sAbantika%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1691076822802!5m2!1sen!2sin"
                                    className=" object-fill w-full h-[210px] rounded-md"
                                    loading="lazy"
                                ></iframe>
                                <div className=" text-base text-white mt-6">
                                    <h4 className=" flex  items-center gap-4 my-3">
                                        <FaLocationDot size={22} color="#ff4d4d" />
                                        Abantika
                                    </h4>
                                    <h4 className=" flex  items-center gap-4 my-3">
                                        <FaTelegram size={22} color="0088cc" />
                                        @Pal6378
                                    </h4>
                                    <h4 className=" flex  items-center gap-4 my-3">
                                        <FaWhatsapp size={22} color="#1aff66" />
                                        +91{" "}8436893969
                                    </h4>
                                    <h4 className=" flex  items-center gap-4 my-3">
                                        <HiOutlineMail size={22} color="#3385ff" />
                                        swadeshpal2002@gmail.com
                                    </h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="md:w-3/5 md:px-8">
                        <div className="w-full h-[26rem] rounded-md bg-gradient-to-bl gradient flex justify-center items-center">
                            <div className='w-[99.5%] h-[99%] bg-black/80 backdrop-blur-lg rounded-md  p-4 sm:p-8'>
                                <form>
                                    <input type="text" placeholder='your name' className='w-full sm:w-full rounded-md px-4 py-2 mb-3 capitalize' />
                                    <input type="email" placeholder='your email' className='w-full sm:w-full rounded-md px-4 py-2 mb-3 ' />
                                    <input type="number" placeholder='your mobile number' className='w-full sm:w-full rounded-md px-4 py-2 mb-3 ' />
                                    <textarea rows={5} placeholder='your message' className=' form-control w-full sm:w-full rounded-md px-4 py-2 mb-3 ' />
                                </form>
                                <button className=' px-4 py-2 text-lg  font-libre bg-violet-700 rounded-md capitalize flex item-center text-center'>send <BsFillSendFill className={"ms-2"} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Contact
