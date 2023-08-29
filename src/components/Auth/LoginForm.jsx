import React from "react";
import PropTypes from "prop-types";
import "../../styles/auth/form.css";

const LoginForm = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  error,
  handleLogin,
}) => {
  return (
    <form className='login' onSubmit={handleLogin}>
      <input
        className='inputEmail'
        type='text'
        name='email'
        value={email}
        onChange={handleEmailChange}
        placeholder='Email'
      />
      <input
        className='inputPassword'
        type='password'
        name='password'
        value={password}
        onChange={handlePasswordChange}
        placeholder='Contraseña'
      />
      {error && (
        <b>
          <p className='errorMessage'>{error}</p>
        </b>
      )}
      <button className='buttonColor' type='submit'>
        INGRESAR
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
