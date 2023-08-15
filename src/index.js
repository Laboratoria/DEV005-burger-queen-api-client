import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/login/login.jsx";
import Pedido from "./Components/pedido/pedido.jsx";
//import administracion from "./Components/administracion/administracion.jsx";
//import cocina from "./Components/cocina/cocina.jsx";

//import "bootstrap/dist/css/bootstrap.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/pedido",
    element: <Pedido />,
  },
  // {
  //   path: "/administracion",
  //   element: <administracion />,
  // },
  // {
  //   path: "/cocina",
  //   element: <cocina />,
  // },
  // {
  //   path: "/delete",
  //   element: <DeleteModal />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

