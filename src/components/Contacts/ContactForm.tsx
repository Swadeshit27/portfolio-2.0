"use client"

import React, { FormEvent, useState } from "react"; 
import { BsFillSendFill } from "react-icons/bs";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion" 
import { AnimationData } from "@/utils/animation";

const ContactForm = () => {
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
                (error: any) => {
                    toast.error(error.text)
                    setLoading(false);
                },
            );
    };
    return (
        <>
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
        </>
    )
}

export default ContactForm
