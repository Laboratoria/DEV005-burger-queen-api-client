import { useState, useEffect } from "react";
import apiRequest from "../../services/apiRequest.js";
import "./ordersList.css";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    apiRequest("/orders", "GET").then((data) => {
      setOrders(data);
    });
  }, []);

  // funcion para calcular tiempo de preparacion desde orden generada
  function calculateElapsedTime(dateEntry) {
    const currentTime = new Date();
    const elapsedTime = currentTime - new Date(dateEntry);
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    return `${hours} : ${minutes}: ${seconds} `;
  }

  useEffect(() => {
    function updateElapsedTime() {
      setOrders((prevOrders) =>
        prevOrders.map((order) => ({
          ...order,
          elapsedTime: calculateElapsedTime(order.dateEntry),
        }))
      );
      requestAnimationFrame(updateElapsedTime);
    }
    updateElapsedTime();
  }, []);

  // Ordenar las órdenes de más antiguo a más nuevo al cambiar el estado
  const sortedOrders = [...orders].sort(
    (a, b) => new Date(a.dateEntry) - new Date(b.dateEntry)
  );
  // Función para cambiar el estado de la orden a 'delivery'
  const handleOrderReady = async (orderId) => {
    try {
      const updatedOrders = orders.map((order) => {
        if (order.id === orderId) {
          return { ...order, status: "delivery" };
        }
        return order;
      });

      await apiRequest(`/orders/${orderId}`, "PATCH", {
        status: "Lista para entrega",
      });

      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div className='order-list'>
      {sortedOrders
        .filter((order) => order.status === "Pendiente")
        .map((order) => (
          <div className='orderList' key={order.id}>
            <div className='order-header'>
              <div className='client-table'>Mesa n°{order.table}</div>
              <div className='date'>
                {calculateElapsedTime(order.dateEntry)}
              </div>
            </div>
            <div className='order-content'>
              <div className='products-list'>
                <h4>Detalles del pedido:</h4>
                <div className='custom-list'>
                  {order.products.map((productItem, index) => (
                    <div key={index} className='custom-list-item'>
                      {productItem.qty} - {productItem.product.name}
                    </div>
                  ))}
                </div>
              </div>
              <button
                className='btn-check'
                onClick={() => handleOrderReady(order.id)}
              >
                Pedido Listo
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
export default OrdersList;
