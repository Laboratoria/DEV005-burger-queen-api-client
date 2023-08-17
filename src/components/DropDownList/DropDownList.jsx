import React, { useState } from "react";
// import onClickOutside from 'react-onclickoutside';
import './dropdownlist.css'


function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  //Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }


  return (
    <div className="dd-wrapper">
      <button
        tabIndex={0}
        className="button-dropdown"
        role="button"
      onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <p className="title">{title}</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="50" height="50" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#626262" fill="none" strokeLinecap="round" strokeLinejoin="round">{open}
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 9l6 6l6 -6" />
</svg></p>
      
      </button>
      {open && (
        <ul className="dd-list">
            
          {items.map((item) => (
           
            <li className="dd-list-item" key={item.id}>
              <button type="button" 
              className="button-list"
              onClick={() => handleOnClick(item)}>
                <span className="tag-list">{item.value}</span>
                <span>{isItemInSelection(item)}</span>
              </button>
            <hr width='100px'/>
            </li>
            
            
          ))}
        </ul>
      )}
    </div>
  );
}

/* const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
}; */

export default Dropdown;
