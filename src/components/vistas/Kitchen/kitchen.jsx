import React from "react";
import Banner from "../../banner/banner.jsx";
import OrdersList from "../../OrdersList/OrdersList.jsx";
import "./kitchen.css";

const Kitchen = () => {
  return (
    <div>
      <Banner />
      <div className='pending-check'>
        <p>Pedidos Pendientes</p>
        <p>Pedidos Listos</p>
      </div>
      <div className='containerOrders'>
        <div className='container-pending'>
          <OrdersList />
        </div>
        <div className='container-check'></div>
      </div>
    </div>
  );
};
export default Kitchen;
