import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
// import { EducationDetails } from "../constants";
// import { textVariant } from "../utils/motion";
// import { styles } from "../Style";
// import SectionWrapper from "../utils/SectionWrapper";
// import { myphoto } from "../assets";

const About = () => {
  return (
    <>
      <motion.div>
        <h1 className={` `}>About Me</h1>
      </motion.div>

      <div>
        <h1 className={` text-center mb-16`}>Education Details</h1>
        <div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
                visibility: "visible",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={2022}
              iconStyle={{ background: "#d4d4d4" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img src={""} className="w-[60%] h-[60%] object-contain" />
                </div>
              }
            >
              <h3 className=" text-[22px]  tracking-wider  font-[500] font-Roboto">
                swaadsfasf
              </h3>
              <p className=" text-base text-secondary  font-Lora">
                asdfasfsafsdf
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
                visibility: "visible",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={2022}
              iconStyle={{ background: "#d4d4d4" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img src={""} className="w-[60%] h-[60%] object-contain" />
                </div>
              }
            >
              <h3 className=" text-[22px]  tracking-wider  font-[500] font-Roboto">
                swaadsfasf
              </h3>
              <p className=" text-base text-secondary  font-Lora">
                asdfasfsafsdf
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
                visibility: "visible",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={2022}
              iconStyle={{ background: "#d4d4d4" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img src={""} className="w-[60%] h-[60%] object-contain" />
                </div>
              }
            >
              <h3 className=" text-[22px]  tracking-wider  font-[500] font-Roboto">
                swaadsfasf
              </h3>
              <p className=" text-base text-secondary  font-Lora">
                asdfasfsafsdf
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

// export default SectionWrapper(About, "about");
export default About;
