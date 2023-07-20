import React, { useEffect, useState } from "react";
import EquipIcon from "../icons/EquipIcon";
import ProductIcon from "../icons/ProductIcon";
import AddIcon from "../icons/AddIcon";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import Aside from "../components/Aside";
import { api } from "../services/api";
import { CreateUser, User } from "../services/interfaces";
import Modal from "../components/Modal";
import Input from "../components/Input";

// Definición de la interfaz para los usuarios
// Definición del componente Users
const Users = () => {
  const [users, setUsers] = useState<User[] | []>([]);
  const [userSelected, setUserSelected] = useState<string>("");
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleCreateOpenModal = () => {
    setIsModalCreateOpen(true);
  };

  const handleCreateCloseModal = () => {
    setIsModalCreateOpen(false);
  };

  const handleDeleteOpenModal = (email: string) => {
    setUserSelected(email);
    setIsModalDeleteOpen(true);
  };

  const handleDeleteCloseModal = () => {
    setUserSelected("");
    setIsModalDeleteOpen(false);
  };

  const handleUpdateOpenModal = (user: User) => {
    setEmail(user?.email);
    setPassword("");
    setRole(user?.role);
    setIsModalUpdateOpen(true);
  };

  const handleUpdateCloseModal = () => {
    setEmail("");
    setPassword("");
    setRole("");
    setIsModalUpdateOpen(false);
  };

  const handleDeleteUser = async () => {
    await api.users.deleteUser(userSelected);
    getData();
    handleDeleteCloseModal();
  };

  const hanldeSubmitCreate = async (e: any) => {
    e.preventDefault();
    await api.users.createUser({ email, password, role });
    getData();
    handleCreateCloseModal();
  };

  const hanldeSubmitUpdate = async (e: any) => {
    e.preventDefault();
    await api.users.updateUser({ email, password, role });
    getData();
    handleUpdateCloseModal();
  };

  const getData = async () => {
    const dataUser = await api.users.getUsers();
    setUsers(dataUser);
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
            Crear usuario
          </button>
          <div className="mx-auto  pt-7">
            <table className="min-w-full border-collapse">
              <thead className="py-2">
                <tr className="text-white py-2">
                  <th className="bg-black py-2 px-4 rounded-tl-2xl">Item</th>
                  <th className="bg-black py-2 px-4">Correo Electronico</th>
                  <th className="bg-black py-2 px-4">Cargo</th>
                  <th className="bg-black py-2 px-4 rounded-tr-2xl">
                    Opciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((item, index) => (
                  <tr className="border" key={item._id}>
                    <td className="py-2 px-4 text-center">{index + 1}</td>
                    <td className="py-2 px-4 text-center">{item.email}</td>
                    <td className="py-2 px-4 text-center">{item.role}</td>
                    <td className="py-2 px-4 flex gap-3 justify-center">
                      <EditIcon
                        className="cursor-pointer"
                        onClick={() => handleUpdateOpenModal(item)}
                      />
                      <DeleteIcon
                        className="cursor-pointer"
                        onClick={() => handleDeleteOpenModal(item?.email)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>

      {/* Modal para crear usuarios */}
      <Modal
        isOpen={isModalCreateOpen}
        onClose={handleCreateCloseModal}
        maxWidth="520px"
      >
        <div className="px-5">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Crear nuevo usuario{" "}
          </h2>
          <form onSubmit={hanldeSubmitCreate} className="w-full">
            <Input
              label="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Cargo"
              value={role}
              onChange={(e) => setRole(e.target.value)}
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

      {/* Modal para actualizar usuarios */}
      <Modal
        isOpen={isModalUpdateOpen}
        onClose={handleUpdateCloseModal}
        maxWidth="520px"
      >
        <div className="px-5">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Actualizar usuario{" "}
          </h2>
          <form onSubmit={hanldeSubmitUpdate} className="w-full">
            <Input
              disabled
              label="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Cargo"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                disabled={password.length < 6}
                className={`${
                  password.length < 6 ? "opacity-50" : ""
                } bg-brown text-white font-bold py-2 px-4 rounded border-2 border-brown`}
              >
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Modal para eliminar usuarios*/}
      <Modal isOpen={isModalDeleteOpen} onClose={handleDeleteCloseModal}>
        <h2 className="text-2xl font-bold mb-2">Usuario </h2>
        <p>¿Estas seguro que quieres eliminar este usuario?</p>
        <div className="flex justify-end gap-2 mt-3">
          <button
            className="bg-brown text-white font-bold py-2 px-4 rounded border-2 border-brown"
            onClick={() => handleDeleteUser()}
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

export default Users;
