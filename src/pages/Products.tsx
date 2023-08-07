import React, { useEffect, useState } from "react";
import EquipIcon from "../icons/EquipIcon";
import ProductIcon from "../icons/ProductIcon";
import Aside from "../components/Aside";
import AddIcon from "../icons/AddIcon";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
import { Product } from "../services/interfaces";
import { api } from "../services/api";
import Modal from "../components/Modal";
import Input from "../components/Input";

// Definición de la interfaz para los productos

// Definición del componente Products
const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [productSelected, setProductSelected] = useState<string>("");
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const handleCreateOpenModal = () => {
    setIsModalCreateOpen(true);
  };

  const handleCreateCloseModal = () => {
    setIsModalCreateOpen(false);
  };

  const handleDeleteOpenModal = (id: string) => {
    setProductSelected(id);
    setIsModalDeleteOpen(true);
  };

  const handleDeleteCloseModal = () => {
    setProductSelected("");
    setIsModalDeleteOpen(false);
  };

  const handleUpdateOpenModal = (product: Product) => {
    setProductSelected(product._id);
    setName(product?.name);
    setPrice(String(product?.price));
    setType(product?.type);
    setIsModalUpdateOpen(true);
  };

  const handleUpdateCloseModal = () => {
    setProductSelected("");
    setName("");
    setPrice("");
    setType("");
    setIsModalUpdateOpen(false);
  };

  const handleDeleteProduct = async () => {
    await api.products.deleteProduct(productSelected);
    getData();
    handleDeleteCloseModal();
  };

  const hanldeSubmitCreate = async (e: any) => {
    e.preventDefault();
    await api.products.createProduct({ name, price, type });
    getData();
    handleCreateCloseModal();
  };

  const hanldeSubmitUpdate = async (e: any) => {
    e.preventDefault();
    await api.products.updateProduct({
      name,
      price: +price,
      type,
      _id: productSelected,
    });
    getData();
    handleUpdateCloseModal();
  };

  const getData = async () => {
    const dataProducts = await api.products.getProducts();
    setProducts(dataProducts);
  };

  useEffect(() => {
    getData();
  }, []);

  // Renderizado del componente
  return (
    <>
      <section className="flex h-screen">
        <Aside />
        <article className="flex-1 pt-[92px] pb-10 px-[122px] overflow-auto">
          <button
            className="flex bg-[#C4C4C4] h-10 rounded-xl gap-2 items-center font-roboto text-xl pr-[25px] pl-4"
            onClick={handleCreateOpenModal}
          >
            <AddIcon />
            Crear producto
          </button>
          <div className="mx-auto  pt-7">
            <table className="min-w-full border-collapse">
              <thead className="py-2">
                <tr className="text-white py-2">
                  <th className="bg-black py-2 px-4 rounded-tl-2xl">N°</th>
                  <th className="bg-black py-2 px-4">Producto</th>
                  <th className="bg-black py-2 px-4">Categoria</th>
                  <th className="bg-black py-2 px-4">Precio</th>
                  <th className="bg-black py-2 px-4 rounded-tr-2xl">Acción</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((item, index) => (
                  <tr className="border" key={item._id}>
                    <td className="py-2 px-4 text-center">{index + 1}</td>
                    <td className="py-2 px-4 text-center">{item.name}</td>
                    <td className="py-2 px-4 text-center">{item.type}</td>
                    <td className="py-2 px-4 text-center">{item.price}</td>
                    <td className="py-2 px-4 flex gap-3 justify-center">
                      <EditIcon
                        className="cursor-pointer"
                        onClick={() => handleUpdateOpenModal(item)}
                      />
                      <DeleteIcon
                        className="cursor-pointer"
                        onClick={() => handleDeleteOpenModal(item?._id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>

      {/* Modal para crear productos */}
      <Modal
        isOpen={isModalCreateOpen}
        onClose={handleCreateCloseModal}
        maxWidth="520px"
      >
        <div className="px-5">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Crear nuevo Producto{" "}
          </h2>
          <form onSubmit={hanldeSubmitCreate} className="w-full">
            <Input
              label="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Precio"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Input
              label="Categoria"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="bg-brown text-white font-bold py-2 px-4 rounded border-2 border-brown"
              >
                Añadir
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Modal para actualizar productos */}
      <Modal
        isOpen={isModalUpdateOpen}
        onClose={handleUpdateCloseModal}
        maxWidth="520px"
      >
        <div className="px-5">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Actualizar Producto{" "}
          </h2>
          <form onSubmit={hanldeSubmitUpdate} className="w-full">
            <Input
              label="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Precio"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Input
              label="Categoria"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="bg-brown text-white font-bold py-2 px-4 rounded border-2 border-brown"
              >
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Modal para eliminar productos*/}
      <Modal isOpen={isModalDeleteOpen} onClose={handleDeleteCloseModal}>
        <h2 className="text-2xl font-bold mb-2">Producto </h2>
        <p>¿Estas seguro que quieres eliminar este producto?</p>
        <div className="flex justify-end gap-2 mt-3">
          <button
            className="bg-brown text-white font-bold py-2 px-4 rounded border-2 border-brown"
            onClick={() => handleDeleteProduct()}
          >
            Aceptar
          </button>
          <button
            className="border-brown border-2 text-brown font-bold py-2 px-4 rounded"
            onClick={handleDeleteCloseModal}
          >
            Rechazar
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Products;
