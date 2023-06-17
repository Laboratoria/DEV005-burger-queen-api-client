import "../../Style/waiter.css";
// import {Link} from "react-router-dom"
import Button from "../../components/Button";
import Header from "../../components/Header";

export default function Waiter() {
  return (
    <div className="buttonWaiter">
      <Header prot="Juanita" />
      <Button id="break" text="Desayuno" />
      <Button id="lunch" text="Almuerzo" />
      <Button id="order" text="Pedidos" />
    </div>
  );
}
