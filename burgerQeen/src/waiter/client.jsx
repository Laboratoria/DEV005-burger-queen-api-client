import './client.css'
import {Link} from "react-router-dom"

//import { ReactDOM } from "react"
import './client.css'

export default function Client() {
    return ( 
    <>
            <div className="vista2">
            <h1>Cliente</h1> 
            <img className="client" src="/src/assets/client.png"/>
            Nombre:<input className="name" type="text" placeholder="Ingrese el nombre del cliente" required/>
            </div>
            <Link to='/'>
            <img className="goOut" src="/src/assets/salir.png"/>
            </Link> 
            <Link to='/Menu'>
            <button className="buttonNext">Siguiente</button>
                </Link>
                
                 </>
    );
}

