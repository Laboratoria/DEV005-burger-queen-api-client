import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/login/login.jsx";
import Pedido from "./Components/pedido/pedido.jsx";
import Cocina from "./Components/cocina/cocina.jsx";
import Admusuarios from "./Components/administracion/admusuarios.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/pedido",
    element: <Pedido />,
  },
  {
    path: "/admusuarios",
    element: <Admusuarios />,
  },
  {
    path: "/cocina",
    element: <Cocina />,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

