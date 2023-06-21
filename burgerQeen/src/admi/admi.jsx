import {Link} from "react-router-dom"

export default function Admin() {
    return ( 
    <>
    
    <h1>Menú</h1>
    
    <button className="botton-cook">Enviar a cocina</button>
        <Link to='/Client'>
            <button className="botton-back">Atrás</button>
            </Link>
            <p>Resumen de orden</p>
            <div className="order"></div>
           
            
    
     </>
    )
}
