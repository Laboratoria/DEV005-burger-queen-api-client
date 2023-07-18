import React, {
    useEffect,
    useState,
} from "react";
import EquipIcon from "../icons/EquipIcon";
import ProductIcon from "../icons/ProductIcon";
import AddIcon from "../icons/AddIcon";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import Aside from "../components/Aside";

// Definición de la interfaz para los usuarios
export interface User {
    _id: string;
    email: string;
    role: string;
}

// Definición del componente Users
const Users =
    () => {
        const [
            users,
            setUsers,
        ] =
            useState<
                User[]
            >(
                []
            );
        const getData =
            async () => {
                const token =
                    localStorage.getItem(
                        "token"
                    );
                try {
                    const response =
                        await fetch(
                            "https://dev005-burger-queen-api-production.up.railway.app/users",
                            {
                                headers:
                                    {
                                        Authorization: `Bearer ${token}`,
                                        "Content-Type":
                                            "application/json",
                                    },
                            }
                        );

                    if (
                        response.ok
                    ) {
                        const data =
                            await response.json();

                        setUsers(
                            data
                        );
                        console.log(
                            data
                        );
                    } else {
                        throw new Error(
                            "Error en la solicitud"
                        );
                    }
                } catch (error) {
                    console.error(
                        "Error:",
                        error
                    );
                }
            };
        useEffect(() => {
            getData();
        }, []);

        // Renderizado del componente
        return (
            <section className="flex h-screen">
                <Aside
                    firstIcon={
                        EquipIcon
                    }
                    secondIcon={
                        ProductIcon
                    }
                    firsText="EQUIPO"
                    secondText="PRODUCTOS"
                />
                <article className="flex-1 pt-[92px] pb-10 px-[122px] overflow-auto">
                    <button className="flex bg-[#C4C4C4] h-10 rounded-xl gap-2 items-center font-roboto text-xl pr-[25px] pl-4">
                        <AddIcon />
                        Crear
                        usuario
                    </button>
                    <div className="mx-auto  pt-7">
                        <table className="min-w-full border-collapse">
                            <thead className="py-2">
                                <tr className="text-white py-2">
                                    <th className="bg-black py-2 px-4 rounded-tl-2xl">
                                        Item
                                    </th>
                                    <th className="bg-black py-2 px-4">
                                        Correo
                                        Electronico
                                    </th>
                                    <th className="bg-black py-2 px-4">
                                        Cargo
                                    </th>
                                    <th className="bg-black py-2 px-4 rounded-tr-2xl">
                                        Opciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map(
                                    (
                                        item,
                                        index
                                    ) => (
                                        <tr
                                            className="border"
                                            key={
                                                item._id
                                            }
                                        >
                                            <td className="py-2 px-4 text-center">
                                                {index +
                                                    1}
                                            </td>
                                            <td className="py-2 px-4 text-center">
                                                {
                                                    item.email
                                                }
                                            </td>
                                            <td className="py-2 px-4 text-center">
                                                {
                                                    item.role
                                                }
                                            </td>
                                            <td className="py-2 px-4 flex gap-3 justify-center">
                                                <EditIcon />
                                                <DeleteIcon />
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </article>
            </section>
        );
    };

export default Users;
