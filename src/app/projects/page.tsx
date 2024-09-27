
import React from 'react'
import Layout from '@/components/common/Layout'
import { Metadata } from 'next'
import ProjectsOptions from '@/components/Projects/ProjectsOptions' 
import { getProjects } from '../libs/action'

export const metadata: Metadata = {
    title: "Projects ",
    openGraph: {
        title: "Projects",
        description: "Hello 👋, I am Swadesh pal, from Bishnupur, west Bengal, Student of Jalpaiguri Government Engineering College in Information Technology Department. I'm a Full Stack Web Developer and React Native Developer from India.",
        images: [{
            url: '/og.jpg',
            width: 1200,
            height: 630,
            alt: "Projects - Swadesh Pal",
        }],
        url: "/projects",
        type: "website",
    }
}

const Projects = async () => {
    const data: any = await getProjects();
    const projects: projectProps[] = data.documents.reverse();
    return (
        <Layout >
            <ProjectsOptions projects={projects} />
        </Layout>
    )
}

export default Projects


