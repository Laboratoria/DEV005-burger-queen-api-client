import React from "react";
import "./ButtonSmall.css";

const ButtonSmall = ({ buttonText, functionButton, product }) => {
  return (
    <button className='buttonSmall' onClick={() => functionButton(product)}>
      {buttonText}
    </button>
  );
};

export default ButtonSmall;
