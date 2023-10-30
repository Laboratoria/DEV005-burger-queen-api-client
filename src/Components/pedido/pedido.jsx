import React, { useState, useEffect } from "react";
import {
  getProducts2,
  postOrders,
  getRequestOptions,
  getOrders,
  patchOrders,
} from "../../Services/UserService";
import Select from "react-select";
import LOGO from "../../img/LOGO.png";
import "./estilo-pedido.css";
import Menu from "./menu"; // Importa el componente Menu
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import DeliveredOrders from "../cocina/DeliveredOrder";
const mesa = [
  { label: "Mesa #1", value: "Mesa 1" },
  { label: "Mesa #2", value: "Mesa 2" },
  { label: "Mesa #3", value: "Mesa 3" },
  { label: "Mesa #4", value: "Mesa 4" },
  { label: "Mesa #5", value: "Mesa 5" },
  { label: "Mesa #6", value: "Mesa 6" },
];
function Pedido() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectMesa, setSelectMesa] = useState(null);
  const [selectName, setSelectName] = useState({ name: "" });
  const [showError, setShowError] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [cart, setCart] = useState({});
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [deliveringOrders, setDeliveringOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const storedOrders =
    JSON.parse(localStorage.getItem("deliveredOrders")) || [];
  const enviarPedido = () => {
    if (!selectMesa || !selectName.name || Object.keys(cart).length === 0) {
      setShowError(true);
      return;
    }
    // Agregamos una confirmación antes de enviar el pedido
    const confirmEnviar = window.confirm(
      "¿Estás seguro de que quieres enviar el pedido a cocina?"
    );
    if (confirmEnviar) {
      const orderProducts = Object.values(cart).map((item) => ({
        product: {
          id: item.id,
          image: item.image,
          name: item.name,
          price: item.price,
          type: item.type,
        },
        qty: item.qty,
      }));
      const orderData = {
        client: selectName.name,
        products: orderProducts,
        status: "pending",
        dataEntry: new Date().toISOString(),
      };
      postOrders(orderData)
        .then((response) => {
          setIsConfirmationOpen(true);
          setCart({});
          setSelectName({ name: "" });
          setSelectMesa(null);
          // Actualiza el estado de las órdenes entregadas
          const updatedDeliveredOrders = [...deliveredOrders, response.id];
          setDeliveredOrders(updatedDeliveredOrders);
          // Actualiza el almacenamiento local
          localStorage.setItem(
            "deliveredOrders",
            JSON.stringify(updatedDeliveredOrders)
          );
        })
        .catch((error) => {
          console.error("Error al enviar el pedido:", error);
        });
    }
  };
  const handleSelectChange = (selectedOption) => {
    setSelectMesa(selectedOption);
  };
  const handleChangeName = (e) => {
    setSelectName({
      name: e.target.value,
    });
  };
  const handleInputChange = () => {
    if (showError) {
      setShowError(false);
    }
  };
  useEffect(() => {
    getProducts2()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);
  const desayunoProducts = products.filter(
    (product) => product.type === "Desayuno"
  );
  const almuerzoProducts = products.filter(
    (product) => product.type === "Almuerzo"
  );
  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      const productId = product.id;
      if (updatedCart[productId]) {
        updatedCart[productId] = {
          ...updatedCart[productId],
          qty: updatedCart[productId].qty + 1,
        };
      } else {
        updatedCart[productId] = {
          ...product,
          qty: 1,
        };
      }
      return updatedCart;
    });
  };
  const incrementQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart[productId] = {
        ...updatedCart[productId],
        qty: updatedCart[productId].qty + 1,
      };
      return updatedCart;
    });
  };
  const decrementQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart[productId] = {
        ...updatedCart[productId],
        qty: updatedCart[productId].qty - 1,
      };
      // Remove the item from the cart if the quantity becomes 0
      if (updatedCart[productId].qty <= 0) {
        delete updatedCart[productId];
      }
      return updatedCart;
    });
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };
  const confirmAndRemoveFromCart = (productId) => {
    const confirmRemove = window.confirm(
      "¿Estás seguro de que quieres eliminar este producto del carrito?"
    );
    if (confirmRemove) {
      removeFromCart(productId);
    }
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    Object.values(cart).forEach((item) => {
      totalPrice += item.qty * item.price;
    });
    return totalPrice;
  };
  const clearCart = () => {
    const confirmClear = window.confirm(
      "¿Estás seguro de que quieres eliminar todos los productos del carrito?"
    );
    if (confirmClear) {
      setCart({});
    }
  };
  {
    isWarningOpen && (
      <div className="warning-popup">
        <p>Rellene todos los campos.</p>
        <button onClick={() => setIsWarningOpen(false)}>OK</button>
      </div>
    );
  }
  {
    isConfirmationOpen && (
      <div className="confirmation-popup">
        <p>¿Está seguro de que su pedido está completo?</p>
        <button onClick={() => setIsConfirmationOpen(false)}>Cancelar</button>
        <button onClick={enviarPedido}>Confirmar</button>
      </div>
    );
  }
  const fetchDeliveringOrders = () => {
    const requestOptions = getRequestOptions("GET");
    getOrders(requestOptions)
      .then((data) => {
        const deliveringOrders = data.filter((order) => order.status === "delivering");
        setDeliveringOrders(deliveringOrders);
      })
      .catch((error) => {
        console.error("Error fetching delivering orders:", error);
      });
  };
  
  // Llama a la función para obtener las órdenes cuando sea necesario, por ejemplo, en useEffect.
  useEffect(() => {
    fetchDeliveringOrders();
  }, []);
  
  useEffect(() => {
    // Calcula el precio total sumando los subtotales de cada elemento en el carrito
    let totalPrice = 0;
    Object.values(cart).forEach((item) => {
      totalPrice += item.qty * item.price;
    });
    setTotalPrice(totalPrice);
  }, [cart]);

  const handleOrderClick = (order) => {
    const confirmation = window.confirm(`¿La orden #${order.id} ha sido entregada?`);
    if (confirmation) {
      if (order.status === "delivering") {
        // Actualiza el estado de la orden como "delivered"
        markOrderAsReady(order.id);
        // Actualiza el estado de las órdenes entregadas (esto se hará automáticamente)
      }
    }
  };
  const markOrderAsReady = async (orderId) => {
    try {
      const requestOptions = getRequestOptions("PATCH");
      const patchData = {
        status: "delivered",
        deliveryTime: new Date().toISOString(),
      };
      const url = `http://localhost:8080/orders/${orderId}`;
      const response = await fetch(url, {
        ...requestOptions,
        method: "PATCH",
        body: JSON.stringify(patchData),
      });
      if (response.ok) {
        // Actualiza el estado de las órdenes entregadas y entregando
        const updatedDeliveringOrders = deliveringOrders.filter((order) => order.id !== orderId);
        setDeliveringOrders(updatedDeliveringOrders);
      }
    } catch (error) {
      console.error("Error al marcar la orden como entregada:", error);
    }
  };
  
  return (
    <>
      <div className="container-total">
        <div className="menu">
          <div className="menu-header">
            <Select
              className="mesa-select"
              options={mesa}
              onChange={handleSelectChange}
              onFocus={handleInputChange}
              value={selectMesa}
            />
            <label className="nombreCliente">
              Cliente:
              <input
                onChange={handleChangeName}
                onFocus={handleInputChange}
                value={selectName.name}
                type="text"
                className="cliente-input"
                placeholder="Nombre del cliente"
              />
            </label>
          </div>
          <h2>Desayuno</h2>
          <Menu menuItems={desayunoProducts} onAddToCart={addToCart} />
          <h2>Almuerzo</h2>
          <Menu menuItems={almuerzoProducts} onAddToCart={addToCart} />
        </div>
        <div className="logo-container-pedido">
          <h1 className="logo-pedido">BURGUER QUEEN</h1>
          <img src={LOGO} className="logo1-pedido" alt="Burger Queen Logo" />
        </div>
        <div className="pedido">
          <div className="container_buttons">
            <button className="btn_ClearCart" onClick={clearCart}>
              Eliminar Orden
            </button>
            <div className="datosPedido">
              {selectMesa && <p className="mesaPedido">{selectMesa.label}</p>}
              {selectName.name && (
                <p className="clientePedido">Cliente: {selectName.name}</p>
              )}
            </div>
          </div>
          <h2 className="subtitle_shopping_cart">Pedido</h2>
          <div className="membrete">
          <div className="container_shopping_cart">
            {Object.values(cart).length > 0 && (
              <div>
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
                  {Object.values(cart).map((item) => (
                    <div className="shopping-cart-product">
                      <div className="shopping-cart1" key={item.id}>
                        <p>{item.name}</p>
                      </div>
                      <div className="shopping-cart2">
                        <button
                          className="BtnMenos"
                          onClick={() => decrementQuantity(item.id)}
                        >
                          {/* <FontAwesomeIcon icon={faMinus} /> */}
                          -
                        </button>
                        <p className="suma-cantidad">{item.qty}</p>
                        <button
                          className="BtnMas"
                          onClick={() => incrementQuantity(item.id)}
                        >
                          {/* <FontAwesomeIcon icon={faPlus} /> */}
                          +
                        </button>
                      </div>
                      <div className="shopping-cart3">
                        <p className="subtotal"> ${item.qty * item.price} </p>
                      </div>
                      <div className="shopping-cart4">
                        <button
                          className="btnPapelera"
                          onClick={() => confirmAndRemoveFromCart(item.id)}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                  
                </div>
               
              </div>
            )}
          </div>
          
           </div> 
           <div className="total-price">
   <p className="total-amount">Total: ${totalPrice.toFixed(2)}</p>
</div>
          <div className="btnCocinaMensaje">
          <button className="botonEnviar" type="button" onClick={enviarPedido}>
            Enviar a Cocina
          </button>
          {showError && (
            <div className="error-message">
              Por favor, complete todos los campos antes de enviar la orden.
            </div>
          )}
          </div>
        </div>
        <div className="ordenes-listas">
  <h4>Ordenes Listas Para entregar</h4>
  <p className="indicaciones">
    Haz click en el número de orden para confirmar la entrega
  </p>
  <div className="Total-delivering-container">
    {deliveringOrders.map((order) => (
      <button
        key={order.id}
        className="delivering-container"
        onClick={() => handleOrderClick(order)}
      >
        #{order.id}
      </button>
    ))}
  </div>
</div>
      </div>
    </>
  );
}
export default Pedido;
