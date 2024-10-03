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

export default function Review({ reviews }: { reviews: ReviewProps[] }) {
    return (
        <>
            {
                reviews &&
                reviews.length > 0 &&
                reviews.filter(ele => ele.isVerified).length > 0 &&
                <Layout title='Testimonials' titleImg='/testimonials.png'>
                    <div className="w-full ">
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 3000, 
                            }}
                            slidesPerGroupSkip={1}
                            grabCursor={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            {
                                reviews.filter(ele => ele.isVerified).map((review, index) => (
                                    <SwiperSlide key={index}>
                                        <ReviewCard {...review} />
                                    </SwiperSlide>
                                ))
                            } 
                        </Swiper>
                    </div>
                </Layout>
            }
        </>
    );
}