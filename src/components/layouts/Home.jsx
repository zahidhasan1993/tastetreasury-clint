import React from 'react';
import HomeBanner from '../banner/HomeBanner';
import { TitleChange } from '../../titleChange';
import HomeCategory from '../extra/HomeCategory';

const Home = () => {
    TitleChange("Home | TasteTreasury");
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className='my-20 text-center'>
                <p className='text-[#D99904] '>---From 11:00am to 10:00pm---</p>
                <hr className='w-1/3 my-5 mx-auto'/>
                <h1 className='text-4xl'>ORDER ONLINE</h1>
                <hr className='w-1/3 my-5 mx-auto'/>
                <HomeCategory></HomeCategory>
            </div>
        </div>
    );
};

export default Home;