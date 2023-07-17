import PropTypes from 'prop-types';
import React, { useState } from "react";
import "./admi.css";
const AdmiProducts = ({ product, handleEditProduct, handleDeleteProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedData, setEditedData] = useState({
    name: product.name,
    price: product.price,
    image: product.img,
    type: product.type,
  });
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSaveChanges = () => {
    handleEditProduct(product.id, editedData);
    setIsModalOpen(false);
  };
  const handleConfirmDelete = () => {
    if (window.confirm(`¿Estás seguro de eliminar al usuario ${product.name}?`)) {
      handleDeleteProduct(product.id);
    }
  };
  return (
    <>
      <div className="products">
        <div className="product-id">{product.id}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-price">{product.price}</div>
        <div className="product-image">{product.image}</div>
        <div className="product-type">{product.type}</div>
        <img
          src="src/assets/editar.png"
          alt="editar"
          className="btn-editar-users"
          onClick={handleOpenModal}
        />
        <img
          src="src/assets/delete.png"
          alt="eliminar"
          className="btn-eliminar-users"
          onClick={handleConfirmDelete}
        />
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Editar Producto</h3>
            <input
              type="text"
              name="name"
              value={editedData.name}
              onChange={handleInputChange}
              placeholder="Nombre"
            />
            <input
              type="text"
              name="price"
              value={editedData.price}
              onChange={handleInputChange}
              placeholder="precio"
            />
            <input
              type="img"
              name="image"
              value={editedData.image}
              onChange={handleInputChange}
              placeholder="image"
            />
            <input
              type="text"
              name="type"
              value={editedData.type}
              onChange={handleInputChange}
              placeholder="Tipo"
            />
            <div className="modal-buttons">
              <button onClick={handleSaveChanges}>Guardar cambios</button>
              <button onClick={handleCloseModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
AdmiProducts.propTypes = {
  product: PropTypes.object,
  handleEditProduct: PropTypes.func,
  handleDeleteProduct: PropTypes.func,
};
export default AdmiProducts;




















