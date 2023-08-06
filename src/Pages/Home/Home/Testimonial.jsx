//import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
//import './styles.css';
const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <SectionTitle
                heading={'What our client say'}
                subHeading={'Testimonials'}>

            </SectionTitle>
            <div>
                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className='p-20 m-24  flex flex-col items-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <img className='w-16 h-16 mt-10 mb-5' src="https://i.ibb.co/LrwG6FL/32371.png" alt="" />
                                <p>{review.details} </p>
                                <h3 className='text-2xl font-serif text-orange-500'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }


                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;