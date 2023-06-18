import "../../Style/admin.css";
import Button from "../../components/Button";
import Header from "../../components/Header";


export default function Admin() {
    return <>
    <Header prop="Grace" />
    <div className="buttonAdmin">
    <Button className= "buttons" id="employees" text="Colaboradores" />
    <Button className= "buttons" id="products" text="Productos" />
  </div>
  </>
    
}

