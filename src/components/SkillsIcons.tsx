import { SkillsList } from '@/data/Skills'
import Image from 'next/image'
import React from 'react'

type Props = {
    heading: string,
    category: string,
}

const SkillsIcons = (props: Props):JSX.Element => {
    return (
        <div className="w-[90%] md:w-2/5 max-md:mx-auto mb-4">
            <h1 className="text-2xl font-medium capitalize font-libre mb-2 sm:mb-4 text-green-500">
                {props.heading}
            </h1>
            <div className="w-full flex flex-wrap gap-x-2 gap-y-1">
                {SkillsList.filter((ele) => ele.category === props.category).map(
                    (item) => (
                        <div key={item.name} className="w-14 min-w-14 h-14 min-h-14 sm:w-14 sm:min-w-14 sm:h-14 sm:min-h-14 rounded-md gradient sm:m-2 m-2 flex justify-center items-center">
                            <div className="w-[3.4rem] min-w-[3.4rem] h-[3.4rem] min-h-[3.4rem] bg-black/80 backdrop-blur-lg rounded-md flex flex-col justify-center items-center p-2">
                                <Image
                                    src={item.icon!}
                                    alt="html"
                                    width={100}
                                    height={100}
                                    className=" w-12 h-12 sm:w-full sm:h-full object-contain"
                                />
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default SkillsIcons