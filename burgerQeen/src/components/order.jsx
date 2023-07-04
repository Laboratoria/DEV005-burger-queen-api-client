
import { useState } from "react";
import Shopping from "../waiter/shopping";
import Products from "../Petitions/products";
import ShoppingC from "../waiter/shoppingC";
import ClientName from "../waiter/client.jsx";
import axios from "axios";
const Order = () => {
  //selección de productos del usuario
  const [selectedProducts, setSelectedProducts] = useState([]);
  //constante con el total del valor a pagar
  const [totalPrice, setTotalPrice] = useState(0);
  //función del btn que agrega los productos seleccionados al carrito
  const handleAddProduct = (selectedProduct) => {
    //revisar si el elemento agregado existe a través del id del producto,
    if (selectedProducts.find((item) => item.id === selectedProduct.id)) {
      const newProducts = selectedProducts.map((item) =>
        item.id === selectedProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setTotalPrice(totalPrice + selectedProduct.price);
      return setSelectedProducts([...newProducts]);
    }
    console.log(selectedProduct);

    setSelectedProducts([...selectedProducts, selectedProduct]);
    console.log("Click en agregar");
  };
  //Borra el item de la lista (no la cantidad)
  const deleteProduct = (productToDelete) => {
    console.log("CLICK EN DELETE");
    const results = selectedProducts.filter(
      (item) => item.id !== productToDelete.id
    );
    setTotalPrice(totalPrice - productToDelete.price);
    setSelectedProducts(results);
  };
  console.log("Este es el arreglo del producto seleccionado", selectedProducts);
  console.log("TOTAL PRICE", totalPrice);

  //Para disminuir la cantidad de item en 1
  const reduceProduct = (productToDelete) => {
    //si es 1 llama a deleteProduct para que elimine todo el item
    if (productToDelete.quantity === 1) {
      deleteProduct(productToDelete);
    } else {
      const updatedProducts = selectedProducts.map((item) => {
        if (item.id === productToDelete.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setSelectedProducts(updatedProducts);
      setTotalPrice(totalPrice - productToDelete.price);
    }
  };
  //const clientValue será el nombre del cliente y set ClienteValue es la función
  const [clientValue, setClientValue] = useState("");

  // Enviar la orden a la API
  const sendOrder = () => {
    //token de acceso
    const token = localStorage.getItem("accessToken");
    //id de la mesera que está tomando el pedido
    const userId = localStorage.getItem("userId");
    // nombre cliente
    const client = clientValue;
    //fecha actual
    const date = new Date(Date.now()).toLocaleTimeString();
    const manualStatus = "pending";
    // console.log('SEND-ORDER' , token);
    // console.log('userId' , userId);
    // console.log('clientName', client);
    // console.log('products', selectedProducts);
    // console.log('TIME', date);
    // console.log('status', manualStatus)
    const dataOrder = {
      userId: userId,
      client: client,
      products: selectedProducts,
      status: manualStatus,
      dataEntry: date,
      dataExit: null,
    };

    axios
      .post("http://localhost:8080/orders", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dataOrder),
      })
      .then(() => {
        setSelectedProducts([]);
        setTotalPrice(0);
        console.log("DATA-ORDER", dataOrder);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container-order">
        <div className="container-shopping-list">
          <Shopping
            selectedProducts={selectedProducts}
            totalPrice={totalPrice}
            reduceProduct={reduceProduct}
          />
        </div>
        <ClientName clientValue={clientValue} setClientValue={setClientValue} />
        <Products handleAddProduct={handleAddProduct} />
        <ShoppingC
          selectedProducts={selectedProducts}
          totalPrice={totalPrice}
          reduceProduct={reduceProduct}
          sendOrder={sendOrder}
          clientValue={clientValue}
        />
      </div>
    </>
  );
};
export default Order;
