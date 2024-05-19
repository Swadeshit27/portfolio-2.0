"use client"
import React from 'react'
import Layout from '@/components/common/Layout'
import ProjectComp from '@/components/Projects/ProjectComp'
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//     title: "Projects"
// }

const Projects = () => {
    return (
        <Layout title='projects'>
            <ProjectComp category={"fullstack"} heading='full stack projects' />
            <ProjectComp category={"collegeProjects"} heading='College projects' />
            <ProjectComp category={"front-end"} heading='front-end projects' />
            <ProjectComp category={"back-end"} heading='back-end  projects' /> 
        </Layout>
    )
}

export default Projects


