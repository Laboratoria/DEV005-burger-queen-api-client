import { useState } from "react";
import axios from "axios";
const AddEmployees = ({ onUserCreated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
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
        name: username,
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
      onUserCreated(response.data); // Llama a la función para pasar el nuevo usuario creado al componente padre (Employees)
      setEmail("");
      setPassword("");
      setRole("");
      setUsername("");
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };
  return (
    <>
      <h3>Crear Nuevo Usuario</h3>
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
            <select  value={role} onChange={handleRoleChange}>
      <option value="">Selecciona una opción</option>
      <option value="chef">Chef</option>
      <option value="admin">Admin</option>
      <option value="waiter">Waiter</option>
    </select>
              {/* <input type="text" value={role} onChange={handleRoleChange} /> */}
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button className="btn-registrar" onClick={handleCreateUser}>Registrar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default AddEmployees;