import { useState, useEffect } from "react";
import { createOrder } from "../../services/UseAxios";
import Buttons from "../Buttons/Buttons";
import "./order.css"
import Swal from "sweetalert2";


function Order({clientName, table, orderProducts, handleRemoveProduct, setClientName, setTable, setOrderProducts }) {

// Función para aumentar la cantidad de un producto en 1
const handleIncreaseQuantity = (productIndex) => {
  const updatedProducts = [...orderProducts];
  updatedProducts[productIndex].qty += 1;
  setOrderProducts(updatedProducts);
};

// Función para disminuir la cantidad de un producto en 1
const handleDecreaseQuantity = (productIndex) => {
  const updatedProducts = [...orderProducts];
  if (updatedProducts[productIndex].qty > 1) {
    updatedProducts[productIndex].qty -= 1;
    setOrderProducts(updatedProducts);
  }
};

// total cuenta----------------------------------------------------
    const [total, setTotal] = useState(0);
    useEffect(() => {
      // Calcula el total sumando los precios de los productos
      const newTotal = orderProducts.reduce(
        (total, item) => total + item.product.price * item.qty,
        0
      );
      setTotal(newTotal);
    }, [orderProducts]);

//enviar Orden------------------------------------------
const handleSubmitOrder = async (e) => {
  e.preventDefault();
  console.log(e, 'pa la ropa')

  if (!clientName || !table || orderProducts.length === 0) {
    Swal.fire({
      title: 'Please fill in the required information',
      icon: 'error',
      confirmButtonColor: '#D62828',
    });
    return;
  }
  try {
   // debugger
    const response = await createOrder(clientName, table, orderProducts, total);
    console.log(response, 'ESTO ES UNA PRUEBA')
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
        {orderProducts.map((item, index) => (        
            <div className="info" key={index}>
              <div className="qty"><p>{item.qty}</p></div>
              <div className="name"> <p>{item.product.name}</p></div>
              <div className="price"><p>${(item.product.price)*(item.qty)}</p></div>

              <div className="btn-quantity">
                <button 
                className="btns-plus-less" 
                type="button" 
                onClick={() => handleIncreaseQuantity(index)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
                  <line x1="10" y1="50" x2="90" y2="50" stroke="#FB6D3B" strokeWidth="10" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="#FB6D3B" strokeWidth="10" />
                  </svg>

                </button>
                <button 
                className="btns-plus-less" 
                type="button" onClick={() => handleDecreaseQuantity(index)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
                  <line x1="10" y1="50" x2="90" y2="50" stroke="#FB6D3B" strokeWidth="10" />
                  </svg>
                </button>
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
                    fill="none"
                    stroke="#FB6D3B"
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

      <div className="div-total">
        <span id="total" className="texto-total"> Total ${total}</span>
      </div>

        <Buttons 
        type="submit" 
        tag="Submit"
        />

    </form>
  </section> 
  );
}
export default Order;