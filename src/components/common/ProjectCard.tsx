"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { motion } from "framer-motion"
import { FaGlobeAmericas } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { IoMdDisc } from "react-icons/io"; 
import fileService from '@/appwrite/file'

interface ProjectsProps {
    project: projectProps;
    key: number;
}

const ProjectCard: FC<ProjectsProps> = ({ project, key }) => {
    const { $id, imgSrc, title, description, tags, category, githubLink, demoLink } = project;
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);

    const handelFlip = () => {
        if (!isAnimated) {
            setIsAnimated(true);
            setIsFlipped(!isFlipped)
        }
    }

    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "linear", duration: 0.5, delay: key * 0.2 }}
            className='flip-card w-full max-w-md mx-auto h-[20rem] rounded-md cursor-pointer'
            onClick={handelFlip}
            // onMouseEnter={handelFlip}
        >

            <motion.div
                className='flip-card-inner w-full h-full  rounded-md gradient flex justify-center items-center'
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimated(false)}
            >
                <div className='flip-card-front w-[99%] h-[99%] bg-gray-800/80 backdrop-blur-md rounded-md p-2 sm:p-4'>
                    <div className="w-full h-[10rem] overflow-hidden rounded-md mb-4">
                        <Image
                            src={String(fileService.getFilePreview(imgSrc))}
                            alt='project image'
                            width={500}
                            height={300}
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className="w-full">
                        <h1 className=' font-libre font-medium max-md:text-lg text-xl capitalize text-green-500  mb-2.5'>{title}</h1>
                        <div className="w-full">
                            <div className='max-sm:text-xs text-sm font-semibold list-disc flex flex-wrap gap-x-3'>
                                {
                                    tags.split(',').map(item => (<p key={item} className='me-2 text-rose-400 uppercase flex items-center gap-x-1'><IoMdDisc className='text-yellow-400' />{item}</p>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flip-card-back w-[99%] h-[99%] bg-gray-800/70 backdrop-blur-md rounded-md p-2 sm:p-4 relative'>
                    <p className='text-base text-white line-clamp-[10]'>{description}</p>
                    <div className="w-full px-8 flex justify-between mt-5 left-0 absolute bottom-4">
                        {/* <button className='px-6 py-2 bg-slate-50'>learn more</button> */}
                        <Link href={githubLink} target='__blank'>
                            <FaGithub size={25} className={"opacity-70 cursor-pointer hover:text-green-500"} />
                        </Link>
                        {demoLink && <Link href={demoLink} target='__blank'>
                            <FaGlobeAmericas size={25} className={"opacity-70 cursor-pointer hover:text-green-500"} />
                        </Link>}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ProjectCard


