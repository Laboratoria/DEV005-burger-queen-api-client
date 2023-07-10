import "../admi/admi.css";
import Button from "../components/buttons";
import { useState, useEffect } from "react";
import axios from "axios";
import Admin from "../admi/admi";
import { Link } from "react-router-dom";
const Employees = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:8080/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setEmployees(response.data);
        console.log(response);
        console.log("Mostrando los employees");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <h1 className="admi">Administrador</h1>
      <table className="items-users">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Editar</th>
          </tr>
        </thead>
      </table>
      <div className="more-user-products">
      <img src="src/assets/adduser.png" alt="add-user" className="add-user" /> Agregar colaboradores
        <Button className="btn-add-products" id="products" text="Productos" />
        </div>
      <div className="container-user">
        {employees.map((user) => (
          <Admin key={user.id} user={user} />
        ))}
        <Link to="/">
          <img src="/src/assets/flecha.png" alt="salir" className="botton-back" />
        </Link>
      </div>
    </>
  );
};
export default Employees;
