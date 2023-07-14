import { useState } from "react";
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
      setTotalPrice(totalPrice + Number(selectedProduct.price));
      return setSelectedProducts([...newProducts]);
    }
    selectedProduct.quantity = 1
    setTotalPrice(totalPrice + Number(selectedProduct.price));
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
  // console.log("TOTAL PRICE", totalPrice);
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
      setTotalPrice(totalPrice - Number(productToDelete.price));
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

    const dataOrder = {
      userId: userId,
      client: client,
      products: selectedProducts,
      status: manualStatus,
      dataEntry: date,
      dataExit: null,
    };
    axios
      .post("http://localhost:8080/orders", dataOrder, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
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
      <div className="container-order-shopping">
        <div className="container-shopping-lista">
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
