import React from "react";

function ProductSection({ title, products, addToCart, hideErrorMessage }) {
  return (
    <div className="product-section">
      <h2>{title}</h2>
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <div className="precio-btn">
            <p className="precio">${product.price}</p>
            <button
              className="btnProduct"
              onClick={() => {
                addToCart(product.id);
                hideErrorMessage();
              }}
            >
              Agregar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSection; 