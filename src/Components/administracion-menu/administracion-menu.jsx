import React, { useState, useEffect } from "react";
import LOGO from "../../img/LOGO.png";
import "./administracion-menu.css";
import { getProducts2, addProduct, deleteProduct } from "../../Services/UserService";
  
export default function AdministracionMenu() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
      name: "",
      image: "",
      type: "",
      price: "",
    });

    useEffect(() => {
      getAllProducts();
    }, []);

    // funcion que obtiene la lista de productos
      const getAllProducts = () => {
      getProducts2()
        .then((response) => {
          if (response && response.length > 0) {
            setProducts(response); 
          }
                console.log("Products response:", response);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
      } 
      
      // Maneja las entradas en el Formulario y actualiza el estado de newProducts
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({
          ...newProduct,
          [name]: value,
        });
      };
    
      //función que agrega un nuevo producto
      const handleAddProduct = () => {
        // Para agregar el producto a la API y actualizar la lista local
        addProduct(newProduct)
          .then((response) => {
            if (response) {
              setProducts([...products, response]);
              setNewProduct({
                name: "",
                image: "",
                type: "",
                price: "",
              });
            }
          })
          .catch((error) => {
            console.error("Error adding product:", error);
          });
      };
    
     // Para eliminar el producto de la API y actualizar la lista local
      const handleDeleteProduct = (productId) => {
        deleteProduct(productId)
          .then(() => {
            const updatedProducts = products.filter((product) => product.id !== productId);
            setProducts(updatedProducts);
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
          });
      };
 
  return (
    <div className="main-container">
      <div className="logo-title-container">
        <h1 className="logo-admonMenu">BURGUER QUEEN</h1>
        <img src={LOGO} className="logo1-admonMenu" alt="Burger Queen Logo" />
      </div>

      <div className="content-container">
      <div className="left-container">
        <h2 className="container-title">PRODUCTOS</h2>
        <table className="product-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Imagen</th>
              <th>Tipo</th>
              <th>Precio</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="product-image-admon-menu">
                  <img
                    className="product-img-admon-menu"
                    src={product.image}
                    alt={product.name}
                  />
                </td>
                <td>{product.type}</td>
                <td>${product.price}</td>
                <td>
                  <button className="btnPapelera-admon-menu"
                  onClick={() => handleDeleteProduct(product.id)}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        <div className="right-container">
          <h2 className="container-title-right">AGREGAR PRODUCTO</h2>
          <div className="divsInput-admon-menu">
            <div className="add-admon-menu">
              <input
                className="input-admon-menu"
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                placeholder="Nombre del producto"
              />
            </div>
            <div className="add-admon-menu">
              <input 
                className="input-admon-menu"
                type="text"
                name="image"
                value={newProduct.image}
                onChange={handleInputChange}
                placeholder="URL de la imagen"
              />
            </div>
            <div className="add-admon-menu">
              <input
                className="input-admon-menu"
                type="text"
                name="type"
                value={newProduct.type}
                onChange={handleInputChange}
                placeholder="Tipo del producto"
              />
            </div>
            <div className="add-admon-menu">
              <input
                className="input-admon-menu"
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                placeholder="Precio del producto"
              />
            </div>
          </div>
          <button className="btnAdd-admon-menu" onClick={handleAddProduct}> Agregar </button>
        </div>
      </div>
    </div>
  );
}
