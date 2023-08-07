import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BreakfastCSS from "../Style/breakfast.module.css";

// Mostrar la orden del usuario
const UserOrder = ({ orderItems, setOrderItems, customerName, setCustomerName }) => {
  useEffect(() => {
    const storedOrderItems = localStorage.getItem('orderItems');
    if (storedOrderItems) {
      try {
        const parsedOrderItems = JSON.parse(storedOrderItems);
        setOrderItems(parsedOrderItems);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
  }, [setOrderItems]);

  const addToOrder = (product, quantity) => {
    const item = { ...product, quantity };
    const updatedItems = orderItems.map((orderItem) => {
      if (orderItem.id === item.id) {
        return { ...orderItem, quantity };
      }
      return orderItem;
    });
    setOrderItems(updatedItems);
    localStorage.setItem('orderItems', JSON.stringify(updatedItems));
  };

  // Generar la orden
  const handleGenerateOrder = async () => {
    if (!customerName) {
      console.error("Debe ingresar el nombre del cliente");
      return;
    }

    const orderData = {
      userId: 1,
      client: customerName,
      products: orderItems.map((order) => ({
        qty: order.quantity,
        product: {
          id: order.id,
          name: order.name,
          price: order.price,
          typeFood: order.typeFood,
          dateEntry: order.dateEntry,
        },
      })),
      status: "pending",
      dataEntry: new Date().toISOString(),
    };

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8080/orders",
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log(orderData);
      if (response.status === 201) {
        console.log("Pedido enviado exitosamente");
      } else {
        console.error("Error al enviar el pedido:", response.status);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }

    setOrderItems([]);
    localStorage.removeItem("orderItems");
    setCustomerName("");
  };
  const formatName = (name) => {
    const truncatedName = name.substring(0, 10);
    const formattedName = truncatedName
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  
    return formattedName;
  };


  return (
    <div className={BreakfastCSS.orderSection}>
      <div className={BreakfastCSS.inputClientName}>
        <input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(formatName(e.target.value))}
          placeholder="Cliente"
        />
      </div>
      <ShowOrder orderItems={orderItems} />
      <div>
        <button className={`${BreakfastCSS.green} button`} onClick={handleGenerateOrder}>Generar Pedido</button>
      </div>
    </div>

  );
};

// Muestrar los elementos de la orden
const ShowOrder = ({ orderItems }) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    orderItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <div className={BreakfastCSS.tableBreakfast}>
      <table>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item) => (
            <ItemEntry key={item.id} item={item} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className={`${BreakfastCSS.right} ${BreakfastCSS.bold}`} colSpan="2">Total:</td>
            <td className={BreakfastCSS.bold} >${calculateTotalPrice()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

// Valor y cantidad de productos
const ItemEntry = ({ item }) => {
  return (
    <tr>
      <td className={BreakfastCSS.center}>{item.quantity}</td>
      <td>{item.name}</td>
      <td>${item.price * item.quantity}</td>
    </tr>
  );
};

export default UserOrder;