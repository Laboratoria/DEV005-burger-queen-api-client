import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import  Login from "./Login/login.jsx";
import Admin from "./admi/admi";
// import {Menu} from "./waiter/menu";
import { useNavigate } from "react-router-dom";
import Products from "./petitions/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: '/waiter',
    element:<Products />
  },
  {
    path: '/Admin',
    element:<Admin/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export const useNavigation = () => {
  const navigateOn = useNavigate();

  const goToWaiter = () => {
    navigateOn("/waiter");
  };


const goToAdmin = () => {
    navigateOn("/admin");
  };

  return { goToWaiter, goToAdmin, };
};