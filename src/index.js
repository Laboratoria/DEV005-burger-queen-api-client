import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/login/login.jsx";
import Pedido from "./Components/pedido/pedido.jsx";
import Cocina from "./Components/cocina/cocina.jsx"
import Admusuarios from "./Components/admusuarios/admusuarios.jsx";
import AdministracionMenu from "./Components/administracion-menu/administracion-menu.jsx";


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
    path: "/administracion-menu",
    element: <AdministracionMenu />,
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

