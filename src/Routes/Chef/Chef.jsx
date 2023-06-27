import "../../Style/waiter.css";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { NavLink } from "react-router-dom";

const Chef = () => {
  return (
    <div className="buttonWaiter">
       <Header />
      <NavLink to="/cheforder">
        <Button className="buttons" id="order" />
      </NavLink>
      <NavLink to="/service">
        <Button className="buttons" id="service"  />
      </NavLink>
    </div>
  )
}

export default Chef
