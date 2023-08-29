import React, { useEffect, useState } from "react";
import { getRequestOptions, getOrders, patchOrders } from "../../Services/UserService";
import "./estilo-cocina.css";
import LOGO from "../../img/LOGO.png";

function Timer({ orderId, startTime }) {

  const [actualTime, setActualTime] = useState(
    parseFloat(localStorage.getItem(`timerActualTime_${orderId}`)) || 0
  );

  useEffect(() => {
    if (startTime) {
      const intervalId = setInterval(() => {
        const currentTime = (Date.now() - Date.parse(startTime)) / 1000;
        setActualTime(currentTime);
        localStorage.setItem(`timerActualTime_${orderId}`, currentTime.toString());
      }, 100);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [startTime, orderId]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="top-Time">
      <p className="timer">{formatTime(actualTime)}</p>
    </div>
  );
}


export default function Cocina() {
  const [apiOrders, setApiOrders] = useState([]);
  const [deliveredOrders, setDeliveredOrders] = useState([]);

  useEffect(() => {
    const requestOptions = getRequestOptions("GET");
    getOrders(requestOptions)
      .then((data) => {
        const result = data.filter((i) => i.status === "pending");

        setApiOrders(result);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  const markOrderAsReady = (orderId) => {
    const requestOptions = getRequestOptions("PATCH");
    const patchData = {
      status: "delivered",
      //dataEntry: new Date().toLocaleString(),
      dataEntry: new Date().toISOString(),
    };
    patchOrders(orderId, patchData, requestOptions)
      .then(() => {
        setApiOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
        setDeliveredOrders((prevDeliveredOrders) => [
          ...prevDeliveredOrders,
          apiOrders.find((order) => order.id === orderId),
        ]);
      })
      .catch((error) => {
        console.error("Error updating order status:", error);
      });
  };

  const confirmOrderReady = (orderId) => {
    const isConfirmed = window.confirm("¿Esta lista la orden?");
    if (isConfirmed) {
      markOrderAsReady(orderId);
    }
  };

  return (
    <>
      <div className="logo-container">
        <h1 className="logo">BURGUER QUEEN</h1>
        <img src={LOGO} className="logo1" alt="Burger Queen Logo" />
      </div>
      <h1>Pedidos</h1>
      <div className="Todo-Order">
        {apiOrders.map((order) => (
                <div className="Container-Order">

          <div className="container-comida" key={order.id}>
            <div className="top-Order">
              <div className="top-NumOrder">
                <p className="numOrder">Orden #{order.id}</p>
              </div>
              <Timer
                orderId={order.id}
                startTime={order.dataEntry}
              />
              {/* <Timer
                orderId={order.id}
                startTime={order.ready ? null : parseFloat(localStorage.getItem(`timerStartTime_${order.id}`)) || Date.now()}
              /> */}
            </div>
            {order.products.map((product, productIndex) => (
              <div className="pedido-Order" key={productIndex}>
                <p className="cantidad-Orden">{product.qty}</p>
                <p className="prod-Orden">{product.product.name}</p>
              </div>
            ))}
            {!order.ready ? (
              <button className="btnCocina" onClick={() => confirmOrderReady(order.id)}>
                Listo
              </button>
            ) : (
              <p>Orden lista</p>
            )}
          </div>
          </div>
        ))}
      </div>
      <div className="Delivered-Orders">
        <h1>Órdenes Entregadas</h1>
        {deliveredOrders.map((order) => (
          <div className="delivered-container" key={order.id}>
            {order.id}
          </div>
        ))}
      </div>
    </>
  );
}









// import React, { useEffect, useState, useRef  } from "react";
// import { getRequestOptions, getOrders } from "../../Services/UserService";
// import "./estilo-cocina.css";
// import LOGO from "../../img/LOGO.png";

// function Timer() {
//   const [actualTime, setActualTime] = useState(0);
//   const [btnPlayPause, setBtnPlayPause] = useState("Play");
//   const counterRef = useRef(null);

//   const initTimer = () => {
//     if (counterRef.current) {
//       pauseTimer();
//       setBtnPlayPause("Play");
//     } else {
//       counterRef.current = setInterval(() => {
//         setActualTime((prevTime) => prevTime + 0.1);
//       }, 100);
//       setBtnPlayPause("Pause");
//     }
//   };

//   const pauseTimer = () => {
//     clearInterval(counterRef.current);
//     counterRef.current = null;
//   };

//   const clearTimer = () => {
//     setActualTime(0);
//     clearInterval(counterRef.current);
//     counterRef.current = null;
//     setBtnPlayPause("Play");
//   };

//   return (
//     <div className="timer">
//       <div className="time">
//         <h2>{actualTime.toFixed(2)}</h2>
//       </div>
//       <div className="btns">
//         <input
//           type="button"
//           value={btnPlayPause}
//           onClick={initTimer}
//         />
//         <input type="button" value="Clean" onClick={clearTimer} />
//       </div>
//     </div>
//   );
// }


// export default function Cocina() {
//   const [apiOrders, setApiOrders] = useState([]);

//   useEffect(() => {
//     const requestOptions = getRequestOptions("GET");
//     getOrders(requestOptions)
//       .then((data) => {
//        // console.log(data);
//         const result = data.filter(i => i.status === 'pending')
//         setApiOrders(result);
//       })
//       .catch((error) => {
//         console.error("Error fetching orders:", error);
//       });
//   }, []);
// //console.log("Imprimir:", apiOrders);






//   return (
//     <>
//       <div className="logo-container">
//         <h1 className="logo">BURGUER QUEEN</h1>
//         <img src={LOGO} className="logo1" alt="Burger Queen Logo" />
//       </div>
//       <h1>Pedidos</h1>
//       {apiOrders && apiOrders?.map((order) => (

//         <div className="Container-Order" key={order.id}>
//           <p className="numOrder">Orden #{order.id}</p>
//           <Timer />
//           {/* <p>Cliente: {order.client}</p> */}
//           {order?.products?.map((productInfo, index) =>{
//           //console.log( productInfo)
//           return   (
//             <div className = "productos-Orden" key={index}>
//               <div className= "cantidad-Orden"><p>{productInfo.qty}</p> </div>
//               <div className= "prod-Orden"><p>{productInfo?.product?.name}</p> </div>
//             </div>
//           )})}
          
//           <button
//                       className="btnCocina"
//                       onClick={() => ("listo")}
//                     >
//                       LISTO
//                     </button>
//         </div>

//       ))}

//     </>
//   );
// }





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




