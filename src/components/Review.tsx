"use client"
import React, { useRef, useState } from 'react';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import Header from './Header';

export default function Review() {
    return (
        <>
            <div className='w-full max-w-[1300px] min-h-screen pt-24 mx-auto '>
                <Header title='Impression' />
                <div className="w-full h-[24rem]">
                    <Swiper
                        slidesPerView={1}
                        autoplay={true}
                        centeredSlides={false}
                        slidesPerGroupSkip={1}
                        grabCursor={true}
                        keyboard={{
                            enabled: true,
                        }}
                        breakpoints={{
                            769: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                        }}
                        scrollbar={true}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <ReviewCard/>
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
            </div>
        </>
    );
}


const ReviewCard = () => {
    return (
        <>
            <div className="w-[85%] h-[23rem] mx-auto rounded-md bg-gradient-to-bl from-rose-500 via-blue-300 to-violet-500 flex justify-center items-center my-8 ">
                <div className='w-[99.5%] h-[99%] bg-black/80 backdrop-blur-lg rounded-md p-4 sm:p-8'>
                    <div className=' text-xl sm:text-2xl font-dancing mb-4 relative'>
                        <BiSolidQuoteAltLeft className={"text-rose-300 text-3xl sm:text-4xl"} />
                        <span className='px-6'>Lorem ipsum dolor sit amet consec sdf adfasdf safasdf  sdfs tetur, adipisicing elit. Nisi rerum vel adipisci totam quis voluptate deserunt repellat quas aut obcaecati tempore, sint quod.</span> 
                        <BiSolidQuoteAltRight className={"text-rose-300 text-3xl sm:text-4xl absolute right-2 bottom-[-1rem]"} />
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