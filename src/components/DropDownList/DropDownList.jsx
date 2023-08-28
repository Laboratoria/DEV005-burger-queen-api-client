/* eslint-disable react/jsx-key */

import "./dropdownlist.css";

function Dropdown({ items, handleOnClick }) {

  return (
    <select name="Table" id="" onChange={handleOnClick} className="dropdown-list">
      {items.map((item) => (
        <option key={item.id} className="list"  value={item.value}>{item.value}</option>
      ))}
    </select>
  );

}


export default Dropdown;