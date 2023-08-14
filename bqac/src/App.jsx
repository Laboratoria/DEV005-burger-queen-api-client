import {
  Route,
  Routes,
} from "react-router-dom";
import { Login } from './components/auth/login/Login'
import { Error } from "./components/error/Error";
import { Admin } from "./pages/admin/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
