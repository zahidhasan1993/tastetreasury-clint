import React from 'react';
import HomeBanner from '../banner/HomeBanner';
import { TitleChange } from '../../titleChange';
import HomeCategory from '../extra/HomeCategory';

const Home = () => {
    TitleChange("Home | TasteTreasury");
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeCategory></HomeCategory>
        </div>
    );
};

export default Home;