import Dropdown from "../../DropDownList/DropDownList";
import Navigation from "../../navigation/navigation";
<<<<<<< HEAD



=======
//import Breakfast from "../menu/breakfast";
//import Lunch from "../menu/lunch";
import React, { useState, useEffect } from "react";
import { getproduct } from "../../../services/UseAxios";

import Products from "../../Products/Products";
>>>>>>> 395cf4e62653c47f7983c5742915cb76f84f91f8
import "./menu.css";

const Menu = () => {
  //funcion para la navBar---------------------------
  const [selectedTab, setSelectedTab] = useState("Desayuno");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  //funcion para input--------------------------------
  const [clientName, setClientName] = useState("");
<<<<<<< HEAD
=======
  const [product, setProduct] = useState([]);
  function handlerAddProduct(prod) {
    setProduct([...product, prod]);
  }
>>>>>>> 395cf4e62653c47f7983c5742915cb76f84f91f8

  const handleClientNameChange = (event) => {
    setClientName(event.target.value);
  };
<<<<<<< HEAD
  //------estado de cuenta
 
=======

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
>>>>>>> 395cf4e62653c47f7983c5742915cb76f84f91f8

  return (
    <>
      <article className="menu-waiter">
        <section className="container-info">
          <input
            type="text"
            placeholder="Client Name"
            className="inputs-login client-name"
            value={clientName}
            onChange={handleClientNameChange}
          />
          <Dropdown title="Table" items={items} multiSelect />
        </section>
<<<<<<< HEAD

        <Navigation
          tabs={["Breakfast", "Lunch"]}
          activeTab={selectedTab}
          onSelectTab={handleTabChange}
        />
        {selectedTab === "Breakfast" && <Breakfast />}
        {selectedTab === "Lunch" && <Lunch />}

=======

        <Navigation
          tabs={["Desayuno", "Almuerzo"]}
          activeTab={selectedTab}
          onSelectTab={handleTabChange}
        />
        <div className="listadoproductos-resumenpedido">
          <div className="listado-productos"></div>
          <Products
            products={products}
            productType={selectedTab}
            handlerAddProduct={handlerAddProduct}
          />
          {/*{selectedTab === "Breakfast" && <Breakfast products={products} />}
       // {selectedTab === "Lunch" && <Lunch />}*/}
        </div>

>>>>>>> 395cf4e62653c47f7983c5742915cb76f84f91f8
        <div className="listadoproductos-resumenpedido">
          <section className="container-count">
            <div className="resumenpedido">
              <div className="datos-cliente-resumepedido">
                <label>Client:{clientName}</label>
                <label>Table:</label>
              </div>

<<<<<<< HEAD
              <div>
                
                <p>
                  Total: <span id="total">$10.00</span>
=======
              <div className="product">
                {product?.map((îtem, index) => {
                  return (
                    <div className="product-info" key={index}>
                      <p>1</p>
                      <p>{îtem.name}</p>
                      <p>{îtem.price}</p>
                      <button className="decrement">-</button>
                      <button className="increment">+</button>
                      <button className="delete">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </div>

              <div>
                <p>
                  Total: <span id="total">$50.00</span>
>>>>>>> 395cf4e62653c47f7983c5742915cb76f84f91f8
                </p>
                <button className="enviarPedido" id="enviarPedido">
                  Send Order
                </button>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default Menu;
const items = [
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
