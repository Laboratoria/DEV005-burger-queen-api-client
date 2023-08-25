import React, { useEffect, useState } from "react";
import { getRequestOptions, getOrders } from "../../Services/UserService";
import "./estilo-cocina.css";
import LOGO from "../../img/LOGO.png";

export default function Cocina() {
  const [apiOrders, setApiOrders] = useState([]);

  useEffect(() => {
    const requestOptions = getRequestOptions("GET");
    getOrders(requestOptions)
      .then((data) => {
        setApiOrders(data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <>
      <div className="logo-container">
        <h1 className="logo">BURGUER QUEEN</h1>
        <img src={LOGO} className="logo1" alt="Burger Queen Logo" />
      </div>
      <h1>Pedidos</h1>
      {/* {apiOrders.map((order) => (
        <div key={order.id}>
          <p>Número de Orden: {order.id}</p>
          <p>Cliente: {order.client}</p>
          {order.products.map((productInfo, index) => (
            <div key={index}>
              <p>Nombre: {productInfo.product.name}</p>
              <p>Cantidad: {productInfo.qty}</p>
            </div>
          ))}
        </div>
      ))} */}
    </>
  );
}





// import React, { useEffect, useState } from "react";
// import { getRequestOptions, getOrders } from "../../Services/UserService";
// import "./estilo-cocina.css";
// import LOGO from "../../img/LOGO.png";

// export default function Cocina() {
//   const [apiOrders, setApiOrders] = useState([]);
//   const [selectOrders, setSelectOrders] = useState({ orders: "" });
//   //const [state, dispatch] = useReducer(reducerCart, productsInitialState);

//   // ... Hook traer la Orden a la cocina
//   useEffect(() => {
//     const requestOptions = getRequestOptions("GET");
//     getOrders(selectOrders.products, requestOptions)
//       .then((data) => {
//         setApiOrders(data);
        
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   return (
//     <>
//       <div className="logo-container">
//         <h1 className="logo">BURGUER QUEEN</h1>
//         <img src={LOGO} className="logo1" alt="Burger Queen Logo" />
//       </div>
//       <h1>Pedidos</h1>
//       {apiOrders.products &&
//         apiOrders.products.map((productInfo, index) => (
//           <div key={index}>
//             <p>Número de Orden: {apiOrders.id}</p>
//             <p>Cliente: {apiOrders.client}</p>
//             <p>Nombre: {productInfo.product.product.name}</p>
//             <p>Cantidad: {productInfo.product.qty}</p>
//           console.log(apiOrders);

//           </div>
//         ))}
//     </>
//   );
  
// }  
            
// import React, { useEffect, useState } from "react";
// import { getRequestOptions, getOrders } from "../../Services/UserService";
// import "./estilo-cocina.css";
// import LOGO from "../../img/LOGO.png";

// export default function Cocina() {
//   const [apiOrders, setApiOrders] = useState([]);

//   useEffect(() => {
//     const requestOptions = getRequestOptions("GET");

//     getOrders(requestOptions)
//       .then((data) => {
//         setApiOrders(data);
//         console.log(data)
//       })
//       .catch((error) => {
//         console.error("Error fetching orders:", error);
//       });
//   }, []);

//   // const markOrderAsReady = async (orderId) => {
//   //   const requestOptions = getRequestOptions("PUT");

//   //   try {
//   //     const response = await fetch(`http://localhost:8080/orders/${orderId}`, requestOptions);
      
//   //     if (response.status === 200) {
//   //       const updatedOrders = [...apiOrders];
//   //       const orderIndex = updatedOrders.findIndex(order => order.id === orderId);
//   //       if (orderIndex !== -1) {
//   //         updatedOrders[orderIndex].ready = true;
//   //         setApiOrders(updatedOrders);
//   //       }
//   //     } else {
//   //       console.log("Error marking order as ready:", response.status);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error marking order as ready:", error);
//   //   }
//   // };

//   return (
//     <>
//       <div className="logo-container">
//         <h1 className="logo">BURGUER QUEEN</h1>
//         <img src={LOGO} className="logo1" alt="Burger Queen Logo" />
//       </div>
//       <h1>Pedidos</h1>
//          <div className="Container-Order">
//         {apiOrders.length > 0 ? (
//           apiOrders.map((order) => (
//             <div className="container-comida" key={order.id}>
//               <h2>Orden {order.id}</h2>
//               {order.products && order.products.length > 0 ? (
//                 order.products.map((product, productIndex) => (
//                   <div key={productIndex}>
//                     <p className="pedido-food">{product.product.name}</p>
//                     <p className="pedido-qty">Cantidad: {product.qty}</p>
//                   </div>
//                 ))
//               ) : (
//                 <p>No hay productos en esta orden</p>
//               )}
//               {!order.ready ? (
//                 <button
//                   className="btnCocina"
//                   onClick={() => markOrderAsReady(order.id)}
//                 >
//                   Listo
//                 </button>
//               ) : (
//                 <p>Orden lista</p>
//               )}
//             </div>
//           ))
//         ) : (
//           <p>No hay órdenes disponibles</p>
//         )}
//       </div>
//     </>
//   );
// }




