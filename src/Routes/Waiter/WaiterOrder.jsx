import OrderCSS from "../../Style/order.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";



function HeaderNewOrderTable({ order }) {
  const replaceStatus = (status) => {
    return status === "delivering" ? "Listo" : status === "pending" ? "Pendiente" : status;
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
function NewOrderItem({ product, order  }) {
  const [isDelivered, setIsDelivered] = useState(false);

  const handleDelivery = async () => {
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
      setIsDelivered(true);
      order.status = "delivered";
      console.log(product);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <tr key={product.product.id}>
      <td className={OrderCSS.tableHeader}>
        <span>x{product.qty}</span>
        <span>{product.product.name}</span>
        {order.status === "delivering" && !isDelivered && (
          <button
            style={{ backgroundColor: 'red', color: 'white' }}
            onClick={handleDelivery}
            text="Entregado" />
        )}
       
        {order.status === "delivered" && <span>Entregado</span>}
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
                <NewOrderItem
                  product={product}
                  order={order}
                  key={product.product.id}
                  orderId={order.id} // Agrega el prop `orderId` con el valor de `order.id`
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
  const [deliveryStatus, setDeliveryStatus] = useState("");
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
