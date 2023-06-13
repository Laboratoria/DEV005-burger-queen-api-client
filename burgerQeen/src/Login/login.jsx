   import './login.css'
   import { Link } from 'react-router-dom';
   
   export default function Login() {
    
    return (
     <> 
       <img className="logo" src="/src/assets/Veggie.png"/>

       
     <div className="inputs">
      <h1>Bienvenidos</h1>
     Usuario:<input className="us" type="email" placeholder="ejemplo@gmail.com" required/>
     Contraseña: <input className="pas" type="password" placeholder='*********' required/>  
      </div>
      <Link to= '/Client'>    
      <button className="button-form">Ingresar</button>
      </Link>
     </>
   );
}