import LOGO from "../../img/LOGO.png";
import "./estilo-admusuarios.css";
import NuevoUsuario from "./nuevousuario";
import ListadoUsuarios from "./listadousuarios";

export default function Admusuarios() {
  return (
    <>
      <div className="main-container">
      <div className="logo-title-container">
        <h1 className="logo-usuarios">BURGUER QUEEN</h1>
        <img src={LOGO} className="logo1-usuarios" alt="Burger Queen Logo" />
      </div>
      <div className="admusuarios">
      <ListadoUsuarios/>
      <NuevoUsuario/>
      </div>
      </div>
    </>
  );
}
// aca agregar  lo de que no se recargue la pagina al crear un usario