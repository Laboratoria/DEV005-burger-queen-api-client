import { NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const email = localStorage.getItem('email');
  const username = email ? email.split("@")[0].replace(/^\w/, (c) => c.toUpperCase()) : '';
  return (
    <>
      <header className="header">
        <div>
          <h1>Burger Queen</h1>
        </div>
        <div className="rigth">
        {username && <p>{username}</p>}
          <NavLink to="/">
            <Button className="out" text="Salir" />
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
