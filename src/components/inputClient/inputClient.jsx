import React from "react";
import PropTypes from "prop-types";
import "./inputClient.css";

const InputClient = ({ type, handleInputChange, placeholder, name }) => {
  return (
    <input
      type={type}
      onChange={handleInputChange}
      className='inputClient'
      placeholder={placeholder}
      value={name}
    />
  );
};

InputClient.propTypes = {
  type: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default InputClient;
