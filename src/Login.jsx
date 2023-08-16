import React, { useState } from "react";
import Buttons from "./components/Buttons/Buttons";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Users } from "./services/Usefetch";

const Login = () => <section className="Login">{UserForm()}</section>;

export default Login;

// const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
// funcion que imprime el formulario
function UserForm() {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState({
      email: "",
      password: "",
      hasError: false,
    
  });


  // manejo del evento para cambiar los valores en el input
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

    // alert('Inicio de sesion exitoso');
    /*    } catch (error) {
        console.error(error);
        console.error(error)
        // Maneja el error si es necesario
      } */
 
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(contactInfo, "JAJAJAJAJ");
      
          const usersData =  Users("http://localhost:8080/users");
          console.log("OBJETO DATA", usersData);
          usersData.then((res) =>{
            
            res.forEach((user) => {
            if (user.email.includes(contactInfo.email) && user.password.includes(contactInfo.password)) {
              if(user.role === 'admin'){
                return navigate('/Admin');
              }
              if(user.role === 'waiter'){
                return navigate('/Waiter');
              }
              if(user.role === 'cheff'){
                return navigate('/Cheff');
              }              
            }
          })

          }).catch((err) =>{
            console.log(err)});
          }
        
      
          
        
    
      

  return (
    <div className="form-container">
      <header className="login-header">
        <img src={logo} />
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
              placeholder="Email"
              value={contactInfo.email}
              onChange={handleChange}
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
          </div>
          <Buttons type="submit" tag="Sing in" />
        </div>
      </form>
    </div>
  );
}
