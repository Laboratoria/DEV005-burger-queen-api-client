import React, { useState } from "react";

const CounterMenu = ({ product, addToOrder }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    addToOrder(product, quantity + 1); 
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      addToOrder(product, quantity - 1); 
    }
  };

  const handleRemove = () => {
    setQuantity(0);
    addToOrder(product, 0); 
  };

  return (
    <div className="counterMenu">
      <button onClick={handleDecrement}>➖</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>➕</button>
      <button onClick={handleRemove}>❌</button>
    </div>
  );
};

export default CounterMenu;
