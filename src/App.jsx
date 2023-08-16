//import { Users } from './Usefetch'
// import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import Home  from './Home';
import Login from './Login';
import Waiter from './Waiter';
import Cheff from './Cheff';
import Admin from './Admin';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Waiter" element={<Waiter/>} />
          <Route exact path="/Cheff" element={<Cheff/>} />
          <Route exact path="/Admin" element={<Admin/>} />
      </Routes>   
    </Router>
  );
}

export default App;









