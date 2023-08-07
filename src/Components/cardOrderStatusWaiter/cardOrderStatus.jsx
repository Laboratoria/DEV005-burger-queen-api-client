import React from 'react';
import './cardOrderStatus.css';
import CardOrderDelivered from '../cardOrderStatusWaiter/cardOrderDelivered';


export default function cardOrderStatus({ orders, changeStatus, showButton, text }) {
  return (
    <div className='box-order-status container'>
      {orders.map((order, index) => {
        return <div className='box-card-button' key={index}>
          <CardOrderDelivered
            client={order.client}
            items={order.products}
          />
          <div className='time-attended-delivered'  >
            <p>Entry: <span>{new Date(order.dataEntry).toLocaleTimeString()}</span></p>
            {order.status !== 'pending' && <p>Output: <span>{new Date(order.dateProcessed).toLocaleTimeString()}</span></p>}
          </div>
          {showButton && <button className='btn-attended-delivered' onClick={() => changeStatus(order)}>{text}</button>}


        </div>
      })}


    </div>
  )
}