import AdminCSS from "../../Style/admin.module.css";
import Button from "../../components/Button";
import Header from "../../components/Header";

export default function Admin() {
  return <>
    <Header prop="Grace" />
    <div className={AdminCSS.buttonAdmin}>
      <Button className={AdminCSS.buttons} id={AdminCSS["employees"]}  text="Colaboradores" />
      <Button className={AdminCSS.buttons} id={AdminCSS["products"]} text="Productos" />
    </div>
  </>

}

