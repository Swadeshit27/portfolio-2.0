"use client"

import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

interface IButton {
    text: string
    onPress?: () => void,
    variant?: 'primary' | 'secondary' | 'outline' | 'link'
    size?: 'sm' | 'md' | 'lg' 
    disabled?: boolean
    shape?: 'rounded' | 'square' | 'default',
    className?: string,
    isLink?: boolean
    link?: string,
    isNavigate?: boolean
    path?: string
}

const Button: FC<IButton> = ({
    text,
    onPress,
    variant = 'primary',
    size = 'md',
    disabled = false,
    shape = 'rounded',
    className,
    isLink = false,
    link,
    isNavigate = false,
    path
}) => {
    const router = useRouter()
    const navigation = () => {
        if (isNavigate && path) {
            router.push(path)
        }
    }
    return (
        <button
            onClick={isNavigate ? isLink ? () => window.open(link, '_blank') : navigation : onPress}
            className={`
                ${variant === 'primary' && 'bg-violet-700 text-white'}
                ${variant === 'secondary' && 'bg-white text-violet-700'}
                ${variant === 'outline' && 'border-violet-500 text-violet-500 border'}
                ${variant === 'link' && 'text-violet-700 bg-transparent'}
                ${size === 'sm' && 'py-1 px-2 text-xs'}
                ${size === 'md' && 'py-2 px-4 text-sm'}
                ${size === 'lg' && 'py-2.5 px-8 text-base'}
                ${shape === 'rounded' && 'rounded-full'}
                ${shape === 'square' && 'rounded-none'}
                ${shape === 'default' && 'rounded-md'}
                transition duration-300 ease-in-out font-medium
                ${disabled && 'cursor-not-allowed bg-violet-300'} 
                `+ className}
            disabled={disabled}
        >
            {text}
        </button>
    )
}
export default Button
