import React from "react";
import ReactDOM from "react-dom/client";

// ----------------------------------------- //

import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import "../src/Components/login/estilo-login.ccs"



async function App() {

  
// async function  requestApi(){

//   const res = await axios.get('http://localhost:8080/users', { headers: {
//     'Content-Type': 'application/json',
//     "Authorization": "Bearer " + localStorage.getItem('code')
//   },})
//   .catch(async e=>{
//     if( e.response.status == 401){
//       const newAccessCode=  await axios.post('http://localhost:8080/login', {
//         "email": "grace.hopper@systers.xyz",
//         "password": "123456"
//       })
//       console.log('eeee',newAccessCode)
//      localStorage.setItem('code', newAccessCode.data.accessToken )

//     }
//   })
//   console.log('ttttt', res)

 
//   return res
// }
//  console.log( requestApi())


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
}

export default App;

// --------------------------------------- //

module.exports = {
  presets: ["@babel/preset-react"]
};


