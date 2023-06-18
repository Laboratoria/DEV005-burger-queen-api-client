import "../../Style/waiter.css";
// import {Link} from "react-router-dom"
import Button from "../../components/Button";
import Header from "../../components/Header";

export default function Waiter() {
  return (
    <div className="buttonWaiter">
      <Header prop="Juanita" />
      <Button className= "buttons" id="break" text="Desayuno" />
      <Button className= "buttons" id="lunch" text="Almuerzo" />
      <Button className= "buttons" id="order" text="Pedidos" />
    </div>
  );
}
