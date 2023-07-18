import React from "react";
import EquipIcon from "../icons/EquipIcon";
import ProductIcon from "../icons/ProductIcon";
import Aside from "../components/Aside";

// Definición del componente Home
const Home =
    () => {
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

export default Home;
