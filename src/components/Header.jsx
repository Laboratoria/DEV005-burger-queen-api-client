import { Link } from "react-router-dom";
import Button from "./Button";

const Header = ({ prot }) => {
  return (
    <>
      <header className="header">
        <div>
          <h1>Burger Queen</h1>
        </div>
        <div className="rigth">
          {prot && <p>{prot}</p>}
          <Link to="/">
            <Button className="out" text="Salir" />
          </Link>
        </div>
      </header>
    </>
  );
};
{
  /*     <>
<header>
<div id='topLeft'>
<img className='logo' id='logo-burger' src='./src/assets/logo.png' alt='Logo' />
<h2 id='text-logo'>Burger Queen</h2>
</div>
<div id='topRight'>
<h2 id='text-user'> {user} </h2> 
<img id='logo-user' src={logoUser} alt='Logo' />
</div>
</header>
</> */
}

export default Header;
