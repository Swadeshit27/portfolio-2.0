"use client"
import React from 'react';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Pagination, Autoplay } from 'swiper/modules';
import Layout from './Layout';

export default function Review(): JSX.Element {
    return (
        <>
            <Layout title='Impression'>
                <div className="w-full h-[20rem]">
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        centeredSlides={false}
                        slidesPerGroupSkip={1}
                        grabCursor={true}
                        breakpoints={{
                            1000: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                        }}
                        scrollbar={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Keyboard, Scrollbar, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <ReviewCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewCard />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Layout>
        </>
    );
}


const ReviewCard = () => {
    return (
        <>
            <div className="w-[90%] md:w-[70%] lg:w-[85%] h-[20rem] mx-auto rounded-md gradient flex justify-center items-center my-8 ">
                <div className='w-[99.5%] h-[99%] bg-black/80 backdrop-blur-lg rounded-md px-8 py-6 sm:py-8 sm:px-12'>
                    <div className=' text-[12px] sm:text-2xl  mb-4 relative'>
                        <BiSolidQuoteAltLeft className={"text-rose-300 text-3xl sm:text-3xl absolute left-[-2rem] top-[-.8rem]"} />
                        <span className=' text-[16px]  md:leading-[10px]'>Lorem ipsum dolor sit  dsdf sadf dfdsf sdf  asdfd sdfds sdf ds amet consec sdf adfasdf safasdf  sdfs tetur, adipisicing elit. Nisi rerum vel adipisci totam quis voluptate deserunt repellat quas aut obcaecati tempore, sint quod.</span>
                        <BiSolidQuoteAltRight className={"text-rose-300 text-3xl sm:text-3xl absolute right-[-2rem] bottom-[.8rem]"} />
                    </div>
                    <div className=' float-right font-libre m-3 '>
                        <h1 className='text-xl'>~ Swadesh Pal</h1>
                        <h2 className='text-sm opacity-75 ms-8 capitalize'>team lead</h2>
                        <h1 className='text-sm opacity-75 ms-8 capitalize'>sristi webTeam</h1>
                    </div>
                </div>
            </div>
        </>
    )
}