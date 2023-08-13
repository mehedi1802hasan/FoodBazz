import React from 'react';
import Banner from '../Banner';
import Category from '../../../Category/Category';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonial from './Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>FoodBazz | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;