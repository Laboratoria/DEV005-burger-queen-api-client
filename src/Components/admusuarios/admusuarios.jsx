import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../../img/LOGO.png";
import "./estilo-admusuarios.css";
import NuevoUsuario from "./nuevousuario";
import ListadoUsuarios from "./listadousuarios";
import { getUsers } from "../../Services/UserService"; // Asegúrate de importar updateUser

export default function Admusuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [userSelected, setUserSelected] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [updateUserlist, setUpdateUserList] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    if(updateUserlist) {
      loadUsers();
      setUpdateUserList(false);
    }
  }, [updateUserlist])

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
    setUserSelected({ email: "", password: "", role: "", id: "" });
    setIsEditing(false);
  };

  const handleSaveUser = (newUser) => {
    setUpdateUserList(true);
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
        <div className="content-container">
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