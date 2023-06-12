import '../App.css'

import {Link} from "react-router-dom"
import { Input } from '../components/Input'
import LabelText  from '../components/Label'
import { Button } from '../components/Button'


function Login() {
  const [pass, passInput] = Input ({ type: 'password'})
  const [email, emailInput] = Input ({ type: 'email'})
  return (
    <>
    
    <h1>Burger Queen</h1><section className="form">
      <h2>Inicio de Sesión</h2>
      <form>
         <div>
      <LabelText text="Correo Electrónico" />
      {emailInput}
        {console.log({email})}
    </div>
    <div>
      <LabelText text="Contraseña" />
      {passInput}
        {console.log({pass})}
    </div>
       
        <Link to='/waiter'>
          <Button onClick={onclick} text='Ingresar'></Button>
        </Link>
      </form>
    </section></>

  )
      }
  /*   <button className="button" id="bntLogin">Ingresar</button>
   <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> 
  )
}*/

export default Login
