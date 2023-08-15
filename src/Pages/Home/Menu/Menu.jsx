import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import PopularMenu from '../Home/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu]=useMenu();
    const dessert = menu.filter(item=>item.category === 'dessert');
    const pizza =menu.filter(item=>item.category === 'pizza');
    const soup =menu.filter(item=>item.category==='soup');
    const salad =menu.filter(item=>item.category === 'salad');
    const offered =menu.filter(item=>item.category ==='offered')
    return (
        <div>
           <Helmet>
        <title>FoodBazz | Menu</title>
       
      </Helmet> 
         {/* main cover */}
       <Cover img='https://i.ibb.co/QMMDN9V/banner3.jpg' title='Our menu'></Cover>

        {/* offer menu items */}
      <SectionTitle heading={"Today's Offer"} subHeading={"Don't miss"}></SectionTitle>
      <MenuCategory item={offered}></MenuCategory>
         {/* dessert menu items */}
         <MenuCategory item={dessert} title={'Dessert'} coverImg='https://i.ibb.co/G7YV5Fk/dessert-bg.jpg'></MenuCategory>

           {/* pizza menu items */}
         <MenuCategory item={pizza} title={'Pizza'} coverImg='https://i.ibb.co/nfZ5pYm/pizza-bg.jpg'></MenuCategory>
         
          {/* soup menu items */}
          <MenuCategory item={soup} title={'Soup'} coverImg='https://i.ibb.co/WPxNqZx/soup-bg.jpg'></MenuCategory>

           {/* salad menu items */}
           <MenuCategory item={salad} title={'Salad'} coverImg='https://i.ibb.co/JyvCn4t/salad-bg.jpg'></MenuCategory>
        </div>
    );
};

export default Menu;