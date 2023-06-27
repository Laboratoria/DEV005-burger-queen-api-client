import axios from "axios";
import { useEffect, useState } from "react";
import "../../Style/order.css";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";



function HeaderNewOrderTable({ order }) {
  return (
    <tr>
      <th>ID: {order.id} _____ Cliente: {order.client} _____ {order.dataEntry}</th>
    </tr>
  );
}

function NewOrderItem({ product }) {
  return (
    <tr key={product.product.id}>
      <td>x{product.qty} __ {product.product.name}</td>
    </tr>
  );
}

function NewOrderTable({ orders }) {
  return (
    <div className="tableOrder">
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
    <div className="topBar">
          <NavLink to= "/breakfast">
      <Button
        className="break"
        text="Desayuno"
      />
      </NavLink>
      <NavLink to= "/breakfast">
      <Button
        className="break"
        text="Almuerzo"
      />
      </NavLink>
      <NavLink to= "/order">
      <Button
        className="break"
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

function HeaderView() {
  return (
    <div>
      <Header prop="Marta" />
    </div>
  )
}

function AllWaiterOrderView({ orders }) {
  return (
    <div>
      <HeaderView />
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
