//debe ir el cudrado negro que contiene el nombre, separador, boton de agregar y seperador de abajo//
//se debe importar el css que este en este carpeta//
import React from "react";
import "./divAmin.css" 


const DivAdmin = () => {
    return(
        <div className="ContainerAdmin">
            <h1>Resumen de productos</h1>
            <button className="BtnOrange">Agregar +</button>
            <br></br>
            <img src="img/linea.png" alt="sep1" id="S1"/> 
            <img src="img/linea.png" alt="sep2" id="S2"/>      
        </div>
    )
    
}

export default DivAdmin;