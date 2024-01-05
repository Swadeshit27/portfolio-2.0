import Header from '@/components/Header'
import Layout from '@/components/Layout'
import React from 'react'
import AchievementGif from "@/assets/achievement.gif"
import Image from 'next/image'
import { FaAward } from "react-icons/fa6";

const Achievements = () => {
    return (
        <Layout>
            <Header title='Achievements' />
            <div className='flex w-4/5 mx-auto justify-between item-center'>
                <ul className=' font-libre w-3/4  p-8 rounded-md'>
                    <li className='flex items-center mb-4 text-[16px]'>
                        <FaAward className={"text-2xl text-yellow-500 me-3"} /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem.</span>
                    </li>
                    <li className='flex items-center mb-4 text-[16px]'>
                        <FaAward className={"text-2xl text-yellow-500 me-3"} /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem.</span>
                    </li>
                    <li className='flex items-center mb-4 text-[16px]'>
                        <FaAward className={"text-2xl text-yellow-500 me-3"} /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem.</span>
                    </li>
                    <li className='flex items-center mb-4 text-[16px]'>
                        <FaAward className={"text-2xl text-yellow-500 me-3"} /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem.</span>
                    </li>
                    <li className='flex items-center mb-4 text-[16px]'>
                        <FaAward className={"text-2xl text-yellow-500 me-3"} /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem.</span>
                    </li>
                    <li className='flex items-center mb-4 text-[16px]'>
                        <FaAward className={"text-2xl text-yellow-500 me-3"} /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem.</span>
                    </li>
                </ul>
                <div>
                    <Image src={AchievementGif} height={150} width={150} className={"object-contain"} alt='achievement fit' />
                </div>
            </div>
        </Layout>
    )
}

export default Achievements
