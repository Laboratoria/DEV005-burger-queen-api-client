import React, { useState } from "react";

export const CounterMenu = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <button onClick={handleIncrement}>Aumentar</button>
      <p>{counter}</p>
      <button onClick={handleDecrement}>Disminuir</button>
      
    </>
  );
};
