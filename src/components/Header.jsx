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
