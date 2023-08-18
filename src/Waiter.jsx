import React, { useState } from "react";
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import Menu from "./components/waiter/menu/menu";
import Orders from "./components/waiter/orders/orders"

const Waiter = () => {
  const [selectedTab, setSelectedTab] = useState("Menu");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <Header role="Waiter" />
      
      <Navigation
        tabs={["Menu", "Orders"]}
        activeTab={selectedTab} // Pasamos la pestaña activa al componente Navigation
        onSelectTab={handleTabChange} // Pasamos la función de cambio de pestaña
      />
      {selectedTab === "Menu" && <Menu />} {/* Renderizamos el componente Menu si selectedTab es "Menu" */}
      {selectedTab === "Orders" && <Orders />} {/* Renderizamos el componente Orders si selectedTab es "Orders" */}
      <section>

      </section>
      <section>
        
      </section>
    </>
  );
};

export default Waiter;
