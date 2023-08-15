//import React from 'react'
import logo from './assets/logo.png';
import Buttons from './components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Login'); 
  };

  return (
    <section className='Home'>
      <h2>Fast, rescued food at your service.</h2>
      <div>
        <img src={logo} alt='Logo' />
      </div>
      <Buttons tag='Get started'  onClick={handleButtonClick} />
    </section>
  );
};

export default Home;
