// eslint-disable-next-line no-unused-vars
import React from "react";
import "./menu.css";
import Button from "../components/buttons";
import PropTypes from "prop-types";

const Menu = ({ product, handleAddProduct}) => {
  return (
    <div className="cardProduct">
      <div className="productName">{product && product.name}</div>
      <div className="imgProduct">
        <img className="productImg" src={product && product.image} alt="" />
      </div>
      <div className="pricebtnsAdd">
        <div className="producPrice">{product && product.price}</div>
        <Button
          className="btnAdd"
          text="Agregar"
          onClick={() => handleAddProduct(product)}
        />
      </div>
    </div>
  );
};
Menu.propTypes = {
  handleAddProduct: PropTypes.func,
  product: PropTypes.object,
};
export default Menu;
