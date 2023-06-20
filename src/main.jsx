import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Waiter from "./Routes/Waiter/waiter";
import Admin from "./Routes/Admin/Admin";
import Breakfast from "./Routes/Waiter/WaiterBreakfast";
// import Order from "./Routes/Waiter/WaiterOrder";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Login from "./Routes/login";
import Order from "./Routes/Waiter/WaiterOrder";


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
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/breakfast",
    element: <Breakfast />,
  },
  {
    path: "/order",
    element: <Order />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
