"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimationData } from "./animation";
import Image from "next/image";
import myPhoto from "@/assets/myphoto.png";

type props = {
  children: React.ReactNode;
  className?: string;
};

export const SlideUpAnimation: React.FC<props> = ({ children, className }) => {
  return (
    <motion.div {...AnimationData.slideUp} className={className}>
      {children}
    </motion.div>
  );
};
export const PopUpAnimation: React.FC<props> = ({ children, className }) => {
  return (
    <motion.div {...AnimationData.popUp} className={className}>
      {children}
    </motion.div>
  );
};
export const SlideLeftAnimation: React.FC<props> = ({
  children,
  className,
}) => {
  return (
    <motion.div {...AnimationData.slideRight} className={className}>
      {children}
    </motion.div>
  );
};
export const RotateAnimation = () => {
  return (
    <div className={"md:w-1/4 h-full relative flex  justify-center max-md:order-1 max-md:my-12"}>
      <motion.div
        // {...AnimationData.rotateLeft}
        className="w-[15rem] min-w-[15rem] sm:w-[18rem] h-[17rem] sm:h-[20rem] bg-gradient-to-b from-rose-500 to-violet-500 rounded-lg mx-auto rotate-[8deg] "
      ></motion.div>
      <motion.div
        {...AnimationData.rotateRight}
        className=" absolute top-0 w-[15rem] sm:w-[18rem] h-[17rem] sm:h-[20rem] mx-auto rounded-lg"
      >
        <Image
          src={myPhoto}
          alt="photo"
          width={150}
          height={150}
          className="w-full h-full rounded-lg object-cover"
        />
      </motion.div>
    </div>
  );
};
