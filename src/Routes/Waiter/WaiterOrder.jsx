import OrderCSS from "../../Style/order.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

function OrderHeader({ order }) {
  return (
    <th className={OrderCSS.tableHeader}>
      <span>Cliente: {order.client}</span>
      <span>Orden N°: {order.id}</span>
      <span>{new Date(order.dataEntry).toLocaleTimeString()}
      </span>
    </th>
  );
}

function StatusButton({ order, localStatus, handleStatusChange }) {
  const replaceStatus = (status) => {
    return status === "delivering"
      ? "Retirar"
      : status === "pending"
      ? "Pendiente"
      : status === "delivered"
      ? "Entregado"
      : status;
  };

  return (
    <td className={OrderCSS.status} data-status={localStatus}>
      {localStatus === "delivering" ? (
        <button
          className={OrderCSS.statusButton}
          data-status={localStatus}
          onClick={handleStatusChange}>Retirar</button>
      ) : (
        <span className={OrderCSS.status} data-status={localStatus}>
          {replaceStatus(localStatus)}
        </span>
      )}
    </td>
  );
}

function HeaderNewOrderTable({ order }) {
  const [localStatus, setLocalStatus] = useState(order.status);

  const handleStatusChange = async () => {
    if (localStatus === "delivering") {
      try {
        const token = localStorage.getItem("token");
        await axios.patch(
          `http://localhost:8080/orders/${order.id}`,
          { status: "delivered" },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        setLocalStatus("delivered");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <tr>
      <OrderHeader order={order} />
      <StatusButton
        order={order}
        localStatus={localStatus}
        handleStatusChange={handleStatusChange}
      />
    </tr>
  );
}

function NewOrderItem({ product }) {
  
  return (
    <tr key={product.product.id}>
      <td className={OrderCSS.tableHeader}>
        <span>x{product.qty}</span>
        <span>{product.product.name}</span>
      </td>
    </tr>
  );
}

function NewOrderTable({ orders }) {
  const sortedOrders = orders.sort((a, b) => {
    if (a.status === "delivering") return -1;
    if (a.status === "pending" && b.status !== "delivering") return -1;
    return 1;
  });
  return (
    <div className={OrderCSS.tableOrder}>
      {sortedOrders.map((order) => (
        <div key={order.id}>
          <table>
            <thead>
              <HeaderNewOrderTable order={order} />
            </thead>
            <tbody>
              {order.products.map((product) => (
                <NewOrderItem
                  product={product}
                  order={order}
                  key={product.product.id}
                />
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
        <Button className={OrderCSS.break} text="Desayuno" />
      </NavLink>
      <NavLink to="/breakfast">
        <Button className={OrderCSS.break} text="Almuerzo" />
      </NavLink>
      <NavLink to="/order">
        <Button className={OrderCSS.break} text="Pedidos" />
      </NavLink>
    </div>
  );
}

function MainContent({ orders }) {
  return (
    <div>
      <BtnMenu />
      <NewOrderTable orders={orders} />
    </div>
  );
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

    getData();
  }, []);

  return <AllWaiterOrderView orders={orders} />;
}
