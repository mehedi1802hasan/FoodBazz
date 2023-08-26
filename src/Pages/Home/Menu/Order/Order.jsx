import React, { useState } from 'react';
import Cover from '../../../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../../hooks/useMenu';
import FoodCard from '../../../../Component/SectionTitle/FoodCard/FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const {category}=useParams();

  const categories=['salad','pizza','soup','dessert','drinks'];
  const initialIndex=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialIndex);
    const [menu]=useMenu();
    console.log(category)
    const dessert = menu.filter(item=>item.category === 'dessert');
    const pizza =menu.filter(item=>item.category === 'pizza');
    const soup =menu.filter(item=>item.category==='soup');
    const salad =menu.filter(item=>item.category === 'salad');
    const offered =menu.filter(item=>item.category ==='offered');
    const drinks=menu.filter(item=>item.category==='drinks')
    return (
        <div>
           <Helmet >
        <title>FoodBazz | order food</title>
       
      </Helmet> 
            <Cover img='https://i.ibb.co/gW03d2r/banner2.jpg' title='Order Food'></Cover>
         
           <Tabs className='text-center' defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
    
  </TabList>
  <TabPanel >
   <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
   {
    salad.map(item=><FoodCard
    key={item._id}
    item={item}
    ></FoodCard>)
   }
   </div>
  </TabPanel>
  <TabPanel>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
   {
    pizza.map(item=><FoodCard
    key={item._id}
    item={item}
    ></FoodCard>)
   }
   </div>
    
  </TabPanel>
  <TabPanel>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
   {
    soup.map(item=><FoodCard
    key={item._id}
    item={item}
    ></FoodCard>)
   }
   </div>
  </TabPanel>
  <TabPanel>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
   {
    dessert.map(item=><FoodCard
    key={item._id}
    item={item}
    ></FoodCard>)
   }
   </div>
  </TabPanel>
  <TabPanel>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
   {
    drinks.map(item=><FoodCard
    key={item._id}
    item={item}
    ></FoodCard>)
   }
   </div>
  </TabPanel>
  
</Tabs>
         
        </div >
    );
};

export default Order;