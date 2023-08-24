import React, { useState, useEffect } from "react";
import { getOrder } from "../../../services/UseAxios";

import "./orders.css";

function ReadyToDeliver() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await getOrder();
      console.log(response, "clinica");
   
      
      setOrders(response);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="ready-to-deliver">
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <div className="info-row top">
              <p>#00{order.id}</p>
              <p>{order.client}</p>
              <p>{order.table}</p>
              <button className="btn-delivered">Delivered</button>
            </div>

            <div className="info-order">
              {order.products.map((product) => (
                <div className="info-row" key={product.id}>
                  <p>{product.qty}</p>
                  <p>{product.product.name}</p>
                  <p>${product.product.price}</p>
                </div>
              ))}
              <div>
                Total: ${order?.totalPrice}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadyToDeliver;