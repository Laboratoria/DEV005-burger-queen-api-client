import axios from "axios";
import CounterMenu from "../components/CounterMenu";
import React, { useEffect, useState } from "react";

const Api = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:8080/products", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const MENU = response.data;
    return MENU;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Menu = ({ onProductQuantityChange }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const data = async () => {
      const menuData = await Api();
      setMenu(menuData);
    };
    data();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
              <CounterMenu product={product} onQuantityChange={onProductQuantityChange} />

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};


export default function WaiterMenu() {
    return <Menu />;
}

