
import Layout from "@/components/common/Layout";
import React from "react";
import AchievementGif from "@/assets/achievement.gif";
import Image from "next/image";
import { FaAward } from "react-icons/fa6";
import { AchievementsList } from "@/utils/Achievements";
import { SlideUpAnimation } from "@/utils/AnimationDiv";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Achievements"
}

const Achievements = () => {
    return (
        <Layout>
            <SlideUpAnimation className="mt-12">
                <div
                    className="flex my-6 md:my-4 max-md:flex-col-reverse w-full sm:w-[85%] min-h-[20rem] md:pe-8 rounded-lg bg-violet-600 mx-auto  md:justify-between item-center "
                >
                    <ul className=" font-libre md:w-3/4 p-4 sm:p-8 rounded-md">
                        {AchievementsList.map((item) => (
                            <li
                                key={item.title}
                                className="flex items-center mb-4 text-sm sm:text-[16px]"
                            >
                                <FaAward
                                    size={25}
                                    className={"min-w-[2rem] text-yellow-500 me-2"}
                                />{" "}
                                <span>{item.title}</span>
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
