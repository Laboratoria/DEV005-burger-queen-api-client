import React from 'react'
import ReactDOM from 'react-dom/client'
// import login from './Route/Login.jsx'
import './index.css'
import Waiter from './Route/waiter.jsx'
import {createHashRouter, RouterProvider} from 'react-router-dom'
import Login from './Route/Login.jsx'

const router = createHashRouter([
  {
    path:'/',
    element:<Login />
  },
  {
    path:'/waiter',
    element:<Waiter/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    
  </React.StrictMode>,
)
