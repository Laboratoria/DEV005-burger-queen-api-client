//import React from 'react';
//import useState from 'react';
import React, { useState } from 'react';


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
      <form onSubmit={handleSubmit}>
        
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder = "Email"
            value={contactInfo.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
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
        <div>
          <button type='submit'>Sing In</button>
        </div>
      </form>
    </div>
  );
}