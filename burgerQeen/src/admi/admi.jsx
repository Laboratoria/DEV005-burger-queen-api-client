import PropTypes from "prop-types";
import React, { useState } from "react";
import "./admi.css";
const Admin = ({ user, handleEditEmployee, handleDeleteEmployee }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedData, setEditedData] = useState({
    name: user.name,
    email: user.email,
    password: user.password,
    role: user.role,
  });
  const handleEditUser = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSaveChanges = () => {
    handleEditEmployee(user.id, editedData);
    setIsModalOpen(false);
  };
  const handleDeleteUser = () => {
    if (window.confirm(`¿Estás seguro de eliminar al usuario ${user.name}?`)) {
      handleDeleteEmployee(user.id);
    }
  };
  const handleRoleChange = (event) => {
    const { value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      role: value,
    }));
  };
  return (
    <>
      <div className="users">
        <div className="user-id">{user.id}</div>
        <div className="user-name">{user.name}</div>
        <div className="user-email">{user.email}</div>
        <div className="user-role">{user.role}</div>
        <img
          src="src/assets/editar.png"
          alt="editar"
          className="btn-editar-users"
          onClick={handleEditUser}
        />
        <img
          src="src/assets/delete.png"
          alt="eliminar"
          className="btn-eliminar-users"
          onClick={handleDeleteUser}
        />
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Editar Usuario</h3>
            <tr>
              <td>Nombre de Colaborador:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={editedData.name}
                  onChange={handleInputChange}
                  placeholder="Nombre"
                />
              </td>
            </tr>
            <tr>
              <td>Correo:</td>
              <td>
                <input
                  type="text"
                  name="email"
                  value={editedData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
              </td>
            </tr>
            <tr>
              <td>Contraseña:</td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={editedData.password}
                  onChange={handleInputChange}
                  placeholder="Contraseña"
                />
              </td>
            </tr>
            <tr>
              <td>Rol:</td>
              <td>
                <select value={editedData.role} onChange={handleRoleChange}>
                  <option value="">Selecciona una opción</option>
                  <option value="chef">Chef</option>
                  <option value="admin">Admin</option>
                  <option value="waiter">Waiter</option>
                </select>
              </td>
            </tr>
            <div className="modal-buttons">
              <button className="btn-guardar" onClick={handleSaveChanges}>
                Guardar cambios
              </button>
            </div>
            <span className="modal-close" onClick={handleModalClose}>
              x
            </span>
          </div>
        </div>
      )}
    </>
  );
};
Admin.propTypes = {
  user: PropTypes.object,
  handleEditEmployee: PropTypes.func,
  handleDeleteEmployee: PropTypes.func,
};
export default Admin;