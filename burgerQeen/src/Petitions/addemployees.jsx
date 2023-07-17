import { useState } from "react";
import axios from "axios";
const AddEmployees = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [ setIsModalOpen] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleCreateUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const newUser = {
        email: email,
        password: password,
        role: role,
        username: username,
      };
      const response = await axios.post(
        "http://localhost:8080/users",
        newUser,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log("Usuario creado exitosamente:", response.data);
      setSuccessMessage("Usuario creado exitosamente");
      setEmail("");
      setPassword("");
      setRole("");
      setUsername("");
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section>
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Crear Nuevo Usuario</h2>
            {successMessage && <p>{successMessage}</p>}
            <table>
              <tbody>
                <tr>
                  <td>Nombre de Colaborador:</td>
                  <td>
                    <input
                      type="text"
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Correo:</td>
                  <td>
                    <input
                      type="text"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Contraseña:</td>
                  <td>
                    <input
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Rol:</td>
                  <td>
                    <input
                      type="text"
                      value={role}
                      onChange={handleRoleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button onClick={handleCreateUser}>incorporar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </section>
  );
};
export default AddEmployees;