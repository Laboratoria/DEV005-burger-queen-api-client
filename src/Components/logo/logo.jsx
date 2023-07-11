import React from 'react';
import Logo from '../../assets/logoBbqfinal.png';
import './logo.css';


const LogoBurger = () => {
  return (
      <figure className="content-logo">
        <img src={Logo} alt="logo" />
      </figure>
  );
};

export default LogoBurger;