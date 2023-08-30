import { useState, useEffect } from "react";
import { getOrder, updateOrder } from "../../services/UseAxios";
import './ordersInProcess.css'

function  OrdersInProcess() {

  const [orders, setOrders] = useState([]);


  //obtener los pedidos de la API---------------------
  const fetchOrders = async () => {
    try {
      const response = await getOrder();
      //console.log(response, "TRAER ORDEN!!!!!!");

      setOrders(response);  
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

 
// MARCAR PEDIDOS READY---------------------------------
const handleOrderReady = async (orderId) => {
  try {
    const readyTime = new Date(); // tiempo en que se marca ready a la orden

    await updateOrder(orderId, 'ready', readyTime);

    // Actualiza localmente el estado de la orden para reflejar el cambio
    setOrders(prevOrders => 
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: 'ready',  readyTime: readyTime } : order
      )
    );
  } catch (error) {
    console.error("Error updating order status:", error);
    console.error("Response data:", error.response.data);
  }
};

//filtrar ordenes pendientes-------------------------------------------------------
const pendingOrders = orders.filter(order => order.status === 'pending');

  return (
    <div className="orders-in-process">
      <ul>
        {pendingOrders.map((order) => (
          <li key={order.id}>
            <div className="info-row top">
              <p>#00{order.id}</p>
              <p>{order.client}</p>
              <p>{order.table}</p>


              <button className="btn-delivered"
              onClick={() => handleOrderReady(order.id)}
              >Ready</button>
            </div>

            <div className="info-order">
              {order.products.map((product) => (
                <div className="info-row" key={product.id}>
                  <p>{product.qty}</p>
                  <p>{product.product.name}</p>
                  <p>${product.product.price}</p>
                </div>
              ))}  
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default OrdersInProcess;