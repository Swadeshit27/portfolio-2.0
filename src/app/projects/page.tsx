
import React from 'react'
import Layout from '@/components/common/Layout'
import { Metadata } from 'next'
import ProjectsOptions from '@/components/Projects/ProjectsOptions'

export const metadata: Metadata = {
    title: "Projects"
}

const Projects = () => {
    return (
        <Layout >
            <ProjectsOptions />
        </Layout>
    )
}

export default Projects


