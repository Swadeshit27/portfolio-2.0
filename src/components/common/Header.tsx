 
import React from 'react' 

const Header = ({ title }: { title: string }): JSX.Element => {
    return (
        <h1 className='text-rose-500 text-center font-semibold font-dancing text-5xl  md:text-6xl capitalize my-3 md:mt-6 md:mb-10'>{title}</h1>
    )
}

export default Header