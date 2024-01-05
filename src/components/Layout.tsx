"use client"

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <div className='w-full p-4 sm:p-8 max-w-[1200px] max-md:h-auto h-auto pt-4 mx-auto relative'>
            {children}
        </div>
    )
}

export default Layout
