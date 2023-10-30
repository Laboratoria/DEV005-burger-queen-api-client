import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LOGO from "../../img/LOGO.png";
import "./administracion-menu.css";
import { getProducts2, addProduct, deleteProduct, updateProduct } from "../../Services/UserService";

export default function AdministracionMenu() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    type: "",
    price: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);
  const [editedProductChanges, setEditedProductChanges] = useState({
    name: "",
    image: "",
    type: "",
    price: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

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
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editMode) {
      setEditedProductChanges({
        ...editedProductChanges,
        [name]: value,
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    }

    // Borra el mensaje de error cuando se empieza a llenar un campo
    setErrorMessage("");
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.image || !newProduct.type || !newProduct.price) {
      setErrorMessage("❌ Completa todos los Campos");
      return;
    }

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
          setErrorMessage("");
        }
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  const handleEditProduct = (product) => {
    setEditMode(true);
    setEditedProduct(product);
    setEditedProductChanges({
      name: product.name,
      image: product.image,
      type: product.type,
      price: product.price,
    });
  };

  const handleUpdateProduct = () => {
    if (editedProduct) {
      if (
        !editedProductChanges.name ||
        !editedProductChanges.image ||
        !editedProductChanges.type ||
        !editedProductChanges.price
      ) {
        setErrorMessage("❌ Completa todos los Campos");
        return;
      }

      updateProduct(editedProduct.id, editedProductChanges)
        .then((updatedProduct) => {
          const updatedProducts = products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          );
          setProducts(updatedProducts);
          setEditMode(false);
          setEditedProduct(null);
          setEditedProductChanges({
            name: "",
            image: "",
            type: "",
            price: "",
          });
          setErrorMessage("");
        })
        .catch((error) => {
          console.error("Error updating product:", error);
        });
    }
  };

  const handleDeleteProduct = (productId) => {
    // Para eliminar el producto de la API y actualizar la lista local
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
      <div className="ruteo-admonMenu">
          <Link to="/admusuarios" className="irAUsuarios">
            Ir a Usuarios
          </Link>
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
                <th>Editar</th>
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
                    <button
                      className="btnEditar-admon-menu"
                      onClick={() => handleEditProduct(product)}
                    >
                      📝
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnPapelera-admon-menu"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="right-container">
          <h2 className="container-title-right">
            {editMode ? "EDITAR PRODUCTO" : "AGREGAR PRODUCTO"}
          </h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="divsInput-admon-menu">
            <div className="add-admon-menu">
              <input
                className="input-admon-menu"
                type="text"
                name="name"
                value={editMode ? editedProductChanges.name : newProduct.name}
                onChange={handleInputChange}
                placeholder="Nombre del producto"
              />
            </div>
            <div className="add-admon-menu">
              <input
                className="input-admon-menu"
                type="text"
                name="image"
                value={editMode ? editedProductChanges.image : newProduct.image}
                onChange={handleInputChange}
                placeholder="URL de la imagen"
              />
            </div>
            <div className="add-admon-menu">
              <input
                className="input-admon-menu"
                type="text"
                name="type"
                value={editMode ? editedProductChanges.type : newProduct.type}
                onChange={handleInputChange}
                placeholder="Tipo del producto"
              />
            </div>
            <div className="add-admon-menu">
              <input
                className="input-admon-menu"
                type="number"
                name="price"
                value={editMode ? editedProductChanges.price : newProduct.price}
                onChange={handleInputChange}
                placeholder="Precio del producto"
              />
            </div>
          </div>
          <button
            className="btnAdd-admon-menu"
            onClick={editMode ? handleUpdateProduct : handleAddProduct}
          >
            {editMode ? "Guardar" : "Agregar"}
          </button>
        </div>
      </div>
    </div>
  );
}