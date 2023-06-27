import axios from "axios";
import CounterMenu from "../components/CounterMenu";
import React, { useEffect, useState } from "react";
import TopBar from "../components/topBar";

const ApiProducts = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:8080/products", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });


    const MENU = response.data;
    localStorage.setItem('products', JSON.stringify(response.data));
    return MENU;
  } catch (error) {
    console.error(error);
  }
};

const Menu = ({ menu, selectedMenu, addToOrder}) => {
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
const getMenuItems = (menu, selectedMenu) => {
    if (selectedMenu === 'desayuno') {
      return menu.filter((product) => product.type === 'Desayuno');
    } else if (selectedMenu === 'almuerzo') {
      return menu.filter((product) => product.type === 'Almuerzo');
    }
    return [];
  };

export default function WaiterMenu() {
  const [menu, setMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('desayuno');
  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (product, quantity) => {
    const item = { ...product, quantity };
    setOrderItems([...orderItems, item]);
    localStorage.setItem("orderItems", JSON.stringify([...orderItems, item]));
  };

  useEffect(() => {
    const data = async () => {
      const menuData = await ApiProducts();
      setMenu(menuData);
    };
    data();
  }, []);

  const handleMenuType = (menuType) => {
    setSelectedMenu(menuType);
  };

  return (
    <>
     <div>
      <TopBar onMenuTypeChange={handleMenuType} />
      </div>
      <div className="menuTable">
      <Menu menu={menu} selectedMenu={selectedMenu} addToOrder={addToOrder}  />
      </div>
    </>
  );
}


