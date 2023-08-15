//import React from 'react';
//import useState from 'react';
import React, { useState } from 'react';
import Buttons from './components/Buttons/Buttons';
import logo from './assets/logo.png'
import Users from './Usefetch'
import { useNavigate } from "react-router-dom";

// funcion que renderiza el login
const Login = () => (
  <section className='Login'>
    {UserForm ()}
  </section>
);

export default Login;

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
// funcion que imprime el formulario
function UserForm() {
  const navigate = useNavigate();
  
// Manejo de estados
  const [contactInfo, setContactInfo] = useState({
      email: "",
      password: "",
      hasError: false,
    
  });


  // manejo del evento para cambiar los valores en el input
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo,   [event.target.name]:event.target.value });
    };

    // manejo del evento submit al presionar el boton
    const handleSubmit = (event) => {
      // previene se refresque el componente
      event.preventDefault();


/* 
async function App() {
  const dataUsers  = await Users('http://localhost:8080/users')
  console.log(dataUsers)
  return (
    <>
      <div>
       
      </div>

    </>
  )
} */
const dataUsers  = Users('http://localhost:8080/users')
console.log(dataUsers, 'como quieres que te quiera')
dataUsers.then((res) =>{
  console.log(res, 'la la la')
  res.forEach(user => { 
    console.log(user, 'popopopo')
    console.log(user.email, user.password, contactInfo.email, contactInfo.password)
    if(user.email === contactInfo.email && user.password === contactInfo.password){
      navigate('/Waiter')
    } else{ alert('No estas registrado')}
    
  });
})










      console.log(contactInfo.email, 'JAJAJAJAJ');
      };

      //validacion del campo de correo


     
       function handleBlur() {
        const hasError = !emailRegexp.test(contactInfo.email);
        setContactInfo((prevState) => ({ ...prevState, hasError }));
      }
      
      

      console.log(contactInfo.hasError.toString())
     

      //Impresion del componente en pantalla
  return (
    
    <div className="form-container">
      <header className="login-header">
        <img src={logo}/>
      </header>
      <form onSubmit={handleSubmit}>
      <div className="content-login">  
        <div>
          <h1>Login</h1>
        </div>
        <div className="div-inputs">
          <input
            className="inputs-login"
            type="email"
            name="email"
            placeholder = "Email"
            value={contactInfo.email}
            onChange={handleChange}
            onBlur={handleBlur} 
           aria-errormessage="emailErrorID"
           aria-invalid={contactInfo.hasError}

          />
       
          <input
          className="inputs-login"
            type="password"
            name="password"
            placeholder="Password"
            value={contactInfo.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>If you forgot your password contact the administrator</p>

          <p
        id="msgID"
        aria-live="assertive"
        style={contactInfo.email.hasError ? {visibility:"visible"} : {visibility:"hidden"}} 
      >
        Please enter a valid email
      </p>
        </div>


        <Buttons
        tag="Sing in"
        />
        </div>
      </form>
    </div>
    
  );
}