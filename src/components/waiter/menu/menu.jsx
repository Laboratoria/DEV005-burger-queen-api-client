import Dropdown from "../../DropDownList/DropDownList";
import Navigation from "../../navigation/navigation";
//import Breakfast from "../menu/breakfast";
//import Lunch from "../menu/lunch";
import React, { useState, useEffect } from "react";
import { getproduct } from "../../../services/UseAxios";

import Products from "../../Products/Products";
import "./menu.css";
import Order from "../../Count/Count";

const Menu = () => {
  //funcion para la navBar---------------------------
  const [selectedTab, setSelectedTab] = useState("Desayuno");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  //----------estado para conteo---------
  const [count, setCount] = useState(0);
  function handleCountPlus() {
    setCount(count + 1);
  }
  function handleRemoveProduct() {
    setCount(count - 1);
  }


  
  //funcion para input--------------------------------
  const [clientName, setClientName] = useState("");

  const [orderProducts, setOrderProducts] = useState([]);
  function handlerAddProduct(prod) {
    prod.qty = 1
    setOrderProducts([...orderProducts, prod]);
  }

  const handleClientNameChange = (event) => {
    console.log(event.target.value);
    setClientName(event.target.value);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getproduct();
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  

  //const [total, setTotal] = useState(0);

  const [table, setTable] = useState('');
  function handleOnClick(e){
    console.log(e.target.value, 'lililili')
    setTable(e.target.value)
  }


  // manejo de evento de envio de pedido

  
  

  return (
    <article>
      <section className="menu-waiter">
        <div className="container-info">
          <input
            type="text"
            placeholder="Client Name"
            className="inputs-login client-name"
            value={clientName}
            onChange={handleClientNameChange}
          />
          <Dropdown items={items} table={table} handleOnClick={handleOnClick}/>
        </div>

        <Navigation
          tabs={["Desayuno", "Almuerzo"]}
          activeTab={selectedTab}
          onSelectTab={handleTabChange}
        />
      </section>

      <div className="products-order">
        <Products
          products={products}
          productType={selectedTab}
          handlerAddProduct={handlerAddProduct}
          handleCountPlus={handleCountPlus}
        />
        <Order
          handleRemoveProduct={handleRemoveProduct}
          products={orderProducts}
          handlerAddProduct={handlerAddProduct}
          count={count}
          clientName={clientName}
          table={table}
        />
      </div>
    </article>
  );
};

export default Menu;
const items = [
  /* "table 1","table 1","table 1" */
 {
    id: 1,
    value: "Table 1",
  },
  {
    id: 2,
    value: "Table 2",
  },
  {
    id: 3,
    value: "Table 3",
  },
];
