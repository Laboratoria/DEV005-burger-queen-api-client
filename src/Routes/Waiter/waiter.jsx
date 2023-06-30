import WaiterCSS from "../../Style/waiter.module.css";
// import {Link} from "react-router-dom"
import Button from "../../components/Button";
import Header from "../../components/Header";
import { NavLink } from "react-router-dom";

export default function Waiter() {
  return (
    <div className={WaiterCSS.buttonWaiter}>
      <Header />
      <NavLink to="/breakfast">
        <Button className={WaiterCSS.buttons} id={WaiterCSS["lunch"]} text="Almuerzo" />
      </NavLink>
      <NavLink to="/order">
        <Button className={WaiterCSS.buttons} id={WaiterCSS["order"]} text="Pedidos" />
      </NavLink>
    </div>
  );
}
