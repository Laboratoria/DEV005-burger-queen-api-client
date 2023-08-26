import { useState } from "react";
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import OrdersInProcess from "./components/chef/ordersInProcess";
import OrdersReady from "./components/chef/ordersReady";

const Chef = () => {
  const [selectedTab, setSelectedTab] = useState("Orders in process");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <Header role="Chef" />

      <Navigation
        tabs={["Orders in process", "Orders Ready"]}
        activeTab={selectedTab} // Pasamos la pestaña activa al componente Navigation
        onSelectTab={handleTabChange} // Pasamos la función de cambio de pestaña
      />
      {selectedTab === "Orders in process" && < OrdersInProcess />}
      {selectedTab === "Orders Ready" && <OrdersReady />}
    </>
  );
};

export default Chef;
