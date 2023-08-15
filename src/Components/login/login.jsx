import { useState } from "react";
import { Container } from "postcss";
import "./estilo-login.css";


export default function Login() {
  const [formData, setformData] = useState({email:"", password:""});

const handleLogin = (e) => {
  e.preventDefault();
  fetch("http://localhost:8080/login",{
    method:"post",
    body: JSON.stringify(formData),
    headers: {"Content-Type": "application/json"}
  })
 .then( () => {

  }
 )  
console.log(formData);
} 
const handleChangeEmail = (e) => {
  setformData({
    ...formData,
    email: e.target.value 
  })
} 
const handleChangePassword = (e) => {
  setformData({
    ...formData,
    password: e.target.value 
  })
} 


  return (
    <>
    <div>
    <h1  className="logo">BURGUER QUEEN </h1>
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
      <button className="botonIngresar" type="ingresar" value="ingresar"> Ingresar </button>
    </form>
    </div>
    </>
  );
  
}
