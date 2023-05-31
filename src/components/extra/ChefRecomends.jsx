import React, { useEffect, useState } from 'react';
import BannnerTitle from '../banner/BannnerTitle';
import FoodCard from './FoodCard';

const ChefRecomends = () => {
    const [foods,setFoods] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const offeredFood = data.filter(food => food.category === 'offered')

            setFoods(offeredFood)
        })
    },[])

    // console.log(foods);
    return (
        <div className='md:mx-36'>
            <BannnerTitle
                smallText={'Should Try'}
                mainText={' RECOMMENDS'}
            ></BannnerTitle>
            <div className='md:grid md:grid-cols-3 gap-5'>
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecomends;
