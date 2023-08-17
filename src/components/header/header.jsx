import logo from "../../assets/logo.png";
import "./header.css";

function Header(prop) {
  return (
    <div className="header">
      <div className="div-role-img">
        <img className="img-headers" src={logo} />
        <p className="role">{prop.role}</p>
        <button className="button-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-logout-2"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
            <path d="M15 12h-12l3 -3" />
            <path d="M6 15l-3 -3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
