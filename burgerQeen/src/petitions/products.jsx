import "../waiter/menu.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "../waiter/menu";
import Button from "../components/buttons";
//import FilterBtn from "../components/filter-btn";

// eslint-disable-next-line react/prop-types
const Products = ({ handleAddProduct }) => {
  const [products, setProducts] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    axios
      .get("http://localhost:8080/products", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProducts(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleMenuSelection = (menuType) => {
    setSelectedMenu(menuType);
  };

  const filteredProducts = getMenuItems(products, selectedMenu);

  return (
    <>
  
      <div className="container-menu">
        <article>
          <p id="order">Orden</p>
        </article>
        <h1 className="Menu">Menú</h1>
        <Button
          className="btn-desayuno"
          text="Desayuno"
          type="submit"
          onClick={() => handleMenuSelection("desayuno")}
        />
        <Button
          className="btn-almuerzo"
          text="Almuerzo"
          type="submit"
          onClick={() => handleMenuSelection("almuerzo")}
        />
       
      </div>
      
      <div className="container-productos">
        {filteredProducts.map((product) => (
          <Menu key={product.id} product={product} handleAddProduct={handleAddProduct} />
        ))}
        
      </div> 
     
    </>
  );
};

function getMenuItems(menu, selectedMenu) {
  if (selectedMenu === "desayuno") {
    return menu.filter((product) => product.type === "Desayuno");
  } else if (selectedMenu === "almuerzo") {
    return menu.filter((product) => product.type === "Almuerzo");
  }
  return [];
}

export default Products;
