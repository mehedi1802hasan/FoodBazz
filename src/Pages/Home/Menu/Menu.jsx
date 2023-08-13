import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import PopularMenu from '../Home/PopularMenu';

const Menu = () => {
    return (
        <div>
           <Helmet>
        <title>FoodBazz | Menu</title>
       
      </Helmet> 
         
       <Cover img='https://i.ibb.co/QMMDN9V/banner3.jpg' title='Our menu'></Cover>
       <PopularMenu></PopularMenu>
       <Cover img='https://i.ibb.co/JyvCn4t/salad-bg.jpg' title='Our menu'></Cover>
       <PopularMenu></PopularMenu>
       <Cover img='https://i.ibb.co/G7YV5Fk/dessert-bg.jpg' title='Our menu'></Cover>
       <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;