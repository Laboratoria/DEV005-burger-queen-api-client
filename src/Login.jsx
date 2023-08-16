//import React from 'react';
//import useState from 'react';
import React, { useState } from 'react';
import Buttons from './components/Buttons/Buttons';
import logo from './assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { updateAuth } from './services/Usefetch';

const Login = () => (
  <section className='Login'>
    {UserForm ()}
  </section>
);

export default Login;



function UserForm() {
  const navigate = useNavigate();

  const [contactInfo, setContactInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo,   [event.target.name]:event.target.value });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(contactInfo, 'JAJAJAJAJA DATA INPUT');

      if (!contactInfo.email || !contactInfo.password) {
        alert('Por favor, completa todos los campos requeridos.');
        return;
      }

      try {
        const response = await updateAuth(contactInfo.email, contactInfo.password);
  
        if (response.role === 'admin') {
          alert('Successful Log In');
          navigate('/Admin');
        }
        if (response.role === 'waiter') {
          alert('Successful Log In');
          navigate('/Waiter');
        }
        if (response.role === 'cheff') {
          alert('Successful Log In');
          navigate('/Cheff');
        }
      } catch (error) {
        alert('Log In failed');
        console.error("Error en el inicio de sesión:", error);
        // Puedes mostrar un mensaje de error o realizar otras acciones aquí
      }
       
       /*  usersData.forEach(user => {
          console.log(user,'RESPUESTA ')
          if (user.email.includes(contactInfo.email) && user.password.includes(contactInfo.password)) {
            if(user.role === 'admin'){
              alert('Inicio de sesion exitoso');
              return navigate('/Admin');
            }
            if(user.role === 'waiter'){
              return navigate('/Waiter');
            }
            if(user.role === 'cheff'){
              return navigate('/Cheff');
            }              
          }
        }); */
    } 

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
            placeholder = "👤︎  Email"
            value={contactInfo.email}
            onChange={handleChange}
          />
       
          <input
          className="inputs-login"
            type="password"
            name="password"
            placeholder="🔒︎  Password"
            value={contactInfo.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>If you forgot your password contact the administrator</p>
        </div>
        <Buttons type="submit" 
        tag="Sing in"
        />
        </div>
      </form>
    </div>
    
  );
}