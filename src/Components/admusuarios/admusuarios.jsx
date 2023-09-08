import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../../img/LOGO.png";
import "./estilo-admusuarios.css";
import NuevoUsuario from "./nuevousuario";
import ListadoUsuarios from "./listadousuarios";
import { getUsers, addUsers, updateUser } from "../../Services/UserService"; // Asegúrate de importar updateUser

export default function Admusuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [userSelected, setUserSelected] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    getUsers()
      .then((data) => setUsuarios(data))
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  const editUser = (user) => {
    setUserSelected(user);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setUserSelected({ email: "", password: "", role: "" });
    setIsEditing(false);
  };

  const handleSaveUser = (newUser) => {
    if (isEditing) {
      updateUser(newUser)
        .then(() => {
          setIsEditing(false);
          loadUsers(); // Actualiza la lista de usuarios después de la edición
        })
        .catch((error) => {
          console.error("Error updating user:", error);
        });
    } else {
      addUsers(newUser)
        .then(() => {
          loadUsers(); // Actualiza la lista de usuarios después de agregar uno nuevo
        })
        .catch((error) => {
          console.error("Error adding user:", error);
        });
    }
  };

  return (
    <>
      <div className="main-container-usuarios">
        <div className="logo-title-container">
          <h1 className="logo-usuarios">BURGUER QUEEN</h1>
          <img src={LOGO} className="logo1-usuarios" alt="Burger Queen Logo" />
        </div>
        <div className="ruteo">
          <Link to="/administracion-menu" className="ir-a-productos">
            Ir a productos
          </Link>
        </div>
        <div className="admusuarios">
          <ListadoUsuarios users={usuarios} editUser={editUser} />
          <NuevoUsuario
            user={userSelected}
            isEditing={isEditing}
            cancelEdit={cancelEdit}
            onSaveUser={handleSaveUser} // Pasa la función onSaveUser
          />
        </div>
      </div>
    </>
  );
}
