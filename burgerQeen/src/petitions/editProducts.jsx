import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "../waiter/menu";

// eslint-disable-next-line react/prop-types
const EditProducts = ({ handleEditProduct }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/products", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
        console.log("Mostrando los productos");
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Retorna los productos</h1>
      {products.map((product) => (
        <Menu key={product.id} product={product} handleEditProduct={handleEditProduct} />
      ))}
    </>
  );
};

export default EditProducts;


