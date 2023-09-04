import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/components/vistas/Auth/Login"
import Orders from "../src/components/vistas/Waiter/Orders";
import Kitchen from "./components/vistas/Kitchen/kitchen";
import Products from "../src/components/vistas/admin/Products"
import Users from "./components/vistas/admin/CreateUser";
// import Chef from "./components/vistas/chef/Chef.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Orders/' element={<Orders />} />
        <Route path='/Kitchen/' element={<Kitchen />} />
        <Route path='/Products/' element={<Products />} /> 
        <Route path='/users/' element={<Users />} /> 
      </Routes>
    </BrowserRouter>
  );
}
export default App;