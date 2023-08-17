import React, { useState } from "react";
import "./navigation.css";

function Navigation({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]); // Establece el primer tab como activo por defecto

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navigation">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`nav-item ${activeTab === tab ? "active" : ""}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </nav>
  );
}

export default Navigation;
