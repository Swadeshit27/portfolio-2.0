import React from 'react'
import Layout from '../common/Layout'
import { ExperienceList } from '@/utils/Experience';
import Subheading from '../common/Subheading';
import ExperienceCard from './ExperienceCard';


const Experience = (): JSX.Element => {
    return (
        <Layout title='Experience'>
            <div className='grid mlg:grid-cols-2 gap-x-20 max-mlg:gap-y-20 '>
                <div className='relative'>
                    <Subheading subtitle='Internships & Hackathons' />
                    <div className='w-[10px] h-[52rem] sm:h-[65rem] absolute  left-[10px] bg-rose-200 rounded-full'>
                    </div>
                    {
                        ExperienceList.filter(ele => ele.category === 'internship').map((item, i) => (
                            <ExperienceCard  {...item} key={i} />
                        ))
                    }
                </div>
                <div className='relative'>
                    <Subheading subtitle='Open Source Events' />
                    <h1 className='header text-4xl font-semibold text-green-500'></h1>
                    <div className='w-[10px] h-[52rem] sm:h-[65rem] absolute  left-[10px] bg-rose-300 rounded-full'></div>
                    {
                        ExperienceList.filter(ele => ele.category === 'Open Source').map((item, i) => (
                            <ExperienceCard {...item} key={i} />
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Experience


