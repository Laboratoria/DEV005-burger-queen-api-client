import React, { useEffect } from "react";
import { addUsers, updateUser } from "../../Services/UserService"; 
import { useState } from "react";
import "./estilo-admusuarios.css";

export default function NuevoUsuario({ user, isEditing, cancelEdit, onSaveUser }) {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    role: "",
    id: "",
  });

  useEffect(() => {
    setNewUser(user);
    console.log(user);
  }, [user]);

  const handleSave = () => {
    if (isEditing) {
      updateUser(newUser)
        .then((response) => {
          onSaveUser();
          cancelEdit();
        })
        .catch((error) => {
          console.error("Error updating user:", error);
        });
    } else {
      addUsers(newUser)
        .then((response) => {
          onSaveUser();
          cancelEdit();
        })
        .catch((error) => {
          console.error("Error adding user:", error);
        });
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setNewUser({
      ...newUser,
      email: value,
    });
  };

  const handleRoleChange = (e) => {
    const { value } = e.target;
    setNewUser({
      ...newUser,
      role: value,
    });
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setNewUser({
      ...newUser,
      password: value,
    });
  };

  return (
    <>
      <div className="content-container">
        <div className="right-container">
          <h2 className="container-title-right">{isEditing ? "EDITAR USUARIO" : "AGREGAR USUARIO"}</h2>
          <div>
          <div className="divsInput-adm-usuario">
            <div className="add-adm-usuario">
              <input
                className="input-adm-usuario"
                type="text"
                email="email"
                value={newUser.email}
                onChange={handleEmailChange}
                placeholder="Email del usuario"
              />
            </div>
              <div className="add-adm-usuario">
              <input
                className="input-adm-usuario"
                type="password" // Cambia "text" a "password" aquí
                value={newUser.password}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
            </div>
            <div className="add-adm-usuario">
              <input
                className="input-adm-usuario"
                type="text"
                value={newUser.role}
                onChange={handleRoleChange}
                placeholder="Rol del usuario"
              />
            </div>
          </div>
          </div>
          <div className="botones-guardar-cancelar">
          <button className="btn-agregar-usuario" onClick={handleSave}>
            {isEditing ? "Guardar" : "Agregar"}
          </button>
          {isEditing && (
            <button className="btn-cancelar-edicion" onClick={cancelEdit}>
              Cancelar
            </button>
          )}
          </div>
        </div>
      </div>
    </>
  );
}
