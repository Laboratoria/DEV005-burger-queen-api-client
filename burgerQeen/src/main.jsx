import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import  Login  from "./Login/login.jsx";
import Client from "./waiter/client.jsx";
import Menu from "./waiter/menu";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path:'/Client',
    element:<Client />,
  },
  {
    path: '/Menu',
    element:<Menu />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);