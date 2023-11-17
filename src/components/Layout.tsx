import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full max-w-[1300px] max-md:h-auto min-h-screen pt-24 mx-auto relative'>
            {children}
        </div>
    )
}

export default Layout
