import "./menu.css";

import Products from '../../Products/Products'

const Breakfast = () => {
  return (
    <div className="listadoproductos-resumenpedido">
      <div className="listado-productos">
        <Products productType="Desayuno" />
      </div>
    </div>
  );
};

export default Breakfast;
