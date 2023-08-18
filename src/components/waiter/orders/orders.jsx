import React, { useState } from "react";
import Navigation from "../../navigation/navigation";
import ReadyToDeliver from "./readyToDeliver";
import Delivered from "./delivered";

const Orders = () => {
  const [selectedTab, setSelectedTab] = useState("Ready to Deliver");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <Navigation
        tabs={["Ready to Deliver", "Delivered"]}
        activeTab={selectedTab} // Pasamos la pestaña activa al componente Navigation
        onSelectTab={handleTabChange} // Pasamos la función de cambio de pestaña
      />
      {selectedTab === "Ready to Deliver" && <ReadyToDeliver />} {/* Renderizamos el componente Menu si selectedTab es "Menu" */}
      {selectedTab === "Delivered" && <Delivered />} {/* Renderizamos el componente Orders si selectedTab es "Orders" */}
    </>
  );
};

export default Orders
