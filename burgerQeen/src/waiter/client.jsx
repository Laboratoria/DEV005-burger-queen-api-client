import {Link} from "react-router-dom"
//import { ReactDOM } from "react"
import './client.css'

export default function Client() {
    return ( 
    <><>

            <Link to='/'>
                <button className="button-form">Salir</button>
            </Link></>
            <Link to='/Menu'>
                <button className="button-next">Siguiente</button>
                </Link></>
         
    )
}

