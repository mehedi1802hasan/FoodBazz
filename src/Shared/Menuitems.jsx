import React from 'react';

const Menuitems = ({item}) => {
    const {name,price,image,recipe}=item;
    return (
        <div className='flex space-x-5 items-center '>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-28 ' src={image} alt="nai" />
            <div><h3 className='uppercase font-bold '>{name}------</h3>
             <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>{price}</p>
        </div>
    );
};

export default Menuitems;