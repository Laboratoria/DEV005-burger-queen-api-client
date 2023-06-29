import axios from "axios";

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

export default ApiProducts;


/* import axios from "axios";
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

export default function WaiterMenu({ orderItems, setOrderItems })  {
  const [menu, setMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('desayuno');
 
  const addToOrder = (product, quantity) => {
    const existingItemIndex = orderItems.findIndex((item) => item.id === product.id);
  
    const updatedItems = [...orderItems];
  
    if (existingItemIndex !== -1) {
      quantity > 0 ? (updatedItems[existingItemIndex].quantity = quantity) : updatedItems.splice(existingItemIndex, 1);
    } else if (quantity > 0) {
      updatedItems.push({ ...product, quantity: 1 });
    }
  
    setOrderItems(updatedItems);
    localStorage.setItem('orderItems', JSON.stringify(updatedItems));
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


 */