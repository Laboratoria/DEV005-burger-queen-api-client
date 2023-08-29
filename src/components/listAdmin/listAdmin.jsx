//crear el div don va el nombre, otro div el rol y los botones importados de addOrders//
import React from "react";
import "./listAdmin.css";
import ButtonGreen from "../buttons/buttonGreen";

const ListAdmin = () => {
    return(
        <div className='Products'>
      <div className='nameProducts'> Nombre producto </div>
        <div className="Btnproducts">
      <ButtonGreen buttonText='Editar ✏️' />
      <ButtonGreen buttonText='Agregar 🗑️' />
      </div>
    </div>

    )
}

export default ListAdmin;
