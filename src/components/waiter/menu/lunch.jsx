import "./menu.css";

import Products from "../../Products/Products";

const Lunch = () => {
  return (
    <div className="listadoproductos-resumenpedido">
        <div className="listado-productos">
         <Products productType="Almuerzo"/>
        </div>
    </div>    
  )
};

export default Lunch;
