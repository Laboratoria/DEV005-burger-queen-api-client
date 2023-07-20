import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admi.css";

const AdmiProducts = ({ handleEditProduct, handleDeleteProduct }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    type: "",
  });
  const [editProduct, setEditProduct] = useState({
    name: "",
    price: "",
    image: "",
    type: "",
  });
  const [products, setProducts] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  useEffect(() => {
    fetchProducts();
  }, []);

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

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setNewProduct({
      name: "",
      price: "",
      image: "",
      type: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleOpenEditModal = (product) => {
    setIsEditModalOpen(true);
    setEditProduct(product)
  };
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setNewProduct({
      name: "",
      price: "",
      image: "",
      type: "",
    });
  };

  const handleAddProduct = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.post("http://localhost:8080/products", newProduct, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setNewProduct({
        name: "",
        price: "",
        image: "",
        type: "",
      });
      handleCloseAddModal();
      console.log("Producto agregado exitosamente");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditProductRequest = async (productId, editedData) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.patch(
        `http://localhost:8080/products/${productId}`,
        editedData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedProducts = products.map((product) =>
        product.id === productId ? { ...product, ...editedData } : product
      );
      setProducts(updatedProducts);
      console.log("Producto editado exitosamente");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteProductRequest = async (productId) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`http://localhost:8080/products/${productId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedProducts);
      console.log("Producto eliminado exitosamente");
    } catch (error) {
      console.error(error);
    }
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
        {/* Botón para abrir el modal de agregar productos */}
        <button onClick={handleOpenAddModal}>Agregar Producto</button>

        {/* Modal de agregar productos */}

        {isAddModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Agregar Producto</h2>
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                placeholder="Nombre"
              />
              <input
                type="text"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                placeholder="Precio"
              />
              <input
                type="text"
                name="image"
                value={newProduct.image}
                onChange={handleInputChange}
                placeholder="Imagen URL"
              />
              <input
                type="text"
                name="type"
                value={newProduct.type}
                onChange={handleInputChange}
                placeholder="Tipo"
              />
              <button onClick={handleAddProduct}>Guardar Producto</button>
              <button onClick={handleCloseAddModal}>Cancelar</button>
            </div>
          </div>
        )}
        {isEditModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Agregar Producto</h2>
              <input
                type="text"
                name="name"
                value={editProduct.name}
                onChange={handleInputChange}
                placeholder="Nombre"
              />
              <input
                type="text"
                name="price"
                value={editProduct.price}
                onChange={handleInputChange}
                placeholder="Precio"
              />
              <input
                type="text"
                name="image"
                value={editProduct.image}
                onChange={handleInputChange}
                placeholder="Imagen URL"
              />
              <input
                type="text"
                name="type"
                value={editProduct.type}
                onChange={handleInputChange}
                placeholder="Tipo"
              />
              <button onClick={handleEditProductRequest}>Guardar cambios</button>
              <button onClick={handleCloseAddModal}>Cancelar</button>
            </div>
          </div>
        )}

        {products.map((product) => (
          <div key={product.id}>
            <div className="container-productsAdmi">
              <div className="id-productsAdmi"> {product.id}</div>
              <div className="name-productsAdmi"> {product.name}</div>
              <div className="price-productsAdmi">{product.price} $</div>
              <div className="image-productsAdmi"> {product.image}</div>
              <div className="type-productsAdmi"> {product.type}</div>
              <img
                src="src/assets/editar.png"
                alt="editar"
                className="btn-editar-productsAdmi"
                onClick={() => handleOpenEditModal(product)}
              />
              <img
                src="src/assets/delete.png"
                alt="eliminar"
                className="btn-eliminar-productsAdmi"
                onClick={() => handleDeleteProductRequest(product.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
AdmiProducts.propTypes = {
  handleEditProduct: PropTypes.func,
  handleDeleteProduct: PropTypes.func,
};
export default AdmiProducts;
