import {
  Route,
  Routes,
} from "react-router-dom";
import Get from './components/Get'
import { Error } from "./components/error/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Get/>}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
