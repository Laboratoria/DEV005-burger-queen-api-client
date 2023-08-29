import React from "react";
import "./addProducts.css";

const AddProductToOrder = ({
  addProduct,
  handleMinus,
  handlePlus,
  handleDelete,
}) => {
  return (
    <div className='orders-products'>
      {addProduct.map((product) => (
        <div className='addorders' key={product.id}>
          <div className='name'>{product.name}</div>
          <button className='minus-pluss' onClick={() => handleMinus(product)}>
            -
          </button>
          <div className='qty'>{product.qty}</div>
          <button className='minus-pluss' onClick={() => handlePlus(product)}>
            +
          </button>
          <div className='price'>${product.price * product.qty}</div>
          <button
            className='delete'
            onClick={() => handleDelete(product)}
          ></button>
        </div>
      ))}
    </div>
  );
};

export default AddProductToOrder;
