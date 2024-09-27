
import React from "react";
import Image from "next/image";
import myPhoto from "@/assets/myphoto.png";
import Link from "next/link";
import { PopUpAnimation, SlideUpAnimation } from "@/utils/AnimationDiv";
import myInfoService from "@/appwrite/myinfo";
import Button from "../common/button";
import fileService from "@/appwrite/file";

const MyInfo = async () => {
    const data: any = await myInfoService.getAllInfo();
    const myInfo: infoProps = data.documents[0];
    return (
        <section className="py-10 sm:py-24 ">
            <div className="w-full h-full flex max-md:flex-col justify-between mx-auto pb-6 xs:pb-10">
                <SlideUpAnimation className="max-md:order-2 w-full md:w-3/5 xs:min-h-[60vh] h-full">
                    <p className="text-sm sm:text-lg font-semibold text-yellow-500 w-full mb-2">
                        Hello,👋
                    </p>
                    {/* <h1
                        className={`text-3xl sm:text-5xl font-[600] my-2 text-violet-600`}
                    >
                        {myInfo?.name || "Swadesh Pal"}
                    </h1> */}
                    <p className=" max-sm:text-sm">
                        {myInfo?.homeDescription || "I am a passionate and driven individual pursuing a Bachelor of Technology degree in Information Technology from Jalpaiguri Government Engineering College in Jalpaiguri, West Bengal. I am a Full MERN stack developer with expertise in data structures and algorithms. I have developed web applications using React, Node.js, Express.js, and MongoDB. I am very much interested in open source contribution"}
                    </p>
                    <div className="flex gap-x-8 my-6">
                        <Button
                            text="Resume"
                            isLink={true}
                            size="lg"
                            className="max-xxs:px-6 max-xxs:py-2 max-xxs:text-sm"
                            link={myInfo?.resume ||
                                "https://cloud.appwrite.io/v1/storage/buckets/66241b72624e71cbcd6a/files/66435eeb002084a85efa/view?project=662415d3bdf8f8d8078b&mode=admin"
                            }
                        />
                        <Button
                            text="Hire Me"
                            path="/contact"
                            variant="outline"
                            size="lg"
                            isNavigate={true}
                            className="!border-violet-400 !text-violet-400 max-xxs:px-6 max-xxs:py-2 max-xxs:text-sm" 
                        />
                    </div>
                </SlideUpAnimation>
                <div className={"md:w-1/4 h-full relative flex  justify-center max-md:order-1 max-md:my-8"}>
                    <div
                        className="w-[15rem] min-w-[15rem] sm:w-[18rem] h-[17rem] sm:h-[20rem] bg-gradient-to-b from-rose-500 to-violet-500 rounded-lg mx-auto rotate-[8deg] "
                    ></div>
                    <div
                        className=" absolute top-0 w-[15rem] sm:w-[18rem] h-[17rem] sm:h-[20rem] mx-auto rounded-lg"
                    >
                        <Image
                            src={
                                myInfo ? String(fileService.getFilePreview(myInfo.aboutImg as string)) : myPhoto
                            }
                            alt="photo"
                            width={150}
                            height={150}
                            className="w-full h-full rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-6 xs:gap-12 md:gap-16 font-libre">
                <PopUpAnimation>
                    <h1 className="text-xl sm:text-2xl text-green-500 font-medium my-2 xs:my-4 capitalize">
                        language proficiency :-
                    </h1>
                    <h2 className="text-sm sm:text-base ms-4 mb-2 capitalize">
                        bengali{" "}
                        <span className=" opacity-75 text-xs xs:text-sm">
                            ( Full professional proficiency )
                        </span>
                    </h2>
                    <h2 className="text-sm sm:text-base  ms-4 mb-2 capitalize">
                        english{" "}
                        <span className=" opacity-75 text-xs xs:text-sm">
                            ( Full professional proficiency )
                        </span>
                    </h2>
                    <h2 className="text-sm sm:text-base ms-4 mb-2 capitalize">
                        hindi{" "}
                        <span className=" opacity-75 text-xs xs:text-sm">
                            ( Full professional proficiency )
                        </span>
                    </h2>
                </PopUpAnimation>
                <PopUpAnimation>
                    <h1 className="text-xl sm:text-2xl text-green-500 font-medium my-2 xs:my-4">
                        Personal Details:
                    </h1>
                    <ul className="text-sm sm:text-base font-medium ms-4 space-y-2">
                        <li className="text-violet-400">
                            Date Of Birth :{" "}
                            <span className="text-gray-100">01/03/2002</span>
                        </li>
                        <li className="text-violet-400">
                            City :{" "}
                            <span className="text-gray-100">Bishnupur</span>
                        </li>
                        <li className="text-violet-400">
                            Email :{" "}
                            <span className="text-gray-100">
                                {myInfo?.email || "swadeshpal2002@gmail.com"}
                            </span>
                        </li>
                        <li className="text-violet-400">
                            Phone :{" "}
                            <span className="text-gray-100">
                                {myInfo?.mobile || "8436893969"}
                            </span>
                        </li>
                    </ul>
                </PopUpAnimation>
                <PopUpAnimation>
                    <h1 className="text-xl sm:text-2xl text-green-500 font-medium my-2 xs:my-4">
                        Coding Profiles:
                    </h1>
                    <ul className=" text-sm sm:text-base font-medium ms-4 space-y-2">
                        {myInfo?.leetcode &&
                            <li className="text-violet-400 hover:underline">
                                <Link target="__blank" href={myInfo.leetcode}>
                                    LeetCode
                                </Link>
                            </li>
                        }
                        {myInfo?.codestudio &&
                            <li className="text-violet-400 hover:underline">
                                <Link target="__blank" href={myInfo.codestudio}>
                                    CodeStudio
                                </Link>
                            </li>
                        }
                        {myInfo?.geekforgeeks &&
                            <li className="text-violet-400 hover:underline">
                                <Link target="__blank" href={myInfo.geekforgeeks}>
                                    GeekForGeeks
                                </Link>
                            </li>
                        }
                        {myInfo?.codeforces &&
                            <li className="text-violet-400 hover:underline">
                                <Link target="__blank" href={myInfo.codeforces}>
                                    CodeForces
                                </Link>
                            </li>
                        }
                        {myInfo?.codechef &&
                            <li className="text-violet-400 hover:underline">
                                <Link target="__blank" href={myInfo.codechef}>
                                    CodeChef
                                </Link>
                            </li>
                        }
                        {myInfo?.hackerrank &&
                            <li className="text-violet-400 hover:underline">
                                <Link target="__blank" href={myInfo.hackerrank}>
                                    HackerRank
                                </Link>
                            </li>
                        }
                    </ul>
                </PopUpAnimation>
            </div>
        </section>
    );
};

export default MyInfo;
