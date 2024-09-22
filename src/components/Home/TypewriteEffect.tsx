"use client"
import React, { FC } from 'react'
import { Typewriter } from 'react-simple-typewriter'

interface IWords {
    words: string[]
}

const TypewriteEffect: FC<IWords> = ({ words = ["Full Stack Developer", "React Native Developer"] }) => {
    return (
        <>
            <p className="text-center text-base sm:text-2xl font-medium font-libre text-green-500">
                <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={40}
                    loop={0}
                    typeSpeed={100}
                    words={words}
                />
            </p>
        </>
    )
}

export default TypewriteEffect
