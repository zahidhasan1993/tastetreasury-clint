import React from 'react';
import img1 from '../../assets/home/chef-service.jpg'

const HomeChefImage = () => {
    return (
        <div className="mb-20 md:mx-36 md:relative">
            <img src={img1} alt="" className=''/>
            <div className='text-center bg-white md:absolute md:top-28 md:w-[70%] md:ml-44 md:p-20  md:bg-opacity-80'>
                <h1 className='text-5xl font-thin'>TasteTreasury</h1>
                <p>Welcome to our virtual paradise for food enthusiasts - TasteTreasury, where flavors come alive! Our restaurant-related website banner captures the essence of our culinary wonderland, enticing your taste buds and igniting your desire to explore the world of exquisite dining.</p>

            </div>
        </div>
    );
};

export default HomeChefImage;