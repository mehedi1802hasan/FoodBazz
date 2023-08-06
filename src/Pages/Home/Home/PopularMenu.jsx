import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import Menuitems from '../../../Shared/Menuitems';

const PopularMenu = () => {
    const [menus,setMenus]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItmes= data.filter(item=>item.category==='popular')
            setMenus(popularItmes)
        })
    },[])
    return (
        <section className='mb-10'>
            <SectionTitle
            heading={'From our menu'}
            subHeading={"Popular Items"}></SectionTitle>
<div className='grid md:grid-cols-2 gap-8'>
    {
        menus.map(item=>
        <Menuitems
        key={item._id}
        item={item}
        >
        </Menuitems>)
    }
</div>
        </section>
    );
};

export default PopularMenu;