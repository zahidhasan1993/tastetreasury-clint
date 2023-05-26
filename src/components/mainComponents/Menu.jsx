import React from 'react';
import { TitleChange } from '../../titleChange';
import MenuCover from '../banner/MenuCover';
import bannerImg from '../../assets/menu/banner3.jpg'

const Menu = () => {
    TitleChange("Menu | TasteTreasury");
    return (
        <div>
            <MenuCover
                img={bannerImg} name="our menu" msg="would you like to try some dishes"
            ></MenuCover>
            
        </div>
    );
};

export default Menu;