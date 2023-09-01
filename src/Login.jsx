import React, { useState } from 'react';
import Buttons from './components/Buttons/Buttons';
import logo from './assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { updateAuth } from './services/UseAxios';
import Swal from 'sweetalert2';


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


  // manejo del evento para cambiar los valores en el input
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo,   [event.target.name]:event.target.value });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(contactInfo, 'JAJAJAJAJA DATA INPUT');

      if (!contactInfo.email || !contactInfo.password) {
        Swal.fire({
          title: 'Please fill in the required information',
          icon: 'error',
          confirmButtonColor: '#D62828',
        });
        return;
      }

      try {
        const response = await updateAuth(contactInfo.email, contactInfo.password);
        if(response){
           if (response.role === 'Admin') {
          Swal.fire({
            icon: 'success',
            title: 'Successful Log In',
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/Admin');
        }
        if (response.role === 'Waiter') {
          new Swal('Successful Log In');
          navigate('/Waiter');
        }
        if (response.role === 'Chef') {
          new Swal('Successful Log In');
          navigate('/Chef');
        } 
        }
       
      } catch (error) {
        Swal.fire({
          title: 'Wrong email or password. Please enter the correct information',
          icon: 'error',
          confirmButtonColor: '#D62828',
        });
      }
       
      
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
          <p className='forgot-password'>If you forgot your password contact the administrator</p>
        </div>
        <Buttons type="submit" 
        tag="Sing in"
        />
        </div>
      </form>
    </div>
    
  );
}