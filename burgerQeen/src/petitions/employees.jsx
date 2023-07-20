import "../admi/admi.css";
import Button from "../components/buttons";
import { useState, useEffect } from "react";
import axios from "axios";
import Admin from "../admi/admi";
import { Link } from "react-router-dom";
import AddEmployees from "./addemployees";
import ProductsList from "./ProductsList"; // Importa el componente de la lista de productos
import AdmiProducts from "../admi/admiproducts";
const Employees = ({ handleEditEmployee, handleDeleteEmployee }) => {
  const [employees, setEmployees] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false); // Nuevo estado para controlar la visualización de productos
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/users", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setEmployees(response.data);
        console.log("Mostrando los employees");
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmployees();
  }, []);
  const handleUserCreated = (newUser) => {
    setEmployees((prevEmployees) => [...prevEmployees, newUser]);
  };
  const handleShowProducts = () => {
    setShowProducts(true);
    setIsAddModalOpen(false); // Para ocultar el modal de agregar colaboradores si está abierto
  };
  const handleShowEmployees = () => {
    setShowProducts(false);
  };
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
    setShowProducts(false); // Al abrir el modal de agregar productos, ocultamos la lista de colaboradores
  };
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };
  return (
    <>
      <h1 className="admi">Administradores</h1>
      {showProducts ? (
        <><AdmiProducts /></>
      ) : (
        <table className="items-users">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((user) => (
              <Admin
                key={user.id}
                user={user}
                handleEditEmployee={handleEditEmployee}
                handleDeleteEmployee={handleDeleteEmployee}
              />
            ))}
          </tbody>
        </table>
      )}
      <div className="more-user-products">
        <img
          src="/src/assets/adduser.png"
          alt="add-user"
          className="add-user"
          onClick={handleOpenAddModal}
        />
        <Button
          className="btn-add-products"
          id="products"
          text="Productos"
          onClick={handleShowProducts} // Agrega la función para mostrar los productos al hacer clic en el botón
        />
        <Button
          className="btn-add-products"
          id="employees"
          text="Colaboradores"
          onClick={handleShowEmployees} // Agrega la función para mostrar los colaboradores al hacer clic en el botón
        />
      </div>
      <Link to="/">
        <img
          src="/src/assets/flecha.png"
          alt=""
          className="botton-back-admi"
        />
      </Link>
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="modal-close1" onClick={handleCloseAddModal}>
              x
            </span>
            <div className="modal-content">
              {/* Aquí va el contenido del modal para agregar colaboradores */}
              <AddEmployees onUserCreated={handleUserCreated} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Employees;