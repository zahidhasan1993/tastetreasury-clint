import React from 'react';

const MenuSection = ({food}) => {
    const {image,price,recipe,name} = food;
    // console.log(food);
    return (
        <div className='md:flex md:gap-6'>
            <img src={image} alt="" style={{borderRadius : '0px 200px 200px 200px'}} className='w-[10rem] md:w-[7rem]'/>
            <div className='space-y-3'>
                <h1 className='uppercase'>{name}--------------------</h1>
                <p className='text-[#737373]'>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default MenuSection;