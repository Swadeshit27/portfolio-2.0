
import { PopUpAnimation } from "@/utils/AnimationDiv"
import Image from "next/image"
import { FC } from "react"

interface LayoutProps {
    title?: string
    titleImg?: string,
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children, title, titleImg }) => {
    return (
        <div className={`layout pb-16 sm:pb-24 relative`}>
            {title &&
                <PopUpAnimation className="flex items-center justify-center gap-4 my-6 md:mb-8">
                    {titleImg &&
                        <Image
                            src={titleImg}
                            alt='title-image'
                            width={34}
                            height={34}
                            className='w-10 h-10 object-contain'
                        />
                    }
                    <h1 className='text-rose-500 text-center font-semibold  text-3xl  md:text-4xl capitalize '>
                        {title}
                    </h1>
                </PopUpAnimation>
            }
            {children}
        </div>
    )
}

export default Layout
