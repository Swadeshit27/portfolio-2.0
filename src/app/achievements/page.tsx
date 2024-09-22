import Layout from "@/components/common/Layout";
import React from "react";
import AchievementGif from "@/assets/achievement.gif";
import Image from "next/image";
import { FaAward } from "react-icons/fa6";
import { SlideUpAnimation } from "@/utils/AnimationDiv";
import { Metadata } from "next";
import achievementService from "@/appwrite/achievements";
import Link from "next/link";
import fileService from "@/appwrite/file"; 

export const metadata: Metadata = {
    title: "Achievements ",
    openGraph: {
        title: "Achievements",
        description: "Hello 👋, I am Swadesh pal, from Bishnupur, west Bengal, Student of Jalpaiguri Government Engineering College in Information Technology Department. I'm a Full Stack Web Developer and React Native Developer from India.",
        images: [{
            url: '/og.jpg',
            width: 1200,
            height: 630,
            alt: "Achievements - Swadesh Pal",
        }],
        url: "/achievements",
        type: "website",
    }
}

const Achievements = async () => {
    const data: any = await achievementService.getAllAchievements();
    const achievements: AchievementProps[] = data.documents.reverse();
    return (
        <Layout>
            <SlideUpAnimation className="mt-12">
                <div className="flex my-6 md:my-4 max-md:flex-col-reverse w-full sm:w-[85%] min-h-[20rem] md:pe-8 rounded-lg bg-violet-600 mx-auto  md:justify-between item-center ">
                    <ul className=" font-libre md:w-3/4 p-4 sm:p-8 rounded-md">
                        {achievements &&
                            achievements.length > 0 &&
                            achievements.map((item) => (
                                <li key={item.title}>
                                    <Link
                                        href={
                                            item.fileLink && item.fileLink ||
                                            item.attachment && String(fileService.getFilePreview(item.attachment)) || ""
                                        }
                                        className="flex items-center mb-4 text-sm sm:text-base"
                                    >
                                        <FaAward
                                            size={25}
                                            className={"min-w-[2rem] text-yellow-500 me-2"}
                                        />{" "}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                    <Image
                        src={AchievementGif}
                        height={300}
                        width={300}
                        className={
                            " w-[150px] h-[150px] sm:w-[12rem] sm:h-[12rem] object-contain max-md:mx-auto mt-12"
                        }
                        alt="achievement fit"
                    />
                </div>
            </SlideUpAnimation>
        </Layout>
    );
};

export default Achievements;
