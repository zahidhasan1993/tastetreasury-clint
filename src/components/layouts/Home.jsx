import React from 'react';
import HomeBanner from '../banner/HomeBanner';
import { TitleChange } from '../../titleChange';
import HomeCategory from '../extra/HomeCategory';
import HomeChefImage from '../extra/HomeChefImage';

const Home = () => {
    TitleChange("Home | TasteTreasury");
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeCategory></HomeCategory>
            <HomeChefImage></HomeChefImage>
        </div>
    );
};

export default Home;