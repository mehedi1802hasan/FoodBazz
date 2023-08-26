import React from 'react';

const FoodCard = ({item}) => {
    const {name,price,image,recipe}=item;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl h-64" />
  </figure>
  <p className='bg-slate-800 text-white top-0  absolute right-0 px-5 mt-16 mr-16 rounded-lg'>{price} $</p>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;