// import { Users } from './Usefetch'
// import React from 'react';
import './App.css'
import Home  from './Home';
import Login from './Login'
import PageNotFound from './pages/PageNotFound'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
          <Route exact path='/' component={Home} />
          <Route exact path="/Login" component={Login} />
        <Route component={PageNotFound} />
      </div>
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
