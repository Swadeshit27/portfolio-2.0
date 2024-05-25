
import React from "react";
import Image from "next/image";
import myPhoto from "@/assets/myphoto.png";
import HireResumeBtn from "@/components/common/HireResumeBtn";
import { CodingProfiles, PersonalDetails } from "@/utils/Education";
import Link from "next/link";
import { PopUpAnimation, RotateAnimation, SlideUpAnimation } from "@/utils/AnimationDiv";

const MyInfo = () => {
    return (
        <>
            <div className="w-full max-w-[1200px] h-full flex max-md:flex-col justify-between mx-auto mb-6 md:mb-12   md:mt-24">
                <SlideUpAnimation className="max-md:order-2 w-full md:w-3/5 min-h-[60vh] h-full font-libre ">
                    <p className="text-sm sm:text-lg font-semibold text-yellow-500 w-full">
                        Hello, I&apos;m 👋
                    </p>
                    <h1
                        className={`text-3xl sm:text-5xl font-[600] my-2 text-violet-600`}
                    >
                        Swadesh Pal
                    </h1>
                    <p className="opacity-75 max-sm:text-sm">
                        I am a passionate and driven individual pursuing a Bachelor of
                        Technology degree in Information Technology from Jalpaiguri
                        Government Engineering College in Jalpaiguri, West Bengal. I am a
                        Full MERN stack developer with expertise in data structures and
                        algorithms. I have developed web applications using React, Node.js,
                        Express.js, and MongoDB. I am very much interested in open source
                        contribution
                    </p>
                    <HireResumeBtn />
                </SlideUpAnimation>
                <div className={"md:w-1/4 h-full relative flex  justify-center max-md:order-1 max-md:my-12"}>
                    <div
                        className="w-[15rem] min-w-[15rem] sm:w-[18rem] h-[17rem] sm:h-[20rem] bg-gradient-to-b from-rose-500 to-violet-500 rounded-lg mx-auto rotate-[8deg] "
                    ></div>
                    <div
                        className=" absolute top-0 w-[15rem] sm:w-[18rem] h-[17rem] sm:h-[20rem] mx-auto rounded-lg"
                    >
                        <Image
                            src={myPhoto}
                            alt="photo"
                            width={150}
                            height={150}
                            className="w-full h-full rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-x-16 font-libre">
                <PopUpAnimation>
                    <h1 className="text-xl sm:text-2xl text-green-500 font-semibold my-4">
                        Personal Details:
                    </h1>
                    <ul className="sm:text-lg font-medium ms-4">
                        {PersonalDetails.map((item) => (
                            <li key={item.key} className="text-violet-500">
                                {item.key} :{" "}
                                <span className="text-blue-500">{item.value}</span>
                            </li>
                        ))}
                    </ul>
                </PopUpAnimation>
                <PopUpAnimation>
                    <h1 className="text-xl sm:text-2xl text-green-500 font-semibold my-4">
                        Coding Profiles:
                    </h1>
                    <ul className="sm:text-[16px] font-medium ms-4">
                        {CodingProfiles.map((item) => (
                            <li key={item.name} className="text-violet-500 hover:underline">
                                <Link target="__blank" href={item.path}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </PopUpAnimation>
                <PopUpAnimation>
                    <h1 className="text-xl sm:text-2xl text-green-500 font-semibold my-4 capitalize">
                        language proficiency :-
                    </h1>
                    <h2 className="sm:text-lg font-libre ms-4 mb-2 capitalize">
                        bengali{" "}
                        <span className=" opacity-75 text-sm">
                            ( Full professional proficiency )
                        </span>
                    </h2>
                    <h2 className="sm:text-lg font-libre ms-4 mb-2 capitalize">
                        english{" "}
                        <span className=" opacity-75 text-sm">
                            ( Full professional proficiency )
                        </span>
                    </h2>
                    <h2 className="sm:text-lg font-libre ms-4 mb-2 capitalize">
                        hindi{" "}
                        <span className=" opacity-75 text-sm">
                            ( Full professional proficiency )
                        </span>
                    </h2>
                </PopUpAnimation>
            </div>
        </>
    );
};

export default MyInfo;
