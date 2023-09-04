

import React from "react";

function DeliveredOrders({ deliveredOrders }) {
  return (

      
      <div className="Total-delivering-container">
        {deliveredOrders.map((order) => (
          <div className="delivering-container" key={order.id}>
            {order.id}
          </div>
        ))}
      </div>
  
  );
}

export default DeliveredOrders;