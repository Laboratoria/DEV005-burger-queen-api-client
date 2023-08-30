import { useState } from "react";
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import EmployeesManagement from "./components/admin/EmployeesManagement";
import ProductsManagement from "./components/admin/ProductsManagement";



const Admin = () => { 
  const [selectedTab, setSelectedTab] = useState("Products");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  



  return(
    <section className="Admin">
    <Header 
    className="admin-header" 
    role="Admin" />
    <Navigation 
    tabs={['Products', 'Employees']}
    activeTab={selectedTab}
    onSelectTab={handleTabChange}
    />
    {selectedTab === "Employees" && <EmployeesManagement />} {/* Renderizamos el componente Menu si selectedTab es "Menu" */}
      {selectedTab === "Products" && <ProductsManagement />} {/* Renderizamos el componente Orders si selectedTab es "Orders" */}


   
    </section>
  );


 
};

export default Admin;
