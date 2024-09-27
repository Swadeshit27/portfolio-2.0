
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
        <div className={`layout pb-10 xs:pb-16 sm:pb-24 relative`}>
            {title &&
                <PopUpAnimation className="flex items-center justify-center gap-4 mb-2 xxs:mb-4 xs:mb-6 md:mb-8">
                    {titleImg &&
                        <Image
                            src={titleImg}
                            alt='title-image'
                            width={34}
                            height={34}
                            className='min-w-6 w-6 h-6 xs:w-10 xs:h-10 object-contain'
                        />
                    }
                    <h1 className='text-rose-500 text-center font-semibold text-xl  xs:text-2xl sm:text-3xl  md:text-4xl capitalize '>
                        {title}
                    </h1>
                </PopUpAnimation>
            }
            {children}
        </div>
    )
}

export default Layout
