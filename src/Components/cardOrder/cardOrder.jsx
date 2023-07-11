import React from 'react';
import Delete from '../../assets/delete.png';
import './cardOrder.css';

export default function CardOrder({ product, price, item, onClick }) {
  return (
    <div className="product-order-list" >

      <div className='item-product'>
        <p className='item-cardOrder'>{item}</p>
        <p className='product'>{product}</p>
      </div>

      <div className='price-delete'  >
        <p><span className='symbol'>$</span> <span className='price'>{price}</span></p>
        <figure onClick={onClick}>
          <img src={Delete} alt="delete" data-testid="delete-button" />
        </figure>
      </div>

    </div>
  );
}