// import { Users } from './Usefetch'
// import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import Home  from './Home';
import Login from './Login';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path="/Login" element={<Login/>} />
      </Routes>   
    </Router>
  );
}

export default App;













/* async function App() {
  const dataUsers  = await Users('http://localhost:8080/users')
  console.log(dataUsers)
  return (
    <>
      <div>
       
      </div>

    </>
  )
}

export default App */
