import './menu.css'
import {Link} from "react-router-dom"
import './menu.css'
export default function Menu() {
    return ( 
    <>
    <div className="grid-container">
    <h1>Menú</h1>
    <h2>Desayuno</h2>
    <h3>Almuerzo</h3>
    <button className="botton-cook">Enviar a cocina</button>
        <Link to='/Client'>
            <button className="botton-back">Atrás</button>
            </Link>
            <p>Resumen de orden</p>
            <div className="order"></div>
           
            <button className="coffee">Café Americano 50$</button>
            <button className="Caffe-milk">Café con leche de almendras 5$</button>
            <button className="Sandwich">Sandwich de NO jamón y queso vegan 10$</button>
            <button className="juice">Jugo de frutas natural 7$</button>
     </div>
     </>
    )
}
