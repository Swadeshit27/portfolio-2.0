"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimationData } from "./animation"; 

type props = {
  children: React.ReactNode;
  className?: string;
  isReverse?: boolean;
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

export const SlideTopLeftAnimation: React.FC<props> = ({
  children,
  className,
}) => {
  return (
    <motion.div {...AnimationData.slideTopLeft} className={className}>
      {children}
    </motion.div>
  );
}

export const EducationCardAnimation: React.FC<props> = ({
  children,
  className,
  isReverse,
}) => {
  return (
    <motion.div
      initial={{ x: isReverse ? 50 : -50, y: isReverse ? 50 : -50, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut", type: "spring" }}
      viewport={{ once: true }}
      className={`w-full  max-w-lg min-h-[8rem] rounded-lg bg-violet-700     relative p-3  sm:p-4 ${className}`}>
      {children}
    </motion.div>
  );
}

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
        
      </motion.div>
    </div>
  );
};
