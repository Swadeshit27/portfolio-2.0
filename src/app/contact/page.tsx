"use client";
import React, { FormEvent, useRef, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot, FaWhatsapp, FaTelegram } from "react-icons/fa6";
import Layout from "@/components/common/Layout";
import { BsFillSendFill } from "react-icons/bs";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import Link from "next/link";
import { AnimationData } from "@/utils/animation";

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: ""
    })
    const handelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setResponse({ ...response, [name]: value });
    }


    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID!,
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                {
                    name: response.name,
                    email: response.email,
                    phone: response?.mobile,
                    subject: response.subject,
                    message: response?.message,
                },
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            )
            .then(
                () => {
                    toast.success("Email sent successfully!");
                    setLoading(false);
                    setResponse({
                        name: "",
                        email: "",
                        mobile: "",
                        subject: "",
                        message: ""
                    })
                },
                (error) => {
                    toast.error(error.text)
                    setLoading(false);
                },
            );
    };

    return (
        <>
            <Layout title="Contact me">
                <motion.div {...AnimationData.slideUp} className="w-full font-libre sm:p-4 text-white mt-5 md:mt-8">
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
                </motion.div>
                <div className="w-full flex max-md:flex-col mt-4 mb-12 sm:p-4">
                    <motion.div {...AnimationData.slideRight} className="md:w-2/5 max-md:mb-6 md:pe-8">
                        <div className="w-full h-[26rem] rounded-md bg-gradient-to-bl gradient flex justify-center items-center">
                            <div className="w-[99%] h-[99%] bg-black/80 backdrop-blur-lg rounded-md  p-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6823.133238509599!2d87.30504014128167!3d23.112309916443614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7912fa05d3e89%3A0x4c195efefee44206!2sAbantika%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1691076822802!5m2!1sen!2sin"
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
                    </motion.div>
                    <motion.div  {...AnimationData.slideLeft} className="md:w-3/5 md:px-8">
                        <div className="w-full  h-[28.5rem] xs:h-[26rem] rounded-md bg-gradient-to-bl gradient flex justify-center items-center">
                            <div className=" w-[99.2%] xs:w-[99.5%] h-[99.5%] bg-black/80 backdrop-blur-lg rounded-md  p-4 sm:p-8 text-white">
                                <form onSubmit={sendEmail}>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Your name*"
                                        className="inputStyle capitalize"
                                        name="name"
                                        value={response.name}
                                        onChange={handelChange}
                                    />
                                    <input
                                        type="email"
                                        required
                                        placeholder="Your email*"
                                        className="inputStyle lowercase"
                                        name="email"
                                        value={response.email}
                                        onChange={handelChange}
                                    />
                                    <div className="grid xs:grid-cols-2 gap-x-6">
                                        <input
                                            type="text"
                                            placeholder="Your mobile no."
                                            className="inputStyle"
                                            min={10}
                                            max={12}
                                            name="mobile"
                                            value={response.mobile}
                                            onChange={handelChange}
                                        />
                                        <input
                                            type="text"
                                            required
                                            placeholder="Subject*"
                                            className="inputStyle capitalize"
                                            name="subject"
                                            value={response.subject}
                                            onChange={handelChange}
                                        />
                                    </div>
                                    <textarea
                                        rows={3}
                                        placeholder="Your message"
                                        className=" form-control inputStyle resize-none "
                                        name="message"
                                        value={response.message}
                                        onChange={handelChange}
                                    />
                                    <button type="submit" className="w-[105px] px-4 py-2.5 text-lg  font-libre bg-violet-700 rounded-md capitalize flex item-center text-center">
                                        {
                                            !loading ?
                                                <>send
                                                    <BsFillSendFill size={18} className={"ms-2"} />
                                                </> :
                                                <motion.div
                                                    animate={{ y: [-3, 0, 3, 0, -3] }}
                                                    transition={{ duration: 2, easings: ["easeIn", "easeOut"], repeat: Infinity }}
                                                    className="w-full h-6 flex justify-center"
                                                >
                                                    <BsFillSendFill />
                                                </motion.div>
                                        }

                                    </button>

                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Layout>
        </>
    );
};

export default Contact;
