import React, { useState } from "react";

const CounterMenu = ({ product, onQuantityChange }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
      onQuantityChange(product.id, newCounter);
    
  };


  const handleDecrement = () => {
    if (counter > 0) {
      const newCounter = counter - 1;
      setCounter(newCounter);
      onQuantityChange(product.id, newCounter);
    }
  };

  const handleReset = () => {
    setCounter(0);
    onQuantityChange(product.id, 0);
  };

  return (
    <section className="table">
      <button onClick={handleIncrement}>➕</button>
      <span>{counter}</span>
      <button onClick={handleDecrement}>➖</button>
      <button onClick={handleReset}>❌</button>
    </section>
  );
};

export default CounterMenu;


/*  const CounterMenu = () => {
  const [counter, setCounter] = useState(0);

  const handleCounterChange = (quantity) => {
    setCounter((prev) => Math.max(0, prev + quantity));
  };

  return (
    <div className="table">
      <button onClick={() => handleCounterChange(1)}>➕</button>
      <p>{counter}</p>
      <button onClick={() => handleCounterChange(-1)}>➖</button>
      <button onClick={() => handleCounterChange(0)}>❌</button>
    </div>
  );
}; */
