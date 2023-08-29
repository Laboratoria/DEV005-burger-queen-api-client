import React from "react";
import "../../../styles/kitchen/menu.css";

const Menu = ({ product, children }) => {
  const { name, price, image } = product;
  return (
    <div className='products'>
      <div className='img'>
        <img src={image} alt={name} />
      </div>
      <div className='productName'>
        {name}
        <br /> ${price}
      </div>
      {children}
    </div>
  );
};

export default Menu;
