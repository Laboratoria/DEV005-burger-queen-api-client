import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoBurger from '../../Components/Logo/logo';
import '../../Components/logo/logo.css'
import LoginForm from '../../Components/loginForm/loginForm.jsx';
import '../../Components/loginForm/loginForm.css'
import './login.css';
import api from '../../api_client/api';


const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsActive(true);

    if (email.trim() === '' || password.trim() === '') {
      setErrorMessage('* These fields are required');
      return;
    }

    try {
      const data = await api().login(email, password);
      // console.log(data);

      if (data.user.role === 'waiter') {
        navigate('/waiter');
      } if (data.user.role === 'admin') {
        navigate('/admin');
      } if (data.user.role === 'cheff') {
        navigate('/cheff');
      }

      const accessToken = data.accessToken;

      try {
        localStorage.setItem('token', accessToken);
      } catch (err) {
        // setErrorMessage('Connection error.')
      }

    } catch (err) {
      // console.log(err)
      setErrorMessage('Oops! That username and password combination is incorrect. Please try again');
    }
  };




  return (
    <section className="global-container">
      <LogoBurger />
      <LoginForm
        isActive={isActive}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        errorMessage={errorMessage}
        handleLogin={handleLogin}
      />
    </section>
  );

};

export default Login;







