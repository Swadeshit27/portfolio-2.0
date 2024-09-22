import React, { FC } from 'react'
import Layout from '../common/Layout'
import ExperienceCard from './ExperienceCard';
import experienceService from '@/appwrite/experience'; 

type props = {
    isHeaderVisible?: boolean,
    category?: string,
    heading?: string,
    headingImg?: string
}

const Experience: FC<props> = async ({
    isHeaderVisible = true,
    category = 'Internship',
    heading = 'Work Experience',
    headingImg = '/job.png'
}) => {
    const data: any = await experienceService.getAllExperience();
    const experiences: ExperienceProps[] = data?.documents.reverse();
    return (
        <>
            <Layout title={isHeaderVisible ? heading : ""} titleImg={isHeaderVisible ? headingImg : ''}>
                <div className='w-full max-w-3xl mx-auto'>
                    <div className='relative'>
                        <div className='w-[10px] h-[52rem] sm:h-[50rem] absolute  left-[11px] top-8 bg-rose-100 rounded-full'>
                        </div>
                        {
                            experiences &&
                            experiences.length > 0 &&
                            experiences
                                .filter(ele => ele.category === category)
                                .map((item, i) => (
                                    <ExperienceCard  {...item} key={i} />
                                ))
                        }
                    </div>
                </div>
            </Layout >
        </>
    )
}

export default Experience


