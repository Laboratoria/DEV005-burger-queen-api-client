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


/* import React, { useState } from "react";

const CounterMenu = ({ product }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    console.log("Mas", product);
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
      console.log("menos", product);
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleReset = () => {
    setCounter(0);
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

export default CounterMenu */

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
