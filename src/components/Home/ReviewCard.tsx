import Image from "next/image"
import Link from "next/link"
import { BiSolidQuoteLeft } from "react-icons/bi"
import { FaLinkedin } from "react-icons/fa6"

const ReviewCard = () => {
    return (
        <>
            <div className="w-[90%] md:w-[70%] lg:w-3/4 h-[20rem] mx-auto rounded-md gradient flex justify-center items-center my-8 relative mt-20 mb-12">
                <div className='w-[99.5%] h-[99%] bg-black/80 backdrop-blur-lg rounded-md'>
                    <div className='w-28 h-28 min-h-28 gradient absolute -top-20 left-8 rounded-md !p-0.5' >
                        <Image
                            src='/profile.jpg'
                            alt='profile'
                            width={100}
                            height={100}
                            className='w-full h-full rounded-md object-cover bg-black/80 backdrop-blur-lg'
                        />
                    </div>
                    <BiSolidQuoteLeft
                        className={"text-yellow-500 text-4xl sm:text-5xl absolute right-1/2 top-2"}
                    />
                    <div className=' text-sm sm:text-2xl  mb-4 relative pt-16 px-12 pb-6'>
                        <span className=' max-xs:text-sm text-base line-clamp-6'>Lorem ipsum dolor sit  dsdf sadf dfdsf sdf  asdfd sdfds sdf ds amet consec sdf adfasdf safasdf  sdfs tetur, adipisicing elit. Nisi rerum vel adipisci totam quis voluptate deserunt repellat quas aut obcaecati tempore, sint quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt amet iusto facere exercitationem maxime, officiis cumque aspernatur maiores autem magnam nam incidunt neque asperiores perspiciatis mollitia quasi aliquam eum et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, molestias.</span>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <div className='flex items-center gap-x-2'>
                            <h1 className='text-xl'>Swadesh Pal</h1>
                            <Link href="/">
                                <FaLinkedin className='text-blue-500 cursor-pointer text-xl hover:text-blue-700' />
                            </Link>
                        </div>
                        <h2 className='text-sm opacity-75 capitalize'>team lead, sristi webTeam</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCard