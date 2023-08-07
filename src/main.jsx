import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Waiter from "./Routes/Waiter/waiter";
import Admin from "./Routes/Admin/Admin";
import Chef from "./Routes/Chef/Chef"
import Breakfast from "./Routes/Waiter/WaiterBreakfast";
import  ChefOrder  from "./Routes/Chef/ChefOrder";
import ChefService  from "./Routes/Chef/ChefService";
// import Order from "./Routes/Waiter/WaiterOrder";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./Routes/login";
import Order from "./Routes/Waiter/WaiterOrder";
import AdminEmployees from "./Routes/Admin/AdminEmployees";
import AdminProducts from "./Routes/Admin/AdminProducts";


const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/waiter",
    element: <Waiter />,
  },
  {
    path: "/breakfast",
    element: <Breakfast />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/chef",
    element: <Chef />,
  },
  {
    path: "/cheforder",
    element: <ChefOrder />,
  },
  {
    path: "/service",
    element: <ChefService />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/employees",
    element: <AdminEmployees />,
  },
  {
    path: "/products",
    element: <AdminProducts />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
