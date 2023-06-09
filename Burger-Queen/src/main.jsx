import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Route/login.jsx'
import './index.css'
import Waiter from './Route/waiter.jsx'
import {createHashRouter, RouterProvider} from 'react-router-dom'

const router = createHashRouter([
  {
    path:'/',
    element:<App />
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
