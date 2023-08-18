<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { getproduct } from "../../services/UseAxios";
import './products.css'

function Products() {
  const [products, setProducts] = useState([]);
 
  
=======
import Buttons from "../Buttons/Buttons";

import "./products.css";
>>>>>>> 395cf4e62653c47f7983c5742915cb76f84f91f8

function Products({ productType, products, handlerAddProduct }) {
  const filteredProducts = products.filter(
    (product) => product.type === productType
  );

  const [add, setAdd] = useState(0);

  return (
<<<<<<< HEAD
    <div className="div-products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <div className="product-description">
            <div className="div-img">
              <img className="img" width="150px" height="150px" src={product.image} alt={product.name} />
            </div>
            <div className="div-title">
              <p>{product.name}</p>
            </div>
            <div className="div-price">
              <p>${product.price}</p>
            </div>
            

            <button onClick={() => setAdd(add + 1)}>Add</button>        
          </div>
          <div><p>{add}</p></div>
          
        </div>
      ))}
=======
    <div className="seccion-products">
      <div className="div-products">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <div>
              <p>{product.name}</p>
            </div>
            <div>
              <p>{product.price}</p>
            </div>
            <button onClick={() => handlerAddProduct(product)}>Add</button>
          </div>
        ))}
      </div>
>>>>>>> 395cf4e62653c47f7983c5742915cb76f84f91f8
    </div>
  );
}

export default Products;
