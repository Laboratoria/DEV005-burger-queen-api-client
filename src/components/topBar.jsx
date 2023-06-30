
import BreakfastCSS from "../Style/breakfast.module.css";
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const TopBar = ({ onMenuTypeChange }) => {
  const handleButtonClick = (menuType) => {
    onMenuTypeChange(menuType);
  };

  return (
    <div className={BreakfastCSS.topBar}>
        <NavLink to= "/breakfast">
      <Button
        className={BreakfastCSS.break}
        text="Desayuno"
        onClick={() => handleButtonClick('desayuno')}
      />
      </NavLink>
      <NavLink to= "/breakfast">
      <Button
        className={BreakfastCSS.break}
        text="Almuerzo"
        onClick={() => handleButtonClick('almuerzo')}
      />
      </NavLink>
      <NavLink to= "/order">
      <Button
        className={BreakfastCSS.break}
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