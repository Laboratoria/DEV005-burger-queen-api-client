



// import React from "react";

// function DeliveredOrders({ deliveredOrders, handleOrderClick }) {
//   if (!deliveredOrders) {
//     // Si deliveredOrders es undefined, muestra un mensaje de carga o realiza otra acción apropiada
//     return <p>Cargando...</p>;
//   }

//   return (
//     <div className="Total-delivering-container">
//       {deliveredOrders.map((order) => (
//         <button
//           key={order.id}
//           className="delivering-container"
//           onClick={() => handleOrderClick(order)}
//         >
          
//           {order.id}
       
//         </button>
//       ))}
//     </div>
//   );
// }

// export default DeliveredOrders;





import React from "react";


function DeliveredOrders({ deliveredOrders, handleOrderClick }) {
  if (!deliveredOrders) {
    console.log("deliveredOrders es nulo o indefinido");
    return <p>Cargando...</p>;
  }

  return (
    <div className="Total-delivering-container">
      {deliveredOrders.map((order) => {
        if (!order || !order.id) {
          console.log("order es nulo o no tiene propiedad 'id'", order);
          return null; 
        }

        return (
          <button
            key={order.id}
            className="delivering-container"
            onClick={() => handleOrderClick(order)}
          >
            {order.id}
          </button>
        );
      })}
    </div>
  );
}

export default DeliveredOrders;


// import React from "react";

// function DeliveredOrders() {
//   const deliveredOrders = JSON.parse(localStorage.getItem("deliveredOrders")) || [];

//   return (
//     <div className="Total-delivering-container">
//       {deliveredOrders.map((order) => (
//         <div className="delivering-container" key={order.id}>
//           {order.id}
//         </div>
//       ))}
//     </div>
//   );
// }

//  export default DeliveredOrders;
