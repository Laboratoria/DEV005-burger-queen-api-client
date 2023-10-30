import React, { useEffect, useState } from "react";
import { deleteUsers } from "../../Services/UserService";
import "./estilo-admusuarios.css";

export default function ListadoUsuarios({ users, editUser }) {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    setUsuarios(users);
  }, [users]);

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
  const handleEditUsers = (usuario) => {
    editUser(usuario);
  };

  return (
    <>
      <div className="content-container">
        <div className="left-container">
          <h2 className="container-title">USUARIOS</h2>
          <table className="usuarios-table">
          <tbody>
            <tr>
              <th>Email</th>
              <th>Rol</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
            </tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.email}</td>
                <td>{usuario.role}</td>
                <td>
                  <button
                    className="btnEditar-adm-usuarios"
                    onClick={() => handleEditUsers(usuario)}
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