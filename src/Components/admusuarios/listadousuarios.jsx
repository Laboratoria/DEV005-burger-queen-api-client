import React, { useEffect, useState } from "react";
import { getUsers, deleteUsers } from "../../Services/UserService";
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

  return (
    <>
      <div className="container-general">
        <div className="container-usuarios">
          <h2 className="p-usuarios">Usuarios</h2>
          <table className="usuarios-table">
            <tr>
              <th>Email</th>
              <th>Rol</th>
              <th>Eliminar</th>
            </tr>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.email}</td>
                <td>{usuario.role}</td>
                <td>
                  <button
                    className="btnPapelera-admon-usuarios"
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
