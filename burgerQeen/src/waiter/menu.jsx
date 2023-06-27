import './menu.css'
import {Link} from "react-router-dom"
import './menu.css'
import Button from '../components/buttons'

   export const Menu = (products) => {
    // hacer la peticion
    return(
        <>
        <div className="cardProduct">
            <div className="productName">{products.name}
        </div>
           <div className="imgProduct">
              <img className="productImg" src={products.image}/>
        </div>
          <div className="pricebtnsAdd">
            <div className="producPrice">{products.price}
        </div>
           <Button className="btnAdd" text="Agregar"></Button>
       </div>
      </div>    
    </>
    )
}
