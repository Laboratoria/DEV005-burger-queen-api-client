import React, { useEffect, useState } from "react";
import ProductIcon from "../icons/ProductIcon";
import EquipIcon from "../icons/EquipIcon";
import Aside from "../components/Aside";
import CartIcon from "../icons/CartIcon";
import { api } from "../services/api";
import { Product, User } from "../services/interfaces";
import DeleteIcon from "../icons/DeleteIcon";
import Modal from "../components/Modal";

// Definición del componente Orders
const Orders = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [client, setClient] = useState("");
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalCancelarOpen, setIsModalCancelarOpen] = useState(false);

  const handleCreateOpenModal = () => {
    setIsModalCreateOpen(true);
  };

  const handleCreateCloseModal = () => {
    setIsModalCreateOpen(false);
  };

  const handleCancelarOpenModal = () => {
    setIsModalCancelarOpen(true);
  };

  const handleCancelarCloseModal = () => {
    setIsModalCancelarOpen(false);
  };

  const getData = async () => {
    const dataProducts = await api.products.getProducts();
    setProducts(dataProducts);
  };

  const [cartItems, setCartItems] = useState<
    { product: string; qty: number }[]
  >([]);

  // Función para agregar un producto al carrito o incrementar la cantidad si ya está en el carrito
  const addToCart = (product: string) => {
    const existingItem = cartItems.find((item) => item.product === product);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.product === product ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems((prevItems) => [...prevItems, { product, qty: 1 }]);
    }
  };

  const calculateTotalAmount = () => {
    const totalAmount = cartItems.reduce((total, item) => {
      const product = products.find((product) => product._id === item.product);
      return total + (product?.price || 0) * item.qty;
    }, 0);
    return totalAmount;
  };

  // Función para eliminar un producto del carrito o disminuir la cantidad si hay más de una unidad
  const removeFromCart = (product: string) => {
    const existingItem = cartItems.find((item) => item.product === product);

    if (existingItem) {
      if (existingItem.qty > 1) {
        const updatedCart = cartItems.map((item) =>
          item.product === product ? { ...item, qty: item.qty - 1 } : item
        );
        setCartItems(updatedCart);
      } else {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.product !== product)
        );
      }
    }
  };

  const removeProductCart = (productId: string) => {
    const newCartItems = cartItems.filter((item) => item.product !== productId);
    setCartItems(newCartItems);
  };

  const handleCancelar = () => {
    setClient("");
    setCartItems([]);
    handleCancelarCloseModal();
  };

  const handleEnviar = async () => {
    const user = localStorage.getItem("user");

    if (user) {
      const userParse = JSON.parse(user) as User;

      const data = await api.orders.createOrder({
        products: cartItems,
        client,
        userId: userParse?._id,
      });
      console.log({ data });
      setClient("");
      setCartItems([]);
      handleCreateCloseModal();
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // Renderizado del componente
  return (
    <>
      <section className="flex h-screen">
        <Aside />
        <article className="flex-1 pt-[92px] pb-10 px-6 overflow-auto flex gap-10">
          <div className="max-w-[453px]">
            <div className="flex justify-between">
              <button className="bg-[#C4C4C4] h-10 rounded-xl gap-2 items-center font-roboto text-xl pr-[25px] pl-4">
                Desayuno
              </button>
              <button className="bg-[#C4C4C4] h-10 rounded-xl gap-2 items-center font-roboto text-xl pr-[25px] pl-4">
                Almuerzo/Cena
              </button>
            </div>

            <div className="mx-auto  pt-7">
              <table className="min-w-full border-collapse">
                <thead className="py-2">
                  <tr className="text-white py-2">
                    <th className="bg-black py-2 px-4 rounded-tl-2xl">N°</th>
                    <th className="bg-black py-2 px-4">Producto</th>
                    <th className="bg-black py-2 px-4">Categoria</th>
                    <th className="bg-black py-2 px-4">Precio</th>
                    <th className="bg-black py-2 px-4 rounded-tr-2xl">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((item, index) => (
                    <tr className="border" key={item._id}>
                      <td className="py-2 px-4 text-center">{index + 1}</td>
                      <td className="py-2 px-4 text-center">{item.name}</td>
                      <td className="py-2 px-4 text-center">{item.type}</td>
                      <td className="py-2 px-4 text-center">{item.price}</td>
                      <td className="py-2 px-4">
                        <div className="flex justify-center items-center h-full">
                          <CartIcon
                            className="cursor-pointer"
                            onClick={() => addToCart(item?._id)}
                          />{" "}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-yellow w-full px-12 pt-7 pb-16">
              <input
                placeholder="Nombre Cliente"
                className="bg-white text-black ::placeholder:text-[rgba(22, 21, 21, 0.45)] w-full rounded-[5px] p-1.5"
                value={client}
                onChange={(e) => setClient(e.target.value)}
              />

              <div className="mt-5 flex flex-col gap-4">
                {cartItems.map((item) => {
                  // Buscar el producto en el estado 'products' por su id
                  const product = products.find(
                    (product) => product._id === item.product
                  );
                  if (!product) return null;

                  return (
                    <div
                      className="flex justify-between items-center "
                      key={product._id}
                    >
                      <div className="flex gap-3 items-center w-[48%]">
                        <p className="w-3 font-bold">{item.qty}</p>
                        <p>{product.name}</p>
                      </div>
                      <div className="w-[52%] flex items-center justify-between">
                        <div className="flex gap-1 items-center">
                          <button
                            onClick={() => removeFromCart(item.product)}
                            disabled={item.qty === 1}
                          >
                            -
                          </button>
                          <p className="w-5 text-center">{item.qty}</p>
                          <button onClick={() => addToCart(item.product)}>
                            +
                          </button>
                        </div>
                        <div className="flex gap-5 items-center">
                          <p>S/ {product.price.toFixed(2)}</p>
                          <DeleteIcon
                            className="w-5 h-5 cursor-pointer"
                            onClick={() => removeProductCart(product._id)}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-lg font-bold my-12 text-center">
                TOTAL: S/ {calculateTotalAmount()?.toFixed(2)}
              </p>

              <div className="flex justify-between text-white text-lg font-bold">
                <button
                  disabled={client.length < 1 || cartItems.length < 1}
                  className={`bg-[#F11111] py-2 rounded-[5px] w-36 text-center ${
                    client.length < 1 || cartItems.length < 1
                      ? "opacity-50"
                      : ""
                  }`}
                  onClick={handleCancelarOpenModal}
                >
                  Cancelar
                </button>
                <button
                  disabled={client.length < 1 || cartItems.length < 1}
                  className={`bg-[#131212] py-2 rounded-[5px] w-36 text-center ${
                    client.length < 1 || cartItems.length < 1
                      ? "opacity-50"
                      : ""
                  }`}
                  onClick={handleCreateOpenModal}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Modal confirmar*/}
      <Modal isOpen={isModalCreateOpen} onClose={handleCreateOpenModal}>
        <h2 className="text-2xl font-bold mb-2">Orden </h2>
        <p>¿Estas seguro que quieres crear esta orden?</p>
        <div className="flex justify-end gap-2 mt-3">
          <button
            className="bg-brown text-white font-bold py-2 px-4 rounded border-2 border-brown"
            onClick={() => handleEnviar()}
          >
            Aceptar
          </button>
          <button
            className="border-brown border-2 text-brown font-bold py-2 px-4 rounded"
            onClick={handleCreateCloseModal}
          >
            Rechazar
          </button>
        </div>
      </Modal>

      {/* Modal cancelar*/}
      <Modal isOpen={isModalCancelarOpen} onClose={handleCancelarCloseModal}>
        <h2 className="text-2xl font-bold mb-2">Orden </h2>
        <p>¿Estas seguro que quieres cancelar esta orden?</p>
        <div className="flex justify-end gap-2 mt-3">
          <button
            className="bg-brown text-white font-bold py-2 px-4 rounded border-2 border-brown"
            onClick={() => handleCancelar()}
          >
            Aceptar
          </button>
          <button
            className="border-brown border-2 text-brown font-bold py-2 px-4 rounded"
            onClick={handleCancelarCloseModal}
          >
            Rechazar
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Orders;
