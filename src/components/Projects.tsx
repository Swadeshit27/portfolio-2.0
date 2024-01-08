"use client"
import React from 'react'
import { ProjectList } from "@/data/Projects"
import { motion } from "framer-motion"
import ProjectCard from '@/components/ProjectCard'
import Layout from './Layout'
import Link from 'next/link'


const Projects = (): JSX.Element => {
    return (
        <Layout title='Projects'>
            <div className='w-full h-full flex flex-wrap justify-evenly'>
                {
                    ProjectList.filter(items => items?.isBest === true).map((project, i) => {
                        return (
                            <motion.div key={i}>
                                <ProjectCard project={project} />
                            </motion.div>
                        )
                    })
                }
            </div>
            <Link href={'/projects'}>
                <div className='w-[10rem] cursor-pointer mx-auto my-4 py-2 bg-violet-800 text-white rounded-md capitalize text-lg font-medium font-libre text-center'>
                    views More
                </div>
            </Link>
        </Layout>
    )
}

export default Projects
