import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import UserOrder from "../../components/userOrder";
import TopBar from "../../components/topBar";
import Api from "../../Utilities/Api";
import MenuTable from "../../components/MenuTable";
import BreakfastCSS from "../../Style/breakfast.module.css";

export default function Breakfast() {
  const [orderItems, setOrderItems] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [menu, setMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('desayuno');

  const addToOrder = (product, quantity) => {
    const existingItem = orderItems.findIndex((item) => item.id === product.id);

    const updatedItems = [...orderItems];

    if (existingItem !== -1) {
      if (quantity > 0) {
        updatedItems[existingItem].quantity = quantity;
      } else {
        updatedItems.splice(existingItem, 1);
      }
    } else if (quantity > 0) {
      const newItem = { ...product, quantity: 1 };
      updatedItems.push(newItem);
    }

    setOrderItems(updatedItems);
    localStorage.setItem('orderItems', JSON.stringify(updatedItems));
  };

  useEffect(() => {
    const Data = async () => {
      const menuData = await Api();
      setMenu(menuData);
    };
    Data();
  }, []);

  const handleMenuType = (menuType) => {
    setSelectedMenu(menuType);
  };

  return (
    <div className={BreakfastCSS.waiter}>
      <Header />
      
      <TopBar onMenuTypeChange={handleMenuType} />
      <div className={BreakfastCSS.container}>
      <div className={BreakfastCSS.menuTable}>
        <MenuTable menu={menu} selectedMenu={selectedMenu} addToOrder={addToOrder} />
      </div>
      <div className={BreakfastCSS.UserOrder}>
      <UserOrder
        orderItems={orderItems}
        setOrderItems={setOrderItems}
        customerName={customerName}
        setCustomerName={setCustomerName}
      />
       </div>
      </div>
    </div>
  );
}
