import React, { useState } from "react";
import Buttons from "./components/Buttons/Buttons";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Users } from "./services/Usefetch";

const Login = () => <section className="Login">{UserForm()}</section>;

export default Login;

function UserForm() {
  const navigate = useNavigate();

  const [contactInfo, setContactInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

    // alert('Inicio de sesion exitoso');
    /*    } catch (error) {
        console.error(error);
        console.error(error)
        // Maneja el error si es necesario
      } */
 
      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(contactInfo, "JAJAJAJAJ");
      
        try {
          const usersData = await Users("http://localhost:8080/users");
          console.log("OBJETO DATA", usersData);
      
          usersData.forEach((user) => {
            if (user.email === contactInfo.email && user.password === contactInfo.password) {
              navigate('/Waiter');
              return
            } else {
              alert('No estás registrado');
            }
          });
        } catch (err) {
          console.log(err);
        }
      };
      

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
