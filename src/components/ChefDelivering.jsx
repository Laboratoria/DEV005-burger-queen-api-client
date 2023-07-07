
import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderCSS from "../Style/order.module.css";
import calculateTime from "./calculateTime";

const DeliveredOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
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

  const deliveredOrders = orders.filter((order) => order.status === "delivering" || order.status === "delivered");
  const replaceStatus = (status) => {
    return status === "delivering"
      ? "Listo para servir"
      : status === "delivered"
      ? "Entregado"
      : status;
  };

  return (
    <div className={OrderCSS.tableOrder}>
      {deliveredOrders.map((order) => {
        const deliveryTime = new Date(order.deliveryTime).toLocaleTimeString();
        return (
          <div key={order.id}>
            <table>
              <thead>
                <tr>
                  <th className={`${OrderCSS.tableHeader} ${OrderCSS.tableHeaderLeft}`}>
                  <span>Cliente: {order.client}</span>
                    <span>Orden: {order.id}</span>
                    <span> realizada en {calculateTime(new Date(order.dataEntry), new Date(order.deliveryTime))}</span>
                   
                  </th>
                  <th className={OrderCSS.status} data-status={order.status}>
                  <span>  {replaceStatus(order.status)}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.products.map((product) => (
                  <tr key={product.product.id}>
                    <td>
                      x{product.qty} __ {product.product.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default DeliveredOrders;
