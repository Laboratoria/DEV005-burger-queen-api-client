import { useState, useEffect } from "react";
import apiRequest from "../../services/apiRequest.js";
import "./ordersCheck.css";

const OrdersCheck = () => {


  // Función para cambiar el estado de la orden a 'delivery'
  const handleOrderReady = async (orderId) => {
    try {
      const updatedOrders = orders.map((order) => {
        if (order.id === orderId) {
          return { ...order, status: "delivery" };
        }
        return order;
      });

      await apiRequest(`/orders/${orderId}`, "PUT", {
        status: "delivery",
      });

      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return(


  )}

  export default OrdersCheck;