import "../../Style/admin.css";
import Button from "../../components/Button";
import Header from "../../components/Header";


export default function Admin() {
    return <div className="buttonAdmin">
    <Header prot="Grace" />
    <Button className= "buttons" id="employees" text="Colaboradores" />
    <Button className= "buttons" id="products" text="Productos" />
  </div>
    
}

