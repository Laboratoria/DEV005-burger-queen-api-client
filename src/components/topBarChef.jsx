
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const TopBarChef = () => {

  return (
    <div className="topBar">
        <NavLink to= "/cheforder">
      <Button
        className="break"
        text="Pedidos" />
      </NavLink>
      <NavLink to= "/service">
      <Button
        className="break"
        text="Listo para servicio"
      />
       </NavLink>
    </div>
  );
};

export default TopBarChef;