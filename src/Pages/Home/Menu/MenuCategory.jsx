import React from 'react';
import Menuitems from '../../../Shared/Menuitems';
import Cover from '../../../Shared/Cover/Cover';

const MenuCategory = ({item,title,coverImg}) => {
    return (
        <div className=''>
           {title &&   <Cover img={coverImg} title={title}></Cover>}

            <div className='grid md:grid-cols-2 gap-8 mb-16 mt-16 px-20'>
    {
        item.map(item=>
        <Menuitems
        key={item._id}
        item={item}
        >
        </Menuitems>)
    }
</div>
        </div>
    );
};

export default MenuCategory;