import React, { useEffect, useState } from "react";
import TopBar from "../../src/components/topBar";
import Api from "./Api";
import MenuTable from "../../src/components/MenuTable";

export default function WaiterMenu({ orderItems, setOrderItems }) {
  const [menu, setMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('desayuno');

  const addToOrder = (product, quantity) => {
    const existingItem = orderItems.findIndex((item) => item.id === product.id);
  
    const updatedItems = [...orderItems];
  
    if (existingItem !== -1) {
      quantity > 0 ? (updatedItems[existingItem].quantity = quantity) : updatedItems.splice(existingItem, 1);
    } else if (quantity > 0) {
      updatedItems.push({ ...product, quantity: 1 });
    }
  
    setOrderItems(updatedItems);
    localStorage.setItem('orderItems', JSON.stringify(updatedItems));
  };

  useEffect(() => {
    const fetchData = async () => {
      const menuData = await Api();
      setMenu(menuData);
    };
    fetchData();
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
        <MenuTable menu={menu} selectedMenu={selectedMenu} addToOrder={addToOrder} />
      </div>
    </>
  );
}
