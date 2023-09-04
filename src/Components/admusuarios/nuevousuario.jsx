import React from "react";
import { addUsers } from "../../Services/UserService";
import { useState } from "react";

export default function NuevoUsuario() {
  const [newUser, setNewUser] = useState({
    email: "",
    role: "",
  });

  const handleAddUsers = () => {
    console.log(newUser);
    addUsers(newUser)
      .then((response) => {
        if (response) {
          //setUser([...user, response]);
          setNewUser({
            email: "",
            role: "",
            password: "",
          });
        }
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
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
    <div className="right-container">
      <h2 className="container-title-right">AGREGAR USUARIO</h2>
      <div className="divsInput-admon-menu">
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
            type="password"
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
      <button className="btn-agregar-usuario" onClick={handleAddUsers}>
        {" "}
        Agregar{" "}
      </button>
    </div>
  );
}
