"use client"

import { PopUpAnimation } from '@/utils/AnimationDiv';
import React, { useState } from 'react' 
import ProjectCard from '../common/ProjectCard';

const projectsCategory =
    [
        {
            title: "Full stack",
            category: "Fullstack",
        },
        {
            title: "College Related",
            category: "CollegeRelated",
        },
        {
            title: "Frontend",
            category: "Frontend",
        },
        {
            title: "Backend",
            category: "Backend",
        },
        {
            title: "React Native",
            category: "ReactNative",
        },
        {
            title: "UI/UX",
            category: "UI/UX",
        },
        {
            title: "Other",
            category: "Other",
        },
    ]

const ProjectsOptions = ({ projects }: { projects: projectProps[] }) => {
    const [activeBtn, setActiveBtn] = useState("Fullstack");
    return (
        <PopUpAnimation>
            <div className='max-sm:mt-8 flex items-center sm:text-lg justify-center  capitalize flex-wrap gap-4 xs:gap-10 mt-12 font-medium'>
                {
                    projectsCategory.map((item, i) => {
                        return (
                            <button
                                key={i}
                                onClick={() => setActiveBtn(item.category)}
                                className={`${activeBtn === item.category ? "text-green-500" : "text-white opacity-75"}`}
                            >
                                {item.title}
                            </button>
                        )
                    })
                }
            </div>
            <div className='w-full h-full  grid lg:grid-cols-3 gap-8 lg:gap-12 my-8 xs:my-12'>
                {
                    projects.length > 0 &&
                    projects
                        .filter(items => items.category === activeBtn)
                        .map((project, i) => {
                            return (
                                <ProjectCard project={project} key={i} />
                            )
                        })
                }
            </div>
        </PopUpAnimation>
    )
}

export default ProjectsOptions
