"use client"

import { projectsType } from '@/data/types'
import Image from 'next/image'
import Link from 'next/link'
import { FaGlobeAmericas } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import pokedex from "@/assets/Project/Pokedex.png"

const ProjectCard = ({ project }: { project: projectsType }) => {
    return (
        <div className="w-[20rem] max-sm:h-[23rem] h-[25rem] bg-gradient-to-b from-rose-500 via-blue-400 to-violet-600 rounded-md m-4 flex justify-center items-center">
            <div className="w-[99%] h-[99%] bg-gray-800/70 backdrop-blur-md rounded-md p-2 sm:p-4">
                <div className="w-full h-[10rem] overflow-hidden rounded-md mb-4">
                    <Image src={project.imagesPath} alt='project image' width={500} height={300} className='w-full h-full object-fill' />
                </div>
                <div className="w-full">
                    <h1 className=' font-libre max-md:text-lg text-xl capitalize '>{project.name}</h1>
                    <div className="w-full">
                        <p className='max-sm:text-[12px] text-sm opacity-75'>
                            {project.description} 
                        </p>
                    </div>
                    <div className="w-full flex justify-between mt-3">
                        {/* <button className='px-6 py-2 bg-slate-50'>learn more</button> */}
                        <Link href={project.code}>
                            <FaGithub size={25} className={"opacity-70 cursor-pointer hover:opacity-100"} />
                        </Link>
                        <Link href={project.demo}>
                            <FaGlobeAmericas size={25} className={"opacity-70 cursor-pointer hover:opacity-100"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
