"use client";

import React, { useRef, useEffect, useState, FC } from "react";
import ExperienceCard from "./ExperienceCard";

interface IExperience {
    experiences: ExperienceProps[];
    category: string;
}

const AllExperiences: FC<IExperience> = ({ experiences, category }) => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [lineHeight, setLineHeight] = useState(0);

    useEffect(() => {
        if (timelineRef.current) {
            const timelineItems =
                timelineRef.current?.querySelectorAll(".experience-item");
            let totalHeight = 0;
            timelineItems.forEach((item) => {
                totalHeight += (item as HTMLElement).offsetHeight;
            });
            setLineHeight(totalHeight);
        }
    }, [experiences]);

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="relative" ref={timelineRef}>
                <div
                    className={`w-1.5 xxs:w-[10px] absolute left-2 xxs:left-[11px] top-8 bg-rose-100 rounded-full`}
                    style={{ height: `${lineHeight-80}px` }}
                ></div>
                {experiences &&
                    experiences.length > 0 &&
                    experiences
                        .filter((ele) => ele.category === category)
                        .map((item, i) => (
                            <div className="experience-item" key={i}>
                                <ExperienceCard {...item} />
                            </div>
                        ))}
            </div>
        </div>
    );
};

export default AllExperiences;
