/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import "./dropdownlist.css";

function Dropdown({ items, handleOnClick, handleOnChangeRole, role }) {



  return (
    <select  id=""  className="dropdown-list">
      {items.map((item) => (
        <option className="list" 

        /* onClick={handleOnClick} */
        onChange={handleOnChangeRole}
        value={item.value}>{item.value}</option>
      ))}
    </select>
  );

}


export default Dropdown;