import Banner from "../../banner/banner";
import ButtonGreen from "../../buttons/buttonGreen";
import DivAdmin from "../../divAdmin/divAdmin.jsx";
import ListAdmin from "../../listAdmin/listAdmin.jsx";
import {ProductList} from "../../../functions/adminProducts.jsx";



export const Products = () => {
  return (
  <><div className="Orders">
      <Banner />
    </div><div className="Admin">
        <div className="btnProducts">
          <ButtonGreen buttonText="Trabajadores" />
          <ButtonGreen buttonText="Productos" />
        </div>
        <div>
          <DivAdmin/>          
        </div>
        <div>
        <ListAdmin/>
        </div>
        <div>
          <ProductList/>
        </div>
      </div></>
)
};
export default Products;

// aqui va la maqueta de la vista, donde se importan los componentes y las funciones//