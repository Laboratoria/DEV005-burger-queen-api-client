import React, { useState } from "react";

 const CounterMenu = () => {
  const [counter, setCounter] = useState(0);

  const handleCounterChange = (quantity) => {
    setCounter((prev) => Math.max(0, prev + quantity));
  };

  return (
    <div className="table">
      <button onClick={() => handleCounterChange(1)}>➕</button>
      <p>{counter}</p>
      <button onClick={() => handleCounterChange(-1)}>➖</button>
      <button onClick={() => handleCounterChange(-counter)}>❌</button>
    </div>
  );
};

export default CounterMenu


/* export const CounterMenu = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleReset = () => {
    setCounter(0)
  }

  return (
    <section className="table">
      <button onClick={handleIncrement}>➕</button>
      <p>{counter}</p>
      <button onClick={handleDecrement}>➖</button>
      <button onClick={handleReset}>❌</button>
      
    </section>
  );
};
 */