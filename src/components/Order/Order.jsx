/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
import { useState, useEffect } from "react";
import { createOrder } from "../../services/UseAxios";
import Buttons from "../Buttons/Buttons";
import "./order.css"
import Swal from "sweetalert2";


function Order({clientName, table, products, handleRemoveProduct, setClientName, setTable, setOrderProducts }) {

// Función para aumentar la cantidad de un producto en 1
const handleIncreaseQuantity = (index) => {
  const updatedProducts = [...products];
  updatedProducts[index].qty += 1;
  setOrderProducts(updatedProducts);
};

// Función para disminuir la cantidad de un producto en 1
const handleDecreaseQuantity = (index) => {
  const updatedProducts = [...products];
  if (updatedProducts[index].qty > 1) {
    updatedProducts[index].qty -= 1;
    setOrderProducts(updatedProducts);
  }
};

// total cuenta----------------------------------------------------
    const [total, setTotal] = useState(0);
    useEffect(() => {
      // Calcula el total sumando los precios de los productos
      const newTotal = products.reduce(
        (acc, item) => acc + item.product.price * item.qty,
        0
      );
      setTotal(newTotal);
    }, [products]);

//enviar Orden------------------------------------------
const handleSubmitOrder = async (e) => {
  e.preventDefault();
  console.log(e, 'pa la ropa')
  try {
   // debugger
    const response = await createOrder(clientName, table, products);
    setClientName("");
    setTable("");
    setOrderProducts([]);
    new Swal('Order created succesfully');
    return response
  } catch (error) {
    new Swal('Wrong with submit order');
  }
} 

  return (
  <section className="container-order">
    <form className="form-order" onSubmit={handleSubmitOrder} >

      <div className="info-client">
        <label>Client:{clientName} </label>
        <label>Table:{table}</label>
      </div>

      <div className="product-order">
        {products.map((item, index) => (        
            <div className="info" key={index}>
              <div className="qty"><p>{item.qty}</p></div>
              <div className="name"> <p>{item.product.name}</p></div>
              <div className="price"><p>${(item.product.price)*(item.qty)}</p></div>

              <div className="btn-quantity">
                <button type="button" onClick={() => handleIncreaseQuantity(index)}>➕</button>
                <button type="button" onClick={() => handleDecreaseQuantity(index)}>➖</button>
              </div>

              <div className="btn-delete"> 
                <button 
                className="delete"
                type="button"
                onClick={() => handleRemoveProduct(item.product)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#626262"
                    className="bi bi-trash3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
                </button>
              </div>
            </div>  
        ))}
      </div>

      <div className="total">
        <p>
          Total  <span id="total">${total}</span>
        </p>
        <Buttons 
        type="submit" 
        tag="Submit"
        />
      </div>

    </form>
  </section> 
  );
}
export default Order;