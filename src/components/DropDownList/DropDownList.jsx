/* eslint-disable react/jsx-key */
//import React, { useState } from "react";
// import onClickOutside from 'react-onclickoutside';

import "./dropdownlist.css";

function Dropdown({ items, handleOnClick }) {

  return (
    <select name="Table" id="" className="dropdown-list">
      {items.map((item) => (
        <option className="list" onClick={handleOnClick} value={item.value}>{item.value}</option>
      ))}
    </select>
  );

}


export default Dropdown;