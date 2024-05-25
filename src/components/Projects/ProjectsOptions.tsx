"use client"

import { PopUpAnimation } from '@/utils/AnimationDiv';
import React, { useState } from 'react'
import { ProjectList } from '@/utils/Projects';
import ProjectCard from '../common/ProjectCard';

const ProjectsOptions = () => {
    const [activeBtn, setActiveBtn] = useState("all");
    return (
        <PopUpAnimation>
            <div className='max-sm:mt-6 flex items-center space-x-8 sm:text-xl justify-center font-libre capitalize flex-wrap gap-y-4 mt-12'>
                <button
                    onClick={() => setActiveBtn("all")}
                    className={`${activeBtn === "all" ? "text-green-500" : "text-white opacity-75"}`}
                >
                    All Projects
                </button>
                <button
                    onClick={() => setActiveBtn("fullstack")}
                    className={`${activeBtn === "fullstack" ? "text-green-500" : "text-white opacity-75"}`}
                >
                    Full stack
                </button>
                <button
                    onClick={() => setActiveBtn("collegeProjects")}
                    className={`${activeBtn === "collegeProjects" ? "text-green-500" : "text-white opacity-75"}`}
                >
                    College Related
                </button>
                <button
                    onClick={() => setActiveBtn("front-end")}
                    className={`${activeBtn === "front-end" ? "text-green-500" : "text-white opacity-75"}`}
                >
                    Front-End
                </button>
                {/* <button
                    onClick={() => setActiveBtn("back-end")}
                    className={`${activeBtn === "back-end" ? "text-green-500" : "text-white opacity-75"}`}
                >
                    Back-End
                </button> */}
                <button
                    onClick={() => setActiveBtn("app")}
                    className={`${activeBtn === "app" ? "text-green-500" : "text-white opacity-75"}`}
                >
                    React Native App
                </button>
            </div>
            <div className='w-full h-full  grid lg:grid-cols-3 gap-8 lg:gap-12 my-12'>
                {
                    ProjectList.filter(items => activeBtn === "all" || items.category === activeBtn).map((project, i) => {
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
