import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login.jsx";
import Orders from "./components/Waiter/Orders.jsx";
import Kitchen from "./components/Kitchen/kitchen.jsx";
// import Products from "./components/vistas/admin/Products.jsx";
// import Chef from "./components/vistas/chef/Chef.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Orders/' element={<Orders />}></Route>
        <Route path='/Kitchen/' element={<Kitchen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
