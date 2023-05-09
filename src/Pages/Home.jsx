import React from 'react';
import Hero from '../components/Home/Hero';
import Categories from '../components/Home/Categories';
import PopularProducts from '../components/Home/PopularProducts';
import SocialMedia from '../components/Home/SocialMedia';

const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <PopularProducts />
            <SocialMedia />
        </>
    );
};

export default Home;
