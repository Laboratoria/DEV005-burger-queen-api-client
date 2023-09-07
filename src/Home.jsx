//import React from 'react'
import logo from "./assets/logo.png";
import Buttons from "./components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Login");
  };

  return (
    <section className="Home">
      <div className="div-background">
        <div className="div-title">
          <h2 className="h2">Fast, rescued food at your service.</h2>
        </div>
        
        <div>
          <img className="img-home" src={logo} alt="Logo" />
        </div>
        <div className="div-boton-getStarted">
        <Buttons tag="Get started" onClick={handleButtonClick} />
        </div>
      </div>
    </section>
  );
};

export default Home;
