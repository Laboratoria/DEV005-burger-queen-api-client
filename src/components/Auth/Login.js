import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import authLogin from "../../services/authService.js";

export const useLoginInside = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // hook de navegacion

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await authLogin(loginData);
      console.log(response);

      // Guardar en localStorage
      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("userId", response.user.id);

      const role = response.user.role;
      console.log(role);
      const adminRole = role === "admin";
      const waiterRole = role === "waiter";
      const chefRole = role === "chef";
      let route = "/";
      if (adminRole) {
        route = "/Products";
      } else if (waiterRole) {
        route = "/Orders";
      } else if (chefRole) {
        route = "/Kitchen";
      }
      navigate(route);
    } catch (error) {
      if (!email || !password) {
        setError("¡Todos los campos son obligatorios!");
      } else {
        setError("¡Los datos ingresados son incorrectos!");
      }
    }
  };

  return {
    email,
    password,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  };
};
