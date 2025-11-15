import React from 'react';
import './App.css'; 

const ProductCard = function({ props }){

  const {image, name, price, stonk } = props; 

  return (
    <div className="card">
      <img src={image} alt="images" className="images"/>
      <div>

        <h3 className="name">{name}</h3>
        <p className="price">${price}</p>
        {/* if true then is in stock. If false then is out of stock */}
        <p>{stonk ? 'In Stock' : 'Out of Stock'}</p>

      </div>
    </div>
  );
};
export default ProductCard;
