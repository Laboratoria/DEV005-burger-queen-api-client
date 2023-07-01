// OrderTable.jsx
import React from "react";
import OrderCSS from "../Style/order.module.css";

const OrderTable = ({ order, handleDelivery }) => {
  const deliveryTime = order.deliveryTime ? new Date(order.deliveryTime).toLocaleTimeString() : null;

  return (
    <div key={order.id}>
      <table>
        <thead>
          <tr>
            <th className={OrderCSS.tableHeader}>
              <span>ID: {order.id}</span>
              <span>Cliente: {order.client}</span>
              <span> Hora de ingreso. {new Date(order.dataEntry).toLocaleTimeString()}</span>
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
              <button onClick={() => handleDelivery(order.id)}>Entregar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
