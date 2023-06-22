/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/buttons";
import { Menu } from "../waiter/menu";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:8080/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProducts(response.data);
        console.log("Mostrando los productos");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="container-menu">
        <div className="containerBtn">
          <Button className="btn-desayuno" text="Desayuno" type="submit" />
          <Button className="btn-almuerzo" text="Almuerzo" type="submit" />
        </div>
        <div className="container-productos">
          {products.map((product) => (
            <Menu {...product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
