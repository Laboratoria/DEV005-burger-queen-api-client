import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Waiter from "./Routes/Waiter/waiter";
import Admin from "./Routes/Admin/Admin";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Login from "./Routes/login";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
