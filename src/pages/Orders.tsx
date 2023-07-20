import React, { useEffect, useState } from "react";
import ProductIcon from "../icons/ProductIcon";
import EquipIcon from "../icons/EquipIcon";
import Aside from "../components/Aside";
import { Order, Product } from "../services/interfaces";
import { api } from "../services/api";
import dayjs from "dayjs";
import Modal from "../components/Modal";

// Definición de la interfaz para las ordenes

// Definición del componente Orders
const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderSelected, setOrderSelected] = useState<string>("");
  const [isModalEntregarOpen, setIsModalEntregarOpen] = useState(false);
  const [isModalCancelarOpen, setIsModalCancelarOpen] = useState(false);
  const [isModalEntregadoOpen, setIsModalEntregadoOpen] = useState(false);

  const handleEntregarOpenModal = (id: string) => {
    setOrderSelected(id);
    setIsModalEntregarOpen(true);
  };

  const handleEntregarCloseModal = () => {
    setOrderSelected("");
    setIsModalEntregarOpen(false);
  };

  const handleCancelarOpenModal = (id: string) => {
    setOrderSelected(id);
    setIsModalCancelarOpen(true);
  };

  const handleCancelarCloseModal = () => {
    setOrderSelected("");
    setIsModalCancelarOpen(false);
  };

  const handleEntregadoOpenModal = (id: string) => {
    setOrderSelected(id);
    setIsModalEntregadoOpen(true);
  };

  const handleEntregadoCloseModal = () => {
    setOrderSelected("");
    setIsModalEntregadoOpen(false);
  };

  const handleUpdateOrder = async (status: string) => {
    await api.orders.updateOrder(orderSelected, status);
    await getData();
    handleEntregarCloseModal();
    handleCancelarCloseModal();
    handleEntregadoCloseModal();
  };

  const getData = async () => {
    const dataOrders = await api.orders.getOrders();

    setOrders(dataOrders);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="flex h-screen">
        <Aside />
        <article className="flex-1 pt-[92px] pb-10 px-6 overflow-auto ">
          <div className="flex flex-wrap gap-5 justify-center">
            {orders.map((item, index) => (
              <div
                key={item?._id}
                className="bg-[#06161C] bg-opacity-5 rounded-md p-5 py-2.5 w-[274px]"
              >
                <p className="text-center text-xs font-bold">
                  Orden número: {index + 1}
                </p>
                <p
                  className={`${
                    item?.status === "pending"
                      ? "text-[#F11111]"
                      : item?.status === "delivering"
                      ? "text-[#4AD83D]"
                      : item?.status === "delivered"
                      ? "text-[#0F52B7]"
                      : "text-[#F11111]"
                  } text-[10px] my-3`}
                >
                  Estado:{" "}
                  {item?.status === "pending"
                    ? "pendiente"
                    : item?.status === "delivering"
                    ? "listo"
                    : item?.status === "delivered"
                    ? "entregado"
                    : "cancelado"}
                </p>

                <p className="text-[10px] my-3">
                  Fecha de pedido:{" "}
                  {dayjs(item?.dateEntry).format("DD/MM/YYYY HH:mm:ss")}
                </p>

                <p className="text-[10px] mt-3">
                  Fecha de entrega:{" "}
                  {dayjs(item?.dateProcessed).format("DD/MM/YYYY HH:mm:ss")}{" "}
                </p>
                <div className="text-[rgba(0, 0, 0, 0.61)]">
                  ------------------------------------
                </div>
                <p className="font-bold text-[10px]">
                  Cliente: <span className="font-normal">{item?.client}</span>
                </p>
                <div className="my-5">
                  {item?.products.map((item) => (
                    <div
                      key={item?.product?._id}
                      className="flex text-[10px] justify-between"
                    >
                      <div className="flex gap-1">
                        <p>{item?.qty}</p>
                        <p>{item?.product.name}</p>
                      </div>

                      <p>S/.{item?.product.price}</p>
                    </div>
                  ))}
                </div>
                {item?.status === "pending" && (
                  <div className="flex justify-between">
                    <button
                      className="bg-brown text-white rounded-[5px] py-1 px-4 font-bold text-lg"
                      onClick={() => handleEntregarOpenModal(item._id)}
                    >
                      Entregar
                    </button>
                    <button
                      className="bg-brown text-white rounded-[5px] py-1 px-4 font-bold text-lg"
                      onClick={() => handleCancelarOpenModal(item._id)}
                    >
                      Cancelar
                    </button>
                  </div>
                )}
                {item?.status === "delivering" && (
                  <div className="flex justify-center">
                    <button
                      className="bg-brown text-white rounded-[5px] py-1 px-4 font-bold text-lg"
                      onClick={() => handleEntregadoOpenModal(item._id)}
                    >
                      Entregado
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Modal para entregar la orden */}
      <Modal isOpen={isModalEntregarOpen} onClose={handleEntregarCloseModal}>
        <h2 className="text-2xl font-bold mb-2">Orden </h2>
        <p>¿Estas seguro que quieres entregar la orden?</p>
        <div className="flex justify-end gap-2 mt-3">
          <button
            className="bg-brown text-white font-bold py-2 px-4 rounded border-2 border-brown"
            onClick={() => handleUpdateOrder("delivering")}
          >
            Aceptar
          </button>
          <button
            className="border-brown border-2 text-brown font-bold py-2 px-4 rounded"
            onClick={handleEntregarCloseModal}
          >
            Rechazar
          </button>
        </div>
      </Modal>

      {/* Modal para cancelar la orden */}
      <Modal isOpen={isModalCancelarOpen} onClose={handleCancelarCloseModal}>
        <h2 className="text-2xl font-bold mb-2">Orden </h2>
        <p>¿Estas seguro que quieres cancelar la orden?</p>
        <div className="flex justify-end gap-2 mt-3">
          <button
            className="bg-brown text-white font-bold py-2 px-4 rounded border-2 border-brown"
            onClick={() => handleUpdateOrder("canceled")}
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

      {/* Modal para terminar la orden */}
      <Modal isOpen={isModalEntregadoOpen} onClose={handleEntregadoCloseModal}>
        <h2 className="text-2xl font-bold mb-2">Orden </h2>
        <p>¿Estas seguro que quieres terminar la orden?</p>
        <div className="flex justify-end gap-2 mt-3">
          <button
            className="bg-brown text-white font-bold py-2 px-4 rounded border-2 border-brown"
            onClick={() => handleUpdateOrder("delivered")}
          >
            Aceptar
          </button>
          <button
            className="border-brown border-2 text-brown font-bold py-2 px-4 rounded"
            onClick={handleEntregadoCloseModal}
          >
            Rechazar
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Orders;
