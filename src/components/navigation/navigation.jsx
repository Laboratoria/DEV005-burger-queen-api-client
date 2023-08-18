import React from "react";
import "./navigation.css";

function Navigation({ tabs, activeTab, onSelectTab }) {
  return (
    <nav className="navigation">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`nav-item ${activeTab === tab ? "active" : ""}`}
          onClick={() => onSelectTab(tab)} 
        >
          {tab}
        </div>
      ))}
    </nav>
  );
}

export default Navigation;
