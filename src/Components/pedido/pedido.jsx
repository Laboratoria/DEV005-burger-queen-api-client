import React, { useState, useEffect, useReducer } from "react";
import LOGO from "../../img/LOGO.png";
import "./estilo-pedido.css";
import Select from "react-select";
import { reducerCart, productsInitialState, TYPES } from "../../Services/reducerCart";
import {
  getProducts,
  getRequestOptions,
  postOrders,
  getOrders,
} from "../../Services/UserService";

const mesa = [
  { label: "Mesa #1", value: "Mesa 1" },
  { label: "Mesa #2", value: "Mesa 2" },
  { label: "Mesa #3", value: "Mesa 3" },
];

export default function Pedido() {
  const [selectMesa, setSelectMesa] = useState(null);
  const [selectName, setSelectName] = useState({ name: "" });
  const [state, dispatch] = useReducer(reducerCart, productsInitialState);
  const [apiProducts, setApiProducts] = useState([]);
  const [apiOrders, setApiOrders] = useState([]);
  const [showError, setShowError] = useState(false); 

  // hook selectMesa
  const handleSelectChange = (selectedOption) => {
    // console.log(selectedOption);
    setSelectMesa(selectedOption);
    
  };

  // hook selectName
  const handleChangeName = (e) => {
    setSelectName({
      // ...selectName,
      name: e.target.value,
    });
  };

  // hook useReducer
  const addToCart = (id) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id,
    });
    calculateTotalPriceOfCart();
  };

  // Borra un producto del pedido

  const deleteOneProductFromCart = (id) => {
    dispatch({
      type: TYPES.DELETE_ONE_PRODUCT_FROM_CART,
      payload: id,
    });
    calculateTotalPriceOfCart();
  };

  // Borra el pedido (eliminar Orden)
  const clearCart = () => {
    dispatch({
      type: TYPES.DELETE_ALL_FROM_CART,
    });
    calculateTotalPriceOfCart();
    setSelectMesa(null);
    setSelectName({ name: "" });
  };

  // Calcula el total
  const calculateTotalPriceOfCart = () => {
    dispatch({ type: TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART });
  };
  // console.log(calculateTotalPriceOfCart);

  // reduce de a 1 producto (-)
  const decreaseQuantityFromCart = (id) => {
    dispatch({
      type: TYPES.DELETE_PRODUCT_FROM_CART,
      payload: id,
    });
    calculateTotalPriceOfCart();
  };

  // Hook peticion de productos (menú)

  useEffect(() => {
    const requestOptions = getRequestOptions("GET");
    getProducts(requestOptions)
      .then((data) => {
        setApiProducts(data);
        //console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // ... Hook Posteo de Orden
  useEffect(() => {
    if (apiOrders.length > 0) {
        return;
    }

    if (selectName.name && state.cart.length && selectMesa > 0) {
      const requestOptions = getRequestOptions("POST");
      postOrders(selectName.name, state.cart, requestOptions)
        .then((data) => {
          console.log(data);
          setApiOrders([data]);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [selectName.name, state.cart, apiOrders]);


  return (
    <>
      <div className="container-total">
        <div className="menu">
          <div className="menu-header">
            <Select
              className="mesa-select"
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
          </div>
          <div className="container_products">
            <div className="product-section">
              <h2>Desayuno</h2>
              {apiProducts
                .filter((product) => product.type === "Desayuno")
                .map((product) => (
                  <div className="product-item" key={product.id}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    <h3>{product.name}</h3>
                    <div className="precio-btn">
                      <p className="precio">${product.price}</p>

                      <button
                        className="btnProduct"
                        onClick={() => addToCart(product.id)}
                      >
                        Agregar
                      </button>
                    </div>
                  </div>
                ))} 
            </div>
            <div className="product-section">
              <h2>Almuerzo</h2>
              {apiProducts
                .filter((product) => product.type === "Almuerzo")
                .map((product) => (
                  <div className="product-item" key={product.id}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    <h3>{product.name}</h3>
                    <div className="precio-btn">
                      <p className="precio">${product.price}</p>

                      <button
                        className="btnProduct"
                        onClick={() => addToCart(product.id)}
                      >
                        Agregar
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="logo-container-pedido">
          <h1 className="logo-pedido">BURGUER QUEEN</h1>
          <img src={LOGO} className="logo1-pedido" alt="Burger Queen Logo" />
        </div>
        <div className="pedido">
          <h2 className="subtitle_shopping_cart">Pedido</h2>
          <div className="membrete">
            <div className="container_buttons">
              <button className="btn_ClearCart" onClick={() => clearCart()}>
                Eliminar Orden
              </button>
            </div>
            <div className="datosPedido">
              {selectMesa && <p className="mesaPedido">{selectMesa.label}</p>}
              {selectName.name && (
                <p className="clientePedido">Cliente: {selectName.name}</p>
              )}
            </div>
          </div>
          * {state.cart.length === 0 && (
            <p className="text_NoProductsInCart">
              No hay productos en la orden
            </p>
          )}
          <div className="container_shopping_cart">
            <div className="tituloTabla">
              <div className="tituloTabla1">
                <p>Producto</p>
              </div>
              <div className="tituloTabla2">
                <p>Cantidad</p>
              </div>
              <div className="tituloTabla3">
                <p>Precio</p>
              </div>
            </div>
            <div className="scroll-pedido">
              {state.cart.map((productCart) => (
                <div
                  className="shopping-cart-product"
                  key={productCart.product.id}
                >
                  <div className="shopping-cart1">
                    {" "}
                    <h3 className="nameProduct">{productCart.product.name}</h3>
                  </div>
                  <div className="shopping-cart2">
                    <button
                      className="BtnMenos"
                      onClick={() =>
                        decreaseQuantityFromCart(productCart.product.id)
                      }
                    >
                      -
                    </button>
                    <p className="suma-cantidad">{productCart.qty}</p>
                    <button
                      className="BtnMas"
                      onClick={() => addToCart(productCart.product.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="shopping-cart3">
                    <p>${productCart.qty * productCart.product.price}</p>
                  </div>
                  <div className="shopping-cart4">
                    <button
                      className="btnPapelera"
                      onClick={() =>
                        deleteOneProductFromCart(productCart.product.id)
                      }
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="totalPrice_shoppingCart">Total: ${state.totalCuenta}</p>
          <button
          className="botonEnviar"
          type="submit"
          value="enviar"
          onClick={async () => {
            try {
              if (!selectName.name || state.cart.length === 0 || !selectMesa ) {
                console.log("Rellene todos los campos necesarios");
                setShowError(true); // Mostrar mensaje de error
                return;
              }

              console.log("Enviando a cocina...");
              console.log("Nombre del cliente:", selectName.name);
              console.log("Productos en el carrito:", state.cart);

              const clientName = selectName.name;

              const response = await postOrders(clientName, state.cart);

              if (response.status === "pending") {
                console.log("Orden enviada con éxito:", response.status);
              } else {
                console.log("La orden no se ha enviado correctamente.");
              }
            } catch (error) {
              console.error("Error al enviar la orden:", error);
              setShowError(true); // Mostrar mensaje de error
            }
          }}
        >
          Enviar a Cocina
        </button>
        {showError && (
          <p className="error-message">❌ Rellene todos los campos necesarios</p>
        )}

       
        </div>
      </div>
    </>
  );
}
