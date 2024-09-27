import React from "react";
import Image from "next/image";
import education from "@/assets/education.png"; 
import Subheading from "@/components/common/Subheading";
import { EducationCardAnimation } from "@/utils/AnimationDiv"; 
import Button from "../common/button";
import { Calendar } from "lucide-react"; 
import { getEducationDetails } from "@/app/libs/action";

const AcademicDetails = async () => {
    const data: any = await getEducationDetails();
    const educations: educationProps[] = data.documents;
    return (
        <>
            <Subheading
                subtitle="Academic Details"
                className="text-2xl xs:text-3xl md:text-4xl font-semibold text-rose-500  capitalize text-center mb-8 xs:mb-12"
            />
            <div className="w-full max-w-7xl h-full  mx-auto relative pb-8 xs:pb-16 md:pb-20">
                <div className="h-[44.5rem] w-2 xs:w-[10px] bg-white mx-auto absolute max-xs:left-[18px] max-lg:left-8 lg:left-[50%] -z-10 rounded-full"></div>
                {
                    educations &&
                    educations.length > 0 &&
                    educations.map((item, i) => {
                        const { result, course, duration, description, institute, marks } = item;
                        return (
                            <div
                                key={i}
                                className={`flex justify-end min-h-[12rem] lg:w-1/2 pt-6 xs:pt-12    -translate-x-0.5 gap-x-4 ${i % 2 == 0 ? " max-lg:flex-row-reverse lg:translate-x-11" : " lg:-translate-x-9 lg:ms-auto  flex-row-reverse" }`}
                            >
                                <EducationCardAnimation isReverse={i % 2 == 0}>
                                    <div
                                        className={`absolute top-4 xs:top-8 border-solid   border-y-transparent border-y-8 ${i % 2 == 0
                                            ? "lg:reverse_box max-lg:left_arrow  "
                                            : " left_arrow"
                                            }`}
                                    ></div>
                                    <h1 className="text-[14px] mb-1 sm:text-lg font-semibold text-yellow-500">
                                        {course}
                                    </h1>
                                    <div className="flex items-center mb-2 ">
                                        <Calendar size={18} />
                                        <span className="text-sm sm:text-base ms-2 sm:ms-3">
                                            {duration}
                                        </span>{" "}
                                    </div>
                                    <h1 className="text-[12px] sm:text-[14px] opacity-75">
                                        {description}
                                    </h1>
                                    {result &&
                                        <Button
                                            text="Result"
                                            isLink={true}
                                            size="sm"
                                            link={result}
                                            className="!bg-green-600 px-3 py-1.5 text-xs mt-2"
                                        />
                                    }
                                </EducationCardAnimation>
                                <div className="w-12 h-12 min-w-12 xs:min-w-20 xs:w-20 xs:min-h-20 xs:h-20 rounded-full bg-rose-300 border-[5px] border-white flex justify-center items-center ">
                                    <Image
                                        src={education}
                                        alt="education"
                                        height={50}
                                        width={50}
                                        className="w-6 h-6 xs:w-12 xs:h-12 object-contain"
                                    />
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    )
}

export default AcademicDetails
