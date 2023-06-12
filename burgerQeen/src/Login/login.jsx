   import './login.css'
   export default function Login() {
    return (
     <> 
     
       <img className="logo" src="/src/assets/Veggie.png"/>
       
      
       
     <div className="inputs">
     Usuario:<input className="us" type="email" placeholder="Email" required/>
     Contraseña: <input className="pas" type="password"  required/>      
      <button className="button-form">Ingresar</button>
      </div>
     </>
   );
}