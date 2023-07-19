import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.css";
import  Login from "./Login/login.jsx";
import Products from "./Petitions/products";
import Chef from "./chef/chef";
import Order from "./components/order";
import Employees from "./petitions/employees";
import OrTicket from "./chef/tickets";
import Menu from "./waiter/menu";
import AddEmployees from "./petitions/addemployees";
import AdmiProducts from "./admi/admiproducts";
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
    path: '/waiter',
    element:<Products/>,
  },
  {
    path: '/Admin',
    element:<Employees/>,
  },
  {
    path: '/waiter',
    element: <OrTicket />,
  },
  {
    path: '/admi',
    element: <Menu />,
  },
  {
    path: '/admi',
    element: <AddEmployees />,
  },
  {
    path: '/admi',
    element: <AdmiProducts />,
  },
  
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);








