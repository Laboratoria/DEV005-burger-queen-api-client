/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import "./dropdownlist.css";

function Dropdown({ items, handleOnClick, handleOnChangeRole, role }) {



  return (
    <select name="Table" id="" onChange={handleOnClick} className="dropdown-list">
      {items.map((item) => (
        <option 
          key={item.id} 
          className="list" 
          onClick={handleOnChangeRole} 
          value={item.value}
          >{item.value}
        </option>
      ))}
    </select>
  );

}


export default Dropdown;