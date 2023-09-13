import { useState, useEffect } from "react";
import { getOrder, updateOrder } from "../../../services/UseAxios";
import Swal from "sweetalert2";

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
    const shouldMarkOrderDelivered = await Swal.fire({
      title: 'Mark Order as Delivered',
      text: 'Are you sure you want to mark this order as delivered?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    });
  
    if (shouldMarkOrderDelivered.isConfirmed) {
      try {
        await updateOrder(orderId, 'delivered');
  
        // Actualiza localmente el estado de la orden para reflejar el cambio
        setOrders(prevOrders => 
          prevOrders.map(order =>
            order.id === orderId ? { ...order, status: 'delivered' } : order
          )
        );
  
        Swal.fire({
          title: 'Order marked as delivered',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      } catch (error) {
        console.error("Error updating order status:", error);
        console.error("Response data:", error.response.data);
        Swal.fire('Error', 'Something went wrong while marking the order as delivered', 'error');
      }
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