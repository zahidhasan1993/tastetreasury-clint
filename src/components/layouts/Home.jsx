import React from 'react';
import HomeBanner from '../banner/HomeBanner';
import { TitleChange } from '../../titleChange';
import HomeCategory from '../extra/HomeCategory';
import HomeChefImage from '../extra/HomeChefImage';
import HomePopularItems from '../extra/HomePopularItems';
import FeaturedItems from '../extra/featuredItem/FeaturedItems';
import Reviews from '../extra/Reviews';

const Home = () => {
    TitleChange("Home | TasteTreasury");
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeCategory></HomeCategory>
            <HomeChefImage></HomeChefImage>
            <HomePopularItems></HomePopularItems>
            <FeaturedItems></FeaturedItems>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;