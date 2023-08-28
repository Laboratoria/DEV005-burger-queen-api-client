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

   // FUNCION PARA EL TIEMPO DE LA ORDEN-------------------------
   function calculateOrderTime(startTime, readyTime) {
    const startDateTime = new Date(startTime);
    const readyDateTime = new Date(readyTime);

    const orderTimeDifference = readyDateTime - startDateTime;
    const seconds = Math.floor(orderTimeDifference / 1000);
    const minutes = Math.trunc(seconds / 60);
    const remainingSeconds = seconds % 60;
    return ` Time ${minutes}:${remainingSeconds}`;
  }
  

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
              <p>{calculateOrderTime(order.startTime, order.readyTime)}</p>
              {/* {console.log((order.startTime))}
              {console.log((order.readyTime))} */}
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