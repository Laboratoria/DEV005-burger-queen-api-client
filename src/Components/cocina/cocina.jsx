import React, { useEffect, useState } from "react";
import {
  getRequestOptions,
  getOrders,
  patchOrders,
} from "../../Services/UserService";
import "./estilo-cocina.css";
import LOGO from "../../img/LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import DeliveredOrders from "./DeliveredOrder";
function Timer({ orderId, startTime }) {
  const [actualTime, setActualTime] = useState(
    parseFloat(localStorage.getItem(`timerActualTime_${orderId}`)) || 0
  );
  useEffect(() => {
    if (startTime) {
      const intervalId = setInterval(() => {
        const currentTime = (Date.now() - Date.parse(startTime)) / 1000;
        setActualTime(currentTime);
        localStorage.setItem(
          `timerActualTime_${orderId}`,
          currentTime.toString()
        );
      }, 100);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [startTime, orderId]);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className="top-Time">
      <p className="timer">{formatTime(actualTime)}</p>
    </div>
  );
}
export default function Cocina() {
  const confirmOrderReady = (orderId) => {
    const isConfirmed = window.confirm("¿Esta lista la orden?");
    if (isConfirmed) {
      markOrderAsReady(orderId);
    }
  };
  const [apiOrders, setApiOrders] = useState([]);
  const [deliveredOrders, setDeliveredOrders] = useState(() => {
    const storedDeliveredOrders = localStorage.getItem("deliveredOrders");
    return storedDeliveredOrders ? JSON.parse(storedDeliveredOrders) : [];
  });
  useEffect(() => {
    const requestOptions = getRequestOptions("GET");
    getOrders(requestOptions)
      .then((data) => {
        const result = data.filter((i) => i.status === "pending");
        setApiOrders(result);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);
  const markOrderAsReady = (orderId) => {
    const requestOptions = getRequestOptions("PATCH");
    const patchData = {
      status: "delivering",
      dataEntry: new Date().toISOString(),
    };
    patchOrders(orderId, patchData, requestOptions)
      .then(() => {
        // Mueve la orden de apiOrders a deliveredOrders
        const updatedApiOrders = apiOrders.filter(
          (order) => order.id !== orderId
        );
        const deliveredOrder = apiOrders.find((order) => order.id === orderId);
        setApiOrders(updatedApiOrders);
        setDeliveredOrders([...deliveredOrders, deliveredOrder]);
        // Almacena deliveredOrders en el almacenamiento local
        localStorage.setItem("deliveredOrders", JSON.stringify([...deliveredOrders, deliveredOrder]));
      })
      .catch((error) => {
        console.error("Error updating order status:", error);
      });
  };
  return (
    <div className="all-cocina">
      <div className="logo-container">
        <h1 className="logo">BURGUER QUEEN</h1>
        <img src={LOGO} className="logo1" alt="Burger Queen Logo" />
      </div>
      <div className="all-pending-orders">
      <h2 className="titulo2">Pedidos</h2>
        {apiOrders.map((order) => (
          <div className="pending-order-container">
            <div className="container-comida" key={order.id}>
              <div className="top-Order">
                <div className="top-NumOrder">
                  <p className="numOrder">Orden #{order.id}</p>
                </div>
                <div className="top-Clock">
                  <FontAwesomeIcon icon={faClock} className="clock" />
                </div>
                <div className="top-Time">
                  <Timer orderId={order.id} startTime={order.dataEntry} />
                </div>
              </div>
              <div className="total-pedido-Order"> 
             {order.products?.map((product, productIndex) => (
             
                <div className="pedido-Order" key={productIndex}>
                  <p className="cantidad-Orden">{product.qty}</p>
                  <p className="prod-Orden">{product.product.name}</p>
                </div>
                
              ))}
              </div>
            </div>
            <div className="container-btnCocina">
              {!order.ready ? (
                <button
                  className="btnCocina"
                  onClick={() => confirmOrderReady(order.id)}
                >
                  Listo
                </button>
              ) : (
                <p>Orden lista</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="all-delivered-orders">
        <h2>Órdenes Entregadas</h2>
        <div className="all-delivered-container">
          <DeliveredOrders deliveredOrders={deliveredOrders} />
        </div>
      </div>
    </div>
  );
}



