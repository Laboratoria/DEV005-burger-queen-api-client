import "../admi/admi.css";
import Button from "../components/buttons";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditProducts from "../admi/editproducts";
const AdminProducts = () => {
  const [products, setAdminProducts] = useState([]);
  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/products", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setAdminProducts(response.data);
        console.log("Mostrando los preductos");
      } catch (error) {
        console.error(error);
      }
    };
    fetchproducts();
  }, []);
  const handleEditProducts = async (id, updatedData) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.patch(
        `http://localhost:8080/products/${id}`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Actualizar el estado sin recargar la página
      setAdminProducts((prevProducts) =>
      prevProducts.map((product) =>
          product.id === id ? { ...product, ...updatedData } : product
        )
      );
      console.log(response);
      // Maneja la respuesta de la API después de editar el producto
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteProducts = async (id) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.delete(`http://localhost:8080/products/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // Eliminar el producto del estado sin recargar la página
      setAdminProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
      );
      console.log("producto eliminado exitosamente");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <table className="items-users">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Tipo</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
      </table>
      <div className="more-user-products">
      <img src="/src/assets/adduser.png" alt="add-user" className="add-user" /> 
        <Button className="btn-add-products" id="products" text="Productos"  onClick={EditProducts}/>
        </div>
        <Link to="/">
          <img src="/src/assets/flecha.png" alt="" className="botton-back-admi" />
        </Link>
      <div className="container-user">
        {products.map((product) => (
         <EditProducts
         key={product.id}
            product={product}
            handleEditProducts={handleEditProducts}
            handleDeleteProducts={handleDeleteProducts} />
        ))}
      </div>
    </>
  );
};
export default AdminProducts;