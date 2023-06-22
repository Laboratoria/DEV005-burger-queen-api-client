
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const TopBar = ({ onMenuTypeChange }) => {
  const handleButtonClick = (menuType) => {
    onMenuTypeChange(menuType);
  };

  return (
    <div className="topBar">
      <Button
        className="break"
        text="Desayuno"
        onClick={() => handleButtonClick('desayuno')}
      />
      <Button
        className="break"
        text="Almuerzo"
        onClick={() => handleButtonClick('almuerzo')}
      />
      <NavLink to= "/order">
      <Button
        className="break"
        text="Pedidos"
      />
      </NavLink>
    </div>
  );
};

export default TopBar;


/* import Button  from './Button'

 const TopBar = () => {
  return (
    <div className="topBar">
    <Button className="break" text='Desayuno'></Button>
    <Button className="break" text='Almuerzo'></Button>
    <Button className="break" text='Pedidos'></Button>
    </div>
  )
}
export default TopBar */