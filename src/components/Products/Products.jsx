import React, { useState, useEffect } from "react";
import { getproduct } from "../../services/UseAxios";
import './products.css'

function Products() {
  const [products, setProducts] = useState([]);
 
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getproduct();
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const [add, setAdd] = useState(0);

  return (
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
    </div>
  );
}

export default Products;
