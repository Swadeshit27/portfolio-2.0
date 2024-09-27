
import React from 'react' 
import ProjectCard from '@/components/common/ProjectCard'
import Layout from '../common/Layout' 
import projectService from '@/appwrite/projects'
import Button from '../common/button' 


const Projects = async () => {
    const data: any = await projectService.getAllProject();
    const projects: projectProps[] = data?.documents.reverse();

    return (
        <>
            {
                projects &&
                projects.length > 0 &&
                <Layout title='Projects' titleImg='/projects.png'>
                    <div className='w-full h-full grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
                        {
                            projects.filter(items => items.best === true).map((project, i) => {
                                return (
                                    <ProjectCard project={project} key={i} />
                                )
                            })
                        }
                    </div>
                    <div className='flex justify-center mt-8'> 
                        <Button
                            text='View More'
                            path='/projects'
                            isNavigate={true}
                        />
                    </div>
                </Layout>
            }
        </>
    )
}

export default Projects
