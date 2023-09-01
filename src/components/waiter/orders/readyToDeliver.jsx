import { useState, useEffect } from "react";
import { getOrder, updateOrder } from "../../../services/UseAxios";

import "./orders.css";

function ReadyToDeliver() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await getOrder();
      //console.log(response, "ORDERS READYTODELIVER");

      setOrders(response);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);


  // MARCAR PEDIDOS ENTREGADOS---------------------------------
const handleDelivered = async (orderId) => {
  try {
    await updateOrder(orderId, 'delivered');

    // Actualiza localmente el estado de la orden para reflejar el cambio
    setOrders(prevOrders => 
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: 'delivered' } : order
      )
    );
  } catch (error) {
    console.error("Error updating order status:", error);
    console.error("Response data:", error.response.data);
  }
};

  //filtar pedidos marcados en READY-------------------------------------------
  const ordersReadyToDeliver = orders.filter(order => order.status === 'ready');

  return (
    <div className="ready-to-deliver">
      <ul>
        {ordersReadyToDeliver.map((order) => (
          <li key={order.id}>
            <div className="info-row top">
              <p>#00{order.id}</p>
              <p>{order.client}</p>
              <p>{order.table}</p>
              <button 
              className="btn-delivered"
              onClick={() => handleDelivered(order.id)}
              >Delivered</button>
            </div>

            <div className="info-order">
              {order.products.map((product) => (
               
                <div className="info-row" key={product.id}>
                  <p>{product.qty}</p>
                  <p>{product.product.name}</p>
                  <p>${(product.product.price) * (product.qty)}</p>
                  
                </div>

                
               

              ))}

              <div className="info-total">
                <p>Total: ${order.total}</p>
              </div>
              

            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadyToDeliver;