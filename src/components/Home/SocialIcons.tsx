"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { AnimationData } from "@/utils/animation";
import Link from "next/link";
import { SocialIconsList } from "@/utils/SocialIconsList";

const SocialIcons: FC<infoProps> = ({
    github,
    linkedin,
    twitter,
    instagram,
    facebook,
}) => {
    return (
        <>
            <div className="max-md:hidden w-16 bg-[#0000002d] shadow-md shadow-gray-600 backdrop-blur-md fixed top-[30%] right-0 z-99 flex flex-col items-center py-4 rounded-md">
                {SocialIconsList.map((item) => (
                    <Link
                        target="__blank"
                        href={
                            item.name === "github"
                                ? github
                                : item.name === "linkedin"
                                    ? linkedin
                                    : item.name === "twitter"
                                        ? twitter
                                        : item.name === "instagram"
                                            ? instagram
                                            : facebook
                        }
                        key={item.path}
                    >
                        <motion.div
                            {...AnimationData.zoomInOut}
                            className="my-2 cursor-pointer"
                            style={{ color: item.color }}
                        >
                            {item.icon}
                        </motion.div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default SocialIcons;
