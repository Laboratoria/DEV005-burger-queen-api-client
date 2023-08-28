import { useState, useEffect } from "react";
import { getOrder } from "../../../services/UseAxios";


function  Delivered() {

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
const deliveredOrders = orders.filter(order => order.status === 'delivered');

  return (
    <div className="orders-in-process">
      <ul>
        {deliveredOrders.map((order) => (
          <li key={order.id}>
            <div className="info-row top">
              <p>#00{order.id}</p>
              <p>{order.client}</p>
              <p>{order.table}</p>
              <p>✔</p>
             
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

export default Delivered;