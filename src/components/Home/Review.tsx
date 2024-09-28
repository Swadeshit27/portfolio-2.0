"use client"
import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Layout from '../common/Layout'; 
import ReviewCard from './ReviewCard';

export default function Review(): JSX.Element {
    return (
        <>
            <Layout title='Testimonials' titleImg='/testimonials.png'>
                <div className="w-full ">
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }} 
                        slidesPerGroupSkip={1}
                        grabCursor={true} 
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
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