"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from "framer-motion"
import { FaGlobeAmericas } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { IoMdDisc } from "react-icons/io";
import { AnimationData } from '@/utils/animation'

const ProjectCard = ({ project }: { project: ProjectsListType }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);

    const handelFlip = () => {
        if (!isAnimated) {
            setIsAnimated(true);
            setIsFlipped(!isFlipped)
        }
    }
    return (
        <motion.div   {...AnimationData.popUp} className='flip-card w-full max-w-md mx-auto h-[20rem] rounded-md cursor-pointer' onClick={handelFlip}>
            <motion.div
                className='flip-card-inner w-full h-full  rounded-md gradient flex justify-center items-center'
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimated(false)}
            >
                <div className='flip-card-front w-[99%] h-[99%] bg-gray-800/80 backdrop-blur-md rounded-md p-2 sm:p-4'>
                    <div className="w-full h-[10rem] overflow-hidden rounded-md mb-4">
                        <Image src={project.imgUrl} alt='project image' width={500} height={300} className='w-full h-full object-cover' />
                    </div>
                    <div className="w-full">
                        <h1 className=' font-libre font-medium max-md:text-lg text-xl capitalize text-green-500  mb-2.5'>{project.name}</h1>
                        <div className="w-full">
                            <div className='max-sm:text-xs text-sm font-semibold list-disc flex flex-wrap gap-x-3'>
                                {
                                    project.techTools.map(item => (<p key={item} className='me-2 text-rose-400 uppercase flex items-center gap-x-1'><IoMdDisc className='text-yellow-400' />{item}</p>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flip-card-back w-[99%] h-[99%] bg-gray-800/70 backdrop-blur-md rounded-md p-2 sm:p-4 relative'>
                    <p className='text-base text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem temporibus, aliquam hic nisi, repellendus illo quae ut perspiciatis tempora sint fugit? Incidunt temporibus voluptatem numquam aspernatur autem eligendi optio deserunt?</p>
                    <div className="w-full px-8 flex justify-between mt-5 left-0 absolute bottom-4">
                        {/* <button className='px-6 py-2 bg-slate-50'>learn more</button> */}
                        <Link href={project.codeUrl}>
                            <FaGithub size={25} className={"opacity-70 cursor-pointer hover:text-blue-500"} />
                        </Link>
                        <Link href={project.demoUrl}>
                            <FaGlobeAmericas size={25} className={"opacity-70 cursor-pointer hover:text-blue-500"} />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ProjectCard


