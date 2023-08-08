import {
  Route,
  Routes,
} from "react-router-dom";
import Get from './components/Get'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Get/>}></Route>
      </Routes>
    </>
  );
}

export default App;
