import { useEffect, useState } from "react";
import apiConfig from "../api/http";
import axios from "axios";

function Get() {
  // get data from API
  const [productos, traerProductos] = useState('');
  const [users, setNewUsers] = useState('');
  const headers = { Authorization: `Bearer ${apiConfig.token}` };

  const obtenerProductos = async () => {
    try {
      const response = await axios.get(`${apiConfig.baseUrl}products`, {
        headers,
      });
      traerProductos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerProductos();

  },[]);

  const usuariosNuevos = async () => {
    try {
      const response = await axios.post(`${apiConfig.baseUrl}users`,{
        email: "karen@prueba.com",
        password: "123456",
        role: "waiter"
      });
      setNewUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    usuariosNuevos();
  },[]);

  console.log(users)


  return (
    <>
      {productos.length > 0 ? (
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>{producto.name}</li>
          ))}
        </ul>
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </>
  );
}

export default Get;
