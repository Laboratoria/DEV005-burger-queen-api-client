   import './login.css'
   
   export default function Login() {
    
    return (
     <> 
       <img className="logo" src="/src/assets/Veggie.png"/>

       
     <div className="inputs">
      <h1>Bienvenidoss</h1>
     Usuario:<input className="us" type="email" placeholder="ejemplo@gmail.com" required/>
     Contraseña: <input className="pas" type="password" placeholder='*********' required/>      
      <button className="button-form">Ingresar</button>
      </div>
     </>
   );
}