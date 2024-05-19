
import { ProjectList } from "@/utils/Projects"
import ProjectCard from "../common/ProjectCard"
import Subheading from "../common/Subheading"

const ProjectComp = ({ category, heading }: { category: string, heading: string }) => {
    return (
        <div>
            <Subheading subtitle={heading} className=' text-2xl md:text-3xl font-libre text-green-500 capitalize text-start ms-8  font-medium mt-12 mb-4' />
            <div className='w-full h-full  grid   lg:grid-cols-3 gap-8 lg:gap-12'>
                {
                    ProjectList.filter(items => items.category === category).map((project, i) => {
                        return (
                            <ProjectCard project={project} key={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectComp