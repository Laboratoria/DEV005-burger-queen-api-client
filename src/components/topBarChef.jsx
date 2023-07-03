
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import BreakfastCSS from "../Style/breakfast.module.css";

const TopBarChef = () => {

  return (
    <div className={BreakfastCSS.topBar}>
        <NavLink to= "/cheforder">
      <Button
        className={BreakfastCSS.break}
        text="Pedidos" />
      </NavLink>
      <NavLink to= "/service">
      <Button
       className={BreakfastCSS.break}
        text="Listo para servicio"
      />
       </NavLink>
    </div>
  );
};

export default TopBarChef;