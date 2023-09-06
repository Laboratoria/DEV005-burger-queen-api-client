import React, { useEffect, useState } from "react";
import { getUsers, deleteUsers, editUsers } from "../../Services/UserService";
import "./estilo-admusuarios.css";

export default function ListadoUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  


  useEffect(() => {
    getUsers().then((data) => setUsuarios(data));
  }, []);

  // funcion para borrar usuarios
  const handleDeleteUsers = (usuariosId) => {
    deleteUsers(usuariosId)
      .then(() => {
        const updatedUsers = usuarios.filter(
          (usuario) => usuario.id !== usuariosId
        );
        setUsuarios(updatedUsers);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  // funcion para editar usuarios
  const handleEditUsers = (usuariosId) => {
    editUsers(usuariosId)
      .then(() => {
        const updatedUsers = usuarios.filter(
          (usuario) => usuarios.id !== usuariosId
        );
        setUsuarios(updatedUsers);
      })
      .catch((error) => {
        console.error("Error editing user:", error);
      });
  };


  return (
    <>
    <div className="admusuarios">
      <div className="left-container">
          <h2 className="container-title">Usuarios</h2>
          <table className="usuarios-table">
            <tr>
              <th>Email</th>
              <th>Rol</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.email}</td>
                <td>{usuario.role}</td>
                <td>
                  <button
                    className="btnEditar-adm-usuarios"
                    onClick={() => handleEditUsers(usuario.id)}
                  >
                    📝
                  </button>
                </td>
                <td>
                  <button
                    className="btnPapelera-adm-usuarios"
                    onClick={() => handleDeleteUsers(usuario.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
