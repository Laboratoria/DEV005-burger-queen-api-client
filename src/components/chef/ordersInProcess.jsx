import { useState, useEffect } from "react";
import { getOrder, updateOrder } from "../../services/UseAxios";
import './ordersInProcess.css'
import Swal from "sweetalert2";

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
  const shouldMarkOrderReady = await Swal.fire({
    title: 'Mark Order as Ready',
    text: 'Are you sure you want to mark this order as ready?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085D6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  });

  if (shouldMarkOrderReady.isConfirmed) {
    try {
      const readyTime = new Date(); // tiempo en que se marca ready a la orden

      await updateOrder(orderId, 'ready', readyTime);

      // Actualiza localmente el estado de la orden para reflejar el cambio
      setOrders(prevOrders => 
        prevOrders.map(order =>
          order.id === orderId ? { ...order, status: 'ready',  readyTime: readyTime } : order
        )
      );

      Swal.fire({
        title: 'Order marked as ready',
        icon: 'success',
        timer: 2000, 
        showConfirmButton: false 
      });
    } catch (error) {
      console.error("Error updating order status:", error);
      console.error("Response data:", error.response.data);
      Swal.fire('Error', 'Something went wrong while marking the order as ready', 'error');
    }
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