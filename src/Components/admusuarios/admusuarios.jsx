import React from "react";
import { Link } from "react-router-dom"; // Importa Link para crear enlaces
import LOGO from "../../img/LOGO.png";
import "./estilo-admusuarios.css";
import NuevoUsuario from "./nuevousuario";
import ListadoUsuarios from "./listadousuarios";

export default function Admusuarios() {
  return (
    <>
      <div className="main-container-usuarios">
        <div className="logo-title-container">
          <h1 className="logo-usuarios">BURGUER QUEEN</h1>
          <img src={LOGO} className="logo1-usuarios" alt="Burger Queen Logo" />
        </div>
        <div className="admusuarios">
          <ListadoUsuarios />
          <NuevoUsuario />
        </div>
        <div className="ruteo">
          {/* Utiliza Link para crear un enlace a la vista "administracion-menu" */}
          <Link to="/administracion-menu" className="ir-a-productos">
            Ir a productos
          </Link>
        </div>
      </div>
    </>
  );
}
