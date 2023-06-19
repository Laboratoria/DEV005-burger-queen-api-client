import React from 'react';
import './cardElement.css'


export default function CardElement({ title, price }) {

  

  return (
    <section className='card-element'>
      <p>{title}</p>
      <div className='group-price'>
        <p>$ <span>{price}</span></p>
        <button className='btn-card'>Add</button>
      </div>
    </section>
  );
}