"use client"
import React from 'react'
import Header from '@/components/Header'
import { motion } from "framer-motion"
import ProjectCard from '@/components/ProjectCard'
import Layout from '@/components/Layout'
import { ProjectList } from '@/data/Projects'

const Projects = () => {
    return (
        <Layout>
            <Header title='projects'  />
            <MapComp category={"fullstack"} heading='full stack projects' />
            <MapComp category={"collegeProjects"} heading='College projects' />
            <MapComp category={"front-end"} heading='front-end projects' />
            <MapComp category={"back-end"} heading='back-end  projects' />
            {/* <MapComp category={"ui/ux"} heading='UI/UX projects' /> */}
        </Layout>
    )
}

export default Projects


const MapComp = ({ category, heading }: { category: string, heading: string }) => { 
    return (
        <div>
            <h1 className=' text-2xl md:text-3xl font-libre text-green-500 capitalize text-start ms-8  font-medium mt-12 mb-4'>{heading}</h1>
            <div className='w-full h-full flex flex-wrap gap-8'>
                {
                    ProjectList.filter(items => items.category === category).map((project, i) => {
                        return (
                            <motion.div key={i}>
                                <ProjectCard project={project} />
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}