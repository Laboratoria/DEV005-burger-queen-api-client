import React, { useState, useEffect } from "react";
import { getproduct } from "../../services/UseAxios";

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

  return (
      <div className="seccion-products">
        <div className="div-title">
          <h2 className="title">Breakfast and Lunch</h2>
        </div>
      
        <div className="div-products">
          {products.map((product) => (
            
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
              <button>Add</button>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Products;
