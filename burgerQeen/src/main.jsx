import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.css";
import  Login from "./Login/login.jsx";
import Admin from "./admi/admi";
import Products from "./petitions/products";
import Chef from "./chef/chef";
import Order from "./components/order";
import Employees from "./petitions/employees";

const router = createHashRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/chef",
    element: <Chef />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
  {
    path: '/waiter',
    element:<Order/>,
  },
  {
    path: '/Admin',
    element:<Employees/>,
  },
  {
    path: '/admin',
    element: <Employees />,

  },
  {
    path: '/waiter',
    element: <OrTicket />,
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);








