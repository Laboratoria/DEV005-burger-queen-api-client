import React, { useState, useEffect } from "react";
import axios from "axios";
import AdmiProducts from "../admi/admiproducts";
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(false);
  useEffect(() => {
    if (showProducts) {
      fetchProducts();
    }
  }, [showProducts]);
  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get("http://localhost:8080/products", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
      console.log("Mostrando los productos");
    } catch (error) {
      console.error(error);
    }
  };
  const handleShowProducts = () => {
    setShowProducts(true);
  };
  
  return (
    <>
      <table className="items-productslist">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Tipo</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
      </table>
      <div>
        <button onClick={handleShowProducts}>Productos</button>
        {showProducts && (
          <div>
            <h1>Lista de Productos</h1>
            {products && Array.isArray(products) && products.length > 0 ? (
              <AdmiProducts
                products={products}
                
              />
            ) : (
              <p>No hay productos disponibles.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default ProductsList;