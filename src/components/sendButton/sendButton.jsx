import React from "react";
import "./sendButton.css";

const SendButton = ({ buttonText, onClickHandler }) => {
  return (
    <button className='sendButton' onClick={onClickHandler}>
      {buttonText}
    </button>
  );
};

export default SendButton;
