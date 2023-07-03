import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderCSS from "../Style/order.module.css";
import OrderTable from "../components/OrderTableChef";

const ApiChef = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8080/orders", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const ORDERS = response.data;
      setOrders(ORDERS);
    } catch (error) {
      console.error(error);
      setOrders([]);
    }
  };

  const handleDelivery = async (orderId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `http://localhost:8080/orders/${orderId}`,
        { status: "delivering", deliveryTime: new Date().toISOString() },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      const updatedOrders = orders.map((order) => {
        if (order.id === orderId) {
          return { ...order, status: "delivering", deliveryTime: new Date().toISOString() };
        }
        return order;
      });

      setOrders(updatedOrders);
      console.log("Pedido entregado:", orderId);
    } catch (error) {
      console.error(error);
    }
  };

  const pendingOrders = orders.filter((order) => order.status === "pending");

  return (
    <div className={OrderCSS.tableOrder}>
      {pendingOrders.map((order) => (
        <OrderTable key={order.id} order={order} handleDelivery={handleDelivery} />
      ))}
    </div>
  );
};

export default ApiChef;
