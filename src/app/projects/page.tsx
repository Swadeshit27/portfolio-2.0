"use client"
import React from 'react'
import Project from "@/data/Projects.json"
import Header from '@/components/Header'
import { motion } from "framer-motion"
import ProjectCard from '@/components/ProjectCard'

const Projects = () => {
    return (
        <div className='w-full max-w-[1300px] min-h-screen pt-24 mx-auto '>
            <Header title='projects'  />
            <MapComp category={"fullstack"} heading='full stack projects' />
            <MapComp category={"collegeProjects"} heading='College projects' />
            <MapComp category={"front-end"} heading='front-end projects' />
            <MapComp category={"back-end"} heading='back-end  projects' />
            <MapComp category={"ui/ux"} heading='UI/UX projects' />
        </div>
    )
}

export default Projects


const MapComp = ({ category, heading }: { category: string, heading: string }) => { 
    return (
        <div>
            <h1 className=' text-3xl md:text-4xl font-dancing capitalize text-start ms-8 sm:text-center font-medium mt-12 mb-4'>{heading}</h1>
            <div className='w-full h-full flex flex-wrap justify-evenly'>
                {
                    Project.filter(items => items.category === category).map((project, i) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                animate="visible"
                                transition={{
                                    animate: "once",
                                    delay: i * 0.3, 
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                                key={i}  >
                                <ProjectCard project={project} />
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}