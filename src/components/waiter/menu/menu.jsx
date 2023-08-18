import React, { useState } from "react";
import Dropdown from "../../DropDownList/DropDownList";
import Navigation from "../../navigation/navigation";
import Breakfast from "../menu/breakfast";
import Lunch from "../menu/lunch"

import './menu.css'

const Menu = () => {

  //funcion para la navBar---------------------------
  const [selectedTab, setSelectedTab] = useState("Breakfast");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

//funcion para input--------------------------------
  const [clientName, setClientName] = useState('');

  const handleClientNameChange = (event) => {
    setClientName(event.target.value);
};

// dropdown-------------------------------
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
        <Dropdown 
        title="Table" 
        items={items}
        />
      </section>
      
        <Navigation tabs={["Breakfast", "Lunch"]} 
        activeTab={selectedTab}
        onSelectTab={handleTabChange}
        />
        {selectedTab === "Breakfast" && <Breakfast />}
        {selectedTab === "Lunch" && <Lunch />}

    <div className="listadoproductos-resumenpedido">
      <section className="container-count">
        <div className="resumenpedido">
          <div className="datos-cliente-resumepedido">
            <label>Client:{clientName}</label>
            <label>Table:</label>
        </div>


        <div>
          <p>Total: <span id="total">$10.00</span></p>
          <button  className="enviarPedido" id="enviarPedido">Send Order</button>
        </div>
        </div>

      </section>
    </div>
    </article>
  </>
  )
};

export default Menu;
