
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot, FaWhatsapp, FaTelegram } from "react-icons/fa6";
import Layout from "@/components/common/Layout";
import Link from "next/link";
import ContactForm from "@/components/Contacts/ContactForm";
import { SlideLeftAnimation, SlideUpAnimation } from "@/utils/AnimationDiv";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Contact me"
}

const Contact = () => {
    return (
        <>
            <Layout >
                <SlideUpAnimation className="w-full font-libre sm:p-4 text-white mt-5 md:mt-8">
                    <h3 className="text-2xl sm:text-3xl font-medium text-green-500 tracking-wide mb-3">
                        Get in touch
                    </h3>
                    <p className="text-sm sm:text-lg opacity-70 ">
                        I am available for any freelance or internship or full-time
                        positions
                    </p>
                    <p className=" text-sm sm:text-lg opacity-80">
                        Connect me and let&apos;s talk
                    </p>
                </SlideUpAnimation>
                <div className="w-full flex max-md:flex-col mt-4 mb-12 sm:p-4">
                    <SlideLeftAnimation className="md:w-2/5 max-md:mb-6 md:pe-8">
                        <div className="w-full h-[26rem] rounded-md bg-gradient-to-bl gradient flex justify-center items-center">
                            <div className="w-[99%] h-[99%] bg-black/80 backdrop-blur-lg rounded-md  p-4"> 
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23745.20044159212!2d87.31255134999999!3d23.0694192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7916386ebfcf5%3A0xdac2e027aca2f2e6!2sBishnupur%2C%20West%20Bengal%20722122!5e1!3m2!1sen!2sin!4v1716294239676!5m2!1sen!2sin"
                                    className=" object-fill w-full h-[210px] rounded-md"
                                    loading="lazy"
                                ></iframe>
                                <div className=" text-base mt-6 text-white font-poppins">
                                    <h4 className=" flex  items-center gap-4 my-3">
                                        <FaLocationDot size={22} className="icon-1" />
                                        Bishnupur, West Bengal
                                    </h4>
                                    <h4 className=" flex  items-center gap-4 my-3">
                                        <FaTelegram size={22} color="0088cc" />
                                        @swadesh987
                                    </h4>
                                    <Link href={'tel:+918436893969'}>
                                        <h4 className=" flex  items-center gap-4 my-3">
                                            <FaWhatsapp size={22} color="#1aff66" />
                                            +91 8436893969
                                        </h4>
                                    </Link>
                                    <Link href={'mailto:swadeshpal2002@gmail.com'}>
                                        <h4 className=" flex  items-center gap-4 my-3">
                                            <HiOutlineMail size={22} color="#3385ff" />
                                            swadeshpal2002@gmail.com
                                        </h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SlideLeftAnimation>
                    <ContactForm />
                </div>
            </Layout>
        </>
    );
};

export default Contact;
