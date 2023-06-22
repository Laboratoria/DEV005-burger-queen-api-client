import "../../Style/waiter.css";
// import {Link} from "react-router-dom"
import Button from "../../components/Button";
import Header from "../../components/Header";
import { NavLink } from "react-router-dom";

export default function Waiter() {
  return (
    <div className="buttonWaiter">
      <Header />
      <NavLink to="/breakfast">
        <Button className="buttons" id="lunch" text="Almuerzo" />
      </NavLink>
      <NavLink to="/order">
        <Button className="buttons" id="order" text="Pedidos" />
      </NavLink>
    </div>
  );
}
