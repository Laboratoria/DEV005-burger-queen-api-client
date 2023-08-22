import React, { useState, useEffect } from 'react';
import { getOrder } from "../../../services/UseAxios";

function ReadyToDeliver() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await getOrder();
      setOrders(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
     
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Client</th>
                  <th>Table</th>
                  <th>Data Entry</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#{order.id}</td>
                  <td>{order.client}</td>
                  <td>{order.table}</td>
                  <td>{order.dataEntry}</td>
                  <td>
                    <button>Delivered</button>
                  </td>
                </tr>
                {order.products.map(product => (
                  <tr key={product.id}>
                    <td>{product.qty}</td>
                    <td>{product.product.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadyToDeliver;
