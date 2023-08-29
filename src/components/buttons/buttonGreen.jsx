import React from "react";
import "./buttonGreen.css";

const ButtonGreen = ({ buttonText, isActive, onClickHandler }) => {
  const buttonClassName = isActive
    ? "buttonGreen active"
    : "buttonGreen inactive";

  return (
    <button className={buttonClassName} onClick={onClickHandler}>
      {buttonText}
    </button>
  );
};

export default ButtonGreen;
