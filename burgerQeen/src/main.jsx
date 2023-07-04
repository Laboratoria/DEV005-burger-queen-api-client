import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.css";
import  Login from "./Login/login.jsx";
import Chef from "./chef/chef";
import Products from "./Petitions/products";
import Order from "./components/order";
import Employees from "./Petitions/employees";
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
    element: <Order />,

  },
  {
    path: '/waiter',
    element: <Products />,

  },
  {
    path: '/admin',
    element: <Employees />,

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);