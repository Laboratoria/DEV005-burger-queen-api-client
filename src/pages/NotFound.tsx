import React from "react";
import NotFoundIcon from "../icons/NotFoundIcon";

// Definición del componente NotFound
const NotFound = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <NotFoundIcon />
            <h3 className="font-roboto font-extrabold text-4xl">Woops!</h3>
            <p className="font-roboto font-bold text-xl mt-3">Tu busqueda no encontró resultados</p>
        </div>
    );
};
export default NotFound;
