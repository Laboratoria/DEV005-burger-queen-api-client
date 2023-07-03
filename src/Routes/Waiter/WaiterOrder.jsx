import OrderCSS from "../../Style/order.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";



function HeaderNewOrderTable({ order }) {
  const replaceStatus = (status) => {
    return status === "delivered" ? "Listo" : status === "pending" ? "Pendiente" : status;
  };
  return (
    <tr>
      <th className={OrderCSS.tableHeader}>
      <span>Cliente: {order.client}</span>
        <span>Orden N°: {order.id}</span>
        <span> realizada a las {new Date(order.dataEntry).toLocaleTimeString()}</span>
        <span> {replaceStatus(order.status)}</span>
      </th>
    </tr>
  );
}

function NewOrderItem({ product }) {
  return (
    <tr key={product.product.id}>
      <td className={OrderCSS.tableHeader}>
        <span>x{product.qty}</span>
        <span>{product.product.name}</span>
        <span>{product.status}</span>
      </td>
    </tr>
  );
}

function NewOrderTable({ orders }) {
  return (
    <div className={OrderCSS.tableOrder}>
      {orders.map((order) => (
        <div key={order.id}>
          <table>
            <thead>
              <HeaderNewOrderTable order={order} />
            </thead>
            <tbody>
              {order.products.map((product) => (
                <NewOrderItem product={product} key={product.product.id} />
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

function BtnMenu() {
  return (
    <div className={OrderCSS.topBar}>
      <NavLink to="/breakfast">
        <Button
          className={OrderCSS.break}
          text="Desayuno"
        />
      </NavLink>
      <NavLink to="/breakfast">
        <Button
          className={OrderCSS.break}
          text="Almuerzo"
        />
      </NavLink>
      <NavLink to="/order">
        <Button
          className={OrderCSS.break}
          text="Pedidos"
        />
      </NavLink>
    </div>
  )
}

function MainContent({ orders }) {
  return (
    <div>
      <BtnMenu />
      <NewOrderTable orders={orders} />
    </div>
  )
}


function AllWaiterOrderView({ orders }) {
  return (
    <div>
       <Header />
      <MainContent orders={orders} />
    </div>
  );
}

export default function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
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

    fetchData();
  }, []);

  return <AllWaiterOrderView orders={orders} />;
}
