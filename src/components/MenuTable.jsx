import React from "react";
import CounterMenu from "../components/CounterMenu";
import BreakfastCSS from "../Style/breakfast.module.css";

const MenuTable = ({ menu, selectedMenu, addToOrder }) => {
  const getMenuItems = (menu, selectedMenu) => {
    if (selectedMenu === 'desayuno') {
      return menu.filter((product) => product.type === 'Desayuno');
    } else if (selectedMenu === 'almuerzo') {
      return menu.filter((product) => product.type === 'Almuerzo');
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th id={BreakfastCSS['producto']}>Producto</th>
            <th>Precio</th>
            <th id={BreakfastCSS['cantidad']}>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {getMenuItems(menu, selectedMenu).map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <CounterMenu product={product} addToOrder={addToOrder} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MenuTable;
