import { useState, useEffect } from "react";
import { getOrder } from "../../services/UseAxios";
import './ordersInProcess.css'

function  OrdersReady() {

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await getOrder();
      //console.log(response, "TRAER ORDEN READY!!!!!!");
   
      
      setOrders(response);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);


//filtrar ordenes pendientes 
const readyOrders = orders.filter(order => order.status === 'ready');

  return (
    <div className="orders-in-process">
      <ul>
        {readyOrders.map((order) => (
          <li key={order.id}>
            <div className="info-row top">
              <p>#00{order.id}</p>
              <p>{order.client}</p>
              <p>{order.table}</p>
              <p>Time:</p>
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


export default OrdersReady;