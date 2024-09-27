"use client";
import React from "react";
import { motion } from "framer-motion";

const BTvariants = {
    bottom: {
        translateY: "100vh",
        rotate: 0,
    },
    top: {
        translateY: "-100vh",
        rotate: 720,
    },
};

const AnimatedBoxes = () => {
    return (
        <>
            <motion.div
                initial="bottom"
                animate="top"
                className="w-full h-screen overflow-hidden fixed z-10 top-0 left-0"
            >
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                    className="w-[4rem] h-[4rem] z--50 bg-light_white_2 rounded-xl absolute bottom-[30%] left-2 sm:left-[25%] "
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                    className="w-8 h-8 z--50 bg-light_white_2 rounded-md absolute top-[10%] left-[11%] max-xs:hidden"
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 13, ease: "linear" }}
                    className="w-32 h-32 z--50 bg-light_white_2 rounded-3xl absolute top-[20%] xs:left-40 left-6"
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="w-16 h-16 z--50 bg-light_white_2  rounded-md absolute top-[55%] xs:right-[30%] right-2"
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
                    className="w-4 h-4 z--50 bg-light_white_2 rounded absolute bottom-[33%] xs:right-[15%] right-10"
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    className="w-[4rem] h-[4rem] z--50 bg-light_white_2 rounded-xl absolute bottom-40 xs:left-[18%] left-6"
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                    className="w-8 h-8 z--50 bg-light_white_2 rounded-md absolute top-[69%] left-[58%] "
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="w-32 h-32 z--50 bg-light_white_2 rounded-3xl absolute bottom-[40%] left-24 max-xs:hidden"
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className="w-16 h-16 z--50 bg-light_white_2  rounded-md absolute top-[10%] xs:right-[30%] right-12"
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 33, ease: "linear" }}
                    className="w-4 h-4 z--50 bg-light_white_2 rounded absolute bottom-32 right-[15%] "
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                    className="w-6 h-6 z--50 bg-light_white_2 rounded absolute bottom-[30%] right-[40%] max-xs:hidden"
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="w-16 h-16 z--50 bg-light_white_2  rounded-md absolute top-[30%] left-[30%]"
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="w-4 h-4 z--50 bg-light_white_2 rounded absolute bottom-32 left-[15%]"
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                    className="w-6 h-6 z--50 bg-light_white_2 rounded absolute top-0 left-[20%]"
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="w-24 h-24 z--50 bg-light_white_2 rounded-2xl absolute bottom-20 left-[30%]"
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className="w-16 h-16 z--50 bg-light_white_2 rounded-xl absolute top-40 left-[40%] "
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="w-32 h-32 z--50 bg-light_white_2 rounded-3xl absolute bottom-0 left-[50%]"
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="w-8 h-8 z--50 bg-light_white_2 rounded-md absolute top-20 left-[65%]"
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                    className="w-[4rem] h-[4rem] z--50 bg-light_white_2 rounded-xl absolute bottom-32 left-[75%] max-xs:hidden"
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="w-8 h-8 z--50 bg-light_white_2 rounded-md absolute top-60 right-[15%] "
                ></motion.div>
                <motion.div
                    variants={BTvariants}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="w-32 h-32 z--50 bg-light_white_2 rounded-3xl absolute top-10 right-10"
                ></motion.div>
            </motion.div>
        </>
    );
};

export default AnimatedBoxes;
