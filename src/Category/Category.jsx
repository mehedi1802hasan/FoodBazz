import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../Component/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <div>
            <SectionTitle
            subHeading={'From 11:00 am to 10:00 pm'}
            heading={'order Online'}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper mb-8"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/7bqsvq6/slide1.jpg" alt="" />
                    <h3 className='font-semibold text-3xl -mt-16 text-center'>salad</h3>
                </SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/TPyB7M6/slide2.jpg" alt="" />
                    <h3 className='font-semibold text-3xl -mt-16 text-center'>Pizza</h3></SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/7bqsvq6/slide1.jpg" alt="" />
                    <h3 className='font-semibold text-3xl -mt-16 text-center'>coffee</h3></SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/xMkXpmW/slide4.jpg" alt="" />
                    <h3 className='font-semibold text-3xl -mt-16 text-center'>desart</h3></SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/7bqsvq6/slide1.jpg" alt="" />
                    <h3 className='font-semibold text-3xl -mt-16 text-center'>Pasta</h3></SwiperSlide>
               

            </Swiper>
        </div>
    );
};

export default Category;