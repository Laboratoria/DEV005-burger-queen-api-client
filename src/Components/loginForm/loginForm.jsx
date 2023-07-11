import React from 'react';
import './loginForm.css';


const LoginForm = ({ email, password, setEmail, setPassword, errorMessage, handleLogin, isActive }) => {

  return (

    <form className="login-form">
      <h2>Login</h2>
      <div className="group">
        <input
          data-testid="email"
          className="inp"
          id="email"
          placeholder="example@example.com"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          data-testid="password"
          className="inp"
          id="password"
          placeholder="*********"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <p id="messageError" data-testid="message-Error"  className={`messageError ${isActive && 'activate'}`} >{errorMessage}</p>

      <button data-testid='button-login' onClick={handleLogin} className="btn">Sign in</button>
    </form>
  );
};


export default LoginForm;