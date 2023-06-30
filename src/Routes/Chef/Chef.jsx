import ChefCSS from "../../Style/chef.module.css";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { NavLink } from "react-router-dom";

const Chef = () => {
  return (
    <div className={ChefCSS.buttonWaiter}>
       <Header />
      <NavLink to="/cheforder">
        <Button className={ChefCSS.buttons} id={ChefCSS["order"]} />
      </NavLink>
      <NavLink to="/service">
        <Button className={ChefCSS.buttons} id="service"  />
      </NavLink>
    </div>
  )
}

export default Chef
