import React from "react";
import Banner from "../../banner/banner.jsx";
import ButtonSmall from "../../buttonSmall/ButtonSmall.jsx";
import ButtonGreen from "../../buttons/buttonGreen.jsx";
import SendButton from "../../sendButton/sendButton.jsx";
import AddProductToOrder from "../../addProducts/addProducts.jsx";
import InputClient from "../../inputClient/inputClient.jsx";
import Menu from "./Menu.jsx";
import { useState, useEffect } from "react";
import apiRequest from "../../../services/apiRequest.js";
import Swal from "sweetalert2";

import "../../../styles/kitchen/Orders.css";

export const Orders = () => {
  const [products, setProducts] = useState([]); // products = valor inicial y setProducts actualiza el valor
  const [showProducts, setShowProducts] = useState("Desayuno");
  const [addProduct, setAddProduct] = useState([]);
  const [clientName, setClientName] = useState("");
  const [clientTable, setClientTable] = useState("");
  //onst [modalSendOrder, setModalSendOrder] = useState(false);
  //const [modalErrorOrder, setModalErrorOrder] = useState(false);

  useEffect(() => {
    apiRequest("/products", "GET").then((data) => {
      setProducts(data);
    });
  }, []);

  // funcion agregar producto
  const handleAddProduct = (product) => {
    const existingProduct = addProduct.findIndex(
      (item) => item.id === product.id
    );

    if (existingProduct !== -1) {
      // Si el producto ya existe en la orden, incrementa su cantidad
      const updatedOrder = [...addProduct]; // copia
      updatedOrder[existingProduct].qty += 1;
      setAddProduct(updatedOrder);
    } else {
      // Si el producto no existe en la orden, se agrega cantidad 1 1
      setAddProduct((prevOrder) => [...prevOrder, { ...product, qty: 1 }]);
    }
  };
  // Función de restar productos
  const handleMinusProduct = (product) => {
    const updatedOrder = [...addProduct];
    const productIndex = updatedOrder.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex !== -1 && updatedOrder[productIndex].qty > 1) {
      updatedOrder[productIndex].qty -= 1;
      setAddProduct([...updatedOrder]); // Actualiza la lista con la nueva cantidad modificada.
    }
  };
  // funcion delete
  const handleDeleteProduct = (productToDelete) => {
    const updatedOrders = addProduct.filter(
      (product) => product.id !== productToDelete.id
    );
    setAddProduct(updatedOrders);
    console.log(updatedOrders);
  };
  // Calcular el total de la orden
  const calculateTotalOrder = () => {
    return addProduct.reduce(
      (total, order) => total + order.price * order.qty,
      0
    );
  };
  // Nombre del cliente
  const handleInputClientChange = (e) => {
    setClientName(e.target.value);
  };

  // Numero de mesa
  const handleInputTableChange = (e) => {
    setClientTable(e.target.value);
  };

  // función enviar nueva order
  const handleNewOrder = async () => {
    if (addProduct.length === 0 || clientName === "" || clientTable === "") {
      //setModalErrorOrder(true);
      Swal.fire({
        title: "Error",
        html: "<span class='text'>Por favor agrega productos, nombre de cliente y N° mesa.</span>",
        icon: "warning",
        confirmButtonText: "Ok",
        confirmButtonColor: "#68902B",
      });

      return;
    }

    const newOrder = {
      client: clientName,
      table: clientTable,
      products: addProduct.map((product) => ({
        qty: product.qty,
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          type: product.type,
          dateEntry: product.dateEntry,
        },
      })),
      status: "Pendiente",
      dateEntry: new Date().toISOString(),
    };
    try {
      // Realizar la solicitud POST para crear una nueva orden
      const response = await apiRequest("/orders", "POST", newOrder);

      if (response) {
        // setModalSendOrder(true);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tu orden ha sido enviada",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#68902B",
        });
        console.log("Tu orden ha sido generada con éxito");
        // Restablecer los estados a un estado inicial vacío
        setAddProduct([]);
        setClientName("");
        setClientTable("");
      }
    } catch (error) {
      console.error("Error al crear la orden:", error.message);
    }
  };

  return (
    <div className='Orders'>
      <Banner />
      <div className='buttonsClients'>
        <div className='buttons'>
          <ButtonGreen
            buttonText='Desayuno'
            isActive={showProducts === "Desayuno"}
            onClickHandler={() => setShowProducts("Desayuno")}
          />

          <ButtonGreen
            buttonText='Almuerzo-Cena'
            isActive={showProducts === "Almuerzo"}
            onClickHandler={() => setShowProducts("Almuerzo")}
          />
        </div>
        <div className='clients'>
          <InputClient
            type='text'
            handleInputChange={handleInputClientChange}
            name={clientName}
            placeholder='Nombre del cliente'
          />
          <InputClient
            type='number'
            handleInputChange={handleInputTableChange}
            name={clientTable}
            placeholder='N° de mesa'
          />
        </div>
      </div>
      <div className='main'>
        <div className='product-container'>
          {products
            .filter((product) => product.type === showProducts)
            .map((product) => (
              <Menu key={product.id} product={product}>
                <ButtonSmall
                  buttonText='Agregar'
                  functionButton={handleAddProduct}
                  product={product}
                />
              </Menu>
            ))}
        </div>
        <div className='orders-container'>
          <div className='black-container'>
            <h1 className='title'>ORDEN</h1>
            <div className='line'></div>
            <AddProductToOrder
              addProduct={addProduct}
              handleMinus={handleMinusProduct}
              handlePlus={handleAddProduct}
              handleDelete={handleDeleteProduct}
            />
            <br />
            <div className='line'></div>
            <div className='text'>Total ${calculateTotalOrder()}</div>
            <SendButton
              buttonText='Enviar Orden'
              onClickHandler={handleNewOrder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
