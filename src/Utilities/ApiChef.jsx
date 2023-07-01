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
        { status: "delivered", deliveryTime: new Date().toISOString() },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      const updatedOrders = orders.map((order) => {
        if (order.id === orderId) {
          return { ...order, status: "delivered", deliveryTime: new Date().toISOString() };
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

/* import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderCSS from "../Style/order.module.css";
import OrderTable from "../components/OrderTableChef";

const ApiChef = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    Data();
  }, []);

  const Data = async () => {
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
        { status: "delivered" },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
  
      const updatedOrders = orders.map((order) => {
        if (order.id === orderId) {
          return { ...order, status: "delivered" };
        }
        return order;
      });
  
      setOrders(updatedOrders);
      const deliveryTime = new Date().toLocaleTimeString();
      setDeliveryTime(deliveryTime);
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
 */


/* import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderCSS from "../Style/order.module.css";

const ApiChef = () => {
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

  const handleDelivery = async (orderId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `http://localhost:8080/orders/${orderId}`,
        { status: "delivered" },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      const updatedOrders = orders.map((order) => {
        if (order.id === orderId) {
          return { ...order, status: "delivered" };
        }
        return order;
      });

      setOrders(updatedOrders);
      console.log("Pedido entregado:", orderId);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pendingOrders = orders.filter((order) => order.status === "pending");

  return (
    <div className={OrderCSS.tableOrder}>
      {pendingOrders.map((order) => (
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
              <tr>
                <td colSpan="2" className={OrderCSS.buttonCell}>
                  <button
                    onClick={() => {
                      handleDelivery(order.id);
                    }}
                  >
                    Entregar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ApiChef;
 */