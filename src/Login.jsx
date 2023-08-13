//import React from 'react';
//import useState from 'react';
import React, { useState } from 'react';
import Buttons from './components/Buttons/Buttons';
import logo from './assets/logo.png'



const Login = () => (
  <section className='Login'>
    {UserForm ()}
  </section>
);

export default Login;

function UserForm() {
  

  const [contactInfo, setContactInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo,   [event.target.name]:event.target.value });
    };

    const handleSubmit = (event) => {
      // prevents the submit button from refreshing the page
      event.preventDefault();
      console.log(contactInfo, 'JAJAJAJAJ');
      };  
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
        <Buttons
        tag="Sing in"
        />
        </div>
      </form>
    </div>
    
  );
}