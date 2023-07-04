// OrderTable.jsx
import React from "react";
import OrderCSS from "../Style/order.module.css";

const OrderTable = ({ order, handleDelivery }) => {
  return (
    <div key={order.id}>
      <table>
        <thead>
          <tr>
            <th className={OrderCSS.tableHeader}>
            <span>Cliente: {order.client}</span>
              <span>Orden: {order.id}</span>
              <span> Hora de ingreso {new Date(order.dataEntry).toLocaleTimeString()}</span>
            </th>
            <th className={OrderCSS.tableHeader}>
            <button className={OrderCSS.btnDelivery} onClick={() => handleDelivery(order.id)}>Entregar</button>

            </th>
          </tr>
        </thead>
        <tbody>
          {order.products.map((product) => (
            <tr key={product.product.id}>
              <td>
              <span>x{product.qty}</span>
              <span>{product.product.name}</span>
              </td>
            {/*   <td className={OrderCSS.buttonPosition}>
              <button className={OrderCSS.btnDelivery} onClick={() => handleDelivery(order.id)}>Entregar</button>
            </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
