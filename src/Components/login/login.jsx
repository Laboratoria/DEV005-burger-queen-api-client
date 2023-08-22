import { useState, useEffect } from "react";
import "./estilo-login.css";
import { useNavigate } from 'react-router-dom';
import { login } from "../../Services/UserService";
import LOGO from "../../img/LOGO.png";

export default function Login() {
  const [formData, setformData] = useState({email:"", password:""});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(formData)
      .then((data) => {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('userId', data.user.id); 
        localStorage.setItem('role', data.user.role);
        setUser(data.user);
      })
      .catch((error) => {
        setErrorMessage("❌ Credenciales Incorrectas");
      });
  }

  const [user, setUser] = useState(null);

useEffect(() => {
  if (user) {
    const userRole = localStorage.getItem("role"); 
    console.log(userRole);
    if (userRole === "waiter") {
      navigate("/pedido"); 
    } else if (userRole === "chef") {
      navigate("/cocina"); 
    } else if (userRole === "admin") {
      navigate("/administracion"); 
    }
  } else {
    navigate("/");
  }
}, [user, navigate]);



  const handleChangeEmail = (e) => {
  setformData({
    ...formData,
    email: e.target.value 
  });
  setErrorMessage("");
} 
const handleChangePassword = (e) => {
  setformData({
    ...formData,
    password: e.target.value 
  });
  setErrorMessage("");
} 

  return (
    <>
    <div className="logo-container">
      <h1 className="logo">BURGUER QUEEN</h1>
      <img src={LOGO} className="logo1" alt="Burger Queen Logo" />
    </div>
    <div className="container">
    <form onSubmit={handleLogin}>
      <h2 className="bienvenido">Bienvenid@</h2>
      <label className="tituloInput">
        Correo Electrónico:
        <input onChange={handleChangeEmail} value= {formData.email} type="email" name="correoElectronico" className="inputLogin" placeholder="ejemplo@gmail.com"/>
      </label>
      <label className="tituloInput">
        Contraseña:
        <input  onChange={handleChangePassword} value={formData.password} type="password" name="contraseña" className="inputLogin" placeholder="********" />
      </label>
      <button className="botonIngresar" type="submit" value="ingresar"> Ingresar </button>

      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Mostrar mensaje de error si existe */}


    </form>
    </div>
    </>
  );
  
}
