import React, { useState, useEffect, useReducer } from "react";
import LOGO from "../../img/LOGO.png";
import "./estilo-pedido.css";
import Select from "react-select";
import { reducerCart, productsInitialState } from '../../Services/reducerCart';
import { TYPES } from "../../Services/reducerCart";
import { getProducts, getRequestOptions } from '../../Services/UserService';

const mesa = [
  { label: "Mesa #1", value: "Mesa 1" },
  { label: "Mesa #2", value: "Mesa 2" },
  { label: "Mesa #3", value: "Mesa 3" },
];

export default function Pedido() {
  const [selectMesa, setSelectMesa] = useState(null);
  const [selectName, setSelectName] = useState({ name: "" });
  const [state, dispatch] = useReducer(reducerCart, productsInitialState);
  // const [apiProducts, setApiProducts] = useState([]); // Agrega esta línea
  const [apiProducts, setApiProducts] = useState([]); 

  // hook selectMesa
  const handleSelectChange = (selectedOption) => {
    // console.log(selectedOption);
    setSelectMesa(selectedOption);
  };

  // hook selectName
  const handleChangeName = (e) => {
    setSelectName({
      ...selectName,
      name: e.target.value,
    });
  };



  // hook useReducer
  const addToCart = (id) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id
    })
  };

  const deleteFromCart = (id) => {
    dispatch({
      type: TYPES.DELETE_PRODUCT_FROM_CART,
      payload: id
    })
  };

  const clearCart = () => {
    dispatch({
      type: TYPES.DELETE_ALL_FROM_CART
    })
  };

  const calculateTotalPriceOfCart = () => {
    dispatch({ type: TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART })
  };

  //-----
 
  useEffect(() => {
    const requestOptions = getRequestOptions("GET");
    getProducts(requestOptions)
      .then(data => {
        setApiProducts(data);
        console.log(data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);
  
  
// ...

  

  return (
    <>
      <div className="container-total">
        <div className="menu">
          <div className="menu-header">
            <Select
              options={mesa}
              onChange={handleSelectChange}
              value={selectMesa}
            />
            <label className="nombreCliente">
              Cliente:
              <input
                onChange={handleChangeName}
                value={selectName.name}
                type="text"
                className="cliente-input"
                placeholder="Nombre del cliente"
              />
            </label>
            
            <div className="container_grid_products">
        <div className="product-section">
          <h2>Desayuno</h2>
          {apiProducts
            .filter(product => product.type === "Desayuno")
            .map(product => (
              <div className="product-item" key={product.id}>
                <h3>{product.name}</h3>
                <p>Precio: {product.price}</p>
                <img src={product.image} alt={product.name} className="product-image" />
                <button className="btnProduct" onClick={() => addToCart(product.id)}>
                  Agregar
                </button>
              </div>
            ))}
        </div>
        <div className="product-section">
          <h2>Almuerzo</h2>
          {apiProducts
            .filter(product => product.type === "Almuerzo")
            .map(product => (
              <div className="product-item" key={product.id}>
                <h3>{product.name}</h3>
                <p>Precio: {product.price}</p>
                <img src={product.image} alt={product.name} className="product-image" />
                <button className="btnProduct" onClick={() => addToCart(product.id)}>
                  Agregar
                </button>
              </div>
            ))}
        </div>
      </div>

        <div className="pedido">
          {selectMesa && <p>{selectMesa.label}</p>}
          {selectName.name && <p>Cliente: {selectName.name}</p>}
          <h2 className='subtitle_shopping_cart'>Pedido</h2>
          <div className='container_buttons'>
            <button className='btn btn_totalPrice' onClick={() => calculateTotalPriceOfCart()}>Precio Total</button>
            {state.totalPriceShoppingCart > 0 && <p className='totalPrice_shoppingCart'>Precio Total: {state.totalPriceShoppingCart}</p>}
            <button className='btn btn_ClearCart' onClick={() => clearCart()}>Eliminar</button>
          </div>
            {state.cart.length === 0 && <p className='text_NoProductsInCart'>No hay productos en la orden</p>}
          <div className='container_grid_shopping_cart'>
            {state.cart.map((productCart) => (
              <div className="shopping-cart-product" key={productCart.id}>
                <h3>{productCart.name}</h3>
                <p>Precio: {productCart.price}</p>
                <button className="btnProduct" onClick={() => deleteFromCart(productCart.id)}>
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div> 
        <div className="logo-container-pedido">
          <h1 className="logo-pedido">BURGUER QUEEN</h1>
          <img src={LOGO} className="logo1-pedido" alt="Burger Queen Logo" />
        </div>
      </div>
      </div>
      </div>
   </>
   
  );
}


  
/* 
// const waiter = () => {
//   const [productsSelected, setProductsSelected] = useState([]);
//   const addProduct = () => {};

//   return (
//     <>
//     <productList onAdd={addProduct}></productList>
//     <createOrder products={productsSelected}></createOrder>
//     </>
//   );
// }

// const productList = ({onAdd}) => {

//   return (
//     <>
//     Productos para elegir:
//     <ul>
//       <li onClick={onAdd}>Producto 1</li>
//       <li onClick={onAdd}>Producto 2</li>
//       <li onClick={onAdd}>Producto 3</li>
//       <li onClick={onAdd}>Producto 4</li>
//       <li onClick={onAdd}>Producto 5</li>
//       <li onClick={onAdd}>Producto 6</li>
//       <li onClick={onAdd}>Producto 7</li>
//     </ul>
//     </>
//   );
// }

// const createOrder = ({products}) => {

//   return (
//     <>
//     Tu orden tiene los siguiente productos agregados:
//     <ul>
//       {products.map((p) => <li>{p.name}</li>)}
//     </ul>
//     total: $90000
//     </>
//   );
// }
 */
