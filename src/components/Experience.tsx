import React from 'react'
import Layout from './Layout'
import Header from './Header'
import { FaCalendarAlt } from "react-icons/fa";

const Experience = (): JSX.Element => {
    return (
        <Layout>
            <Header title='Experience' />
            <div className="w-[90%] md:w-4/5 lg:w-3/5 mx-auto font-libre mb-12">
                <div className='flex sm:items-center'>
                    <div className='w-4 h-4 bg-violet-700 rounded-full max-sm:mt-1 me-2'></div>
                    <div className='flex max-sm:flex-col gap-x-12 items-center '>
                        <h1 className='text-xl md:text-2xl font-medium text-green-500 max-sm:mb-2'>BasketHunt Pvt. Ltd</h1>
                        <div className='flex items-center max-sm:mb-2'>
                            <FaCalendarAlt />
                            <h1 className='ms-3 max-sm:text-sm opacity-75'>Aug. 2023 - Sept. 2023</h1>
                        </div>
                    </div>
                </div>
                <div className='ms-6'>
                    <h1 className='text-sm sm:text-lg text-blue-500 my-2'>IT & Web Development Intern</h1>
                    <ul className='opacity-75 ms-8 list-disc max-sm:text-[12px]'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laborum.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laborum.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laborum.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laborum.</li>
                    </ul>
                </div>


            </div>
        </Layout>
    )
}

export default Experience
