
import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderCSS from "../Style/order.module.css";
import calculateTime from "../components/calculateTime";

const DeliveredOrders = () => {
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

  const deliveredOrders = orders.filter((order) => order.status === "delivered");

  return (
    <div className={OrderCSS.tableOrder}>
      {deliveredOrders.map((order) => {
        const deliveryTime = new Date(order.deliveryTime).toLocaleTimeString();
        return (
          <div key={order.id}>
            <table>
              <thead>
                <tr>
                  <th className={OrderCSS.tableHeader}>
                    <span>ID: {order.id}</span>
                    <span>Cliente: {order.client}</span>
                    {/* <span>{new Date(order.dataEntry).toLocaleTimeString()}</span> */}
                    <span> Orden realizada en {calculateTime(new Date(order.dataEntry), new Date(order.deliveryTime))}</span>
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


/* import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderCSS from "../Style/order.module.css";

const DeliveredOrders = () => {
  const [orders, setOrders] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  const deliveredOrders = orders.filter((order) => order.status === "delivered");

  return (
    <div className={OrderCSS.tableOrder}>
      {deliveredOrders.map((order) => (
        <div key={order.id}>
          <table>
            <thead>
              <tr>
                <th className={OrderCSS.tableHeader}>
                  <span>ID: {order.id}</span>
                  <span>Cliente: {order.client}</span>
                  <span>{new Date(order.dataEntry).toLocaleTimeString()}</span>
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
      ))}
    </div>
  );
};

export default DeliveredOrders;
 */