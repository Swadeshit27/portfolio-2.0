
import React from 'react'
import { ProjectList } from "@/utils/Projects"
import ProjectCard from '@/components/common/ProjectCard'
import Layout from '../common/Layout'
import Link from 'next/link'


const Projects = (): JSX.Element => {
    return (
        <Layout title='Projects'>
            <div className='w-full h-full grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
                {
                    ProjectList.filter(items => items?.isBest === true).map((project, i) => {
                        return (
                            <ProjectCard project={project} key={i} />
                        )
                    })
                }
            </div>
            <div className='flex justify-center mt-8'>
                <Link href={'/projects'}>
                    <button className=' btn border-none hover:bg-violet-800 w-40  rounded-full  mx-auto  py-2 bg-violet-800 text-white  text-base font-medium font-libre text-center'>
                        Views More
                    </button>
                </Link>
            </div>
        </Layout>
    )
}

export default Projects
