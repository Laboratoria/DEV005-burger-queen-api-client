import React from 'react';
import './cardElement.css'


export default function CardElement({ title, image, price, onClick, index }) {

  return (
    <section className='card-element'>
      <p>{title}</p>
      <img src={image} />
      <div className='group-price'>
        <p>$ <span>{price}</span></p>
        <button onClick={() => onClick(index)} className='btn-card' data-testid="add-button">Add</button>
      </div>
    </section>
  );
}