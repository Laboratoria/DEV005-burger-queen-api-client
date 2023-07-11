import React from 'react';
import CardOrderCheff from '../cardElement/CardOrderCheff'
import './cardListProductCheff.css'

export default function cardListProductCheff({ orders, changeStatus, showButton, text }) {
  return (
    <div className='box-order-cheff'>
      {orders.map((order, index) => {
        return <div className='card-order-cheff' key={index}>
          <CardOrderCheff
            client={order.client}
            items={order.products}
          />
          <div className='time-attended'  >
            <p>Entry: <span>{new Date(order.dataEntry).toLocaleTimeString()}</span></p>

            {order.status !== 'pending' && <p>Output: <span>{new Date(order.dateProcessed).toLocaleTimeString()}</span></p>}
            {showButton && <button className='btn-attended' onClick={() => changeStatus(order)}>{text}</button>}

          </div>
        </div>
      })}


    </div>
  )
}