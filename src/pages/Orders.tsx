import React, {
    useEffect,
    useState,
} from "react";
import ProductIcon from "../icons/ProductIcon";
import EquipIcon from "../icons/EquipIcon";
import Aside from "../components/Aside";

// Definición de la interfaz para las ordenes
interface Order {
    _id: string;
    name: string;
    type: string;
    price: number;
}

// Definición del componente Orders
const Orders =
    () => {
        const [
            orders,
            setOrders,
        ] =
            useState<
                Order[]
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
                            "https://dev005-burger-queen-api-production.up.railway.app/products",
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

                        setOrders(
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
            </section>
        );
    };

export default Orders;
