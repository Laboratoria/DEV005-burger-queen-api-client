  
   export default function Login() {
    return (
     <> 
       <img className="logo" src= "./img/logo.png"/>
       <img className="nameRest" src= "./img/nameRest.png"/>

       
     <div className="inputs">
     Usuario:<input className="us" type="email" placeholder="Email" required/>
     Contraseña: <input className="pas" type="password"  required/>
          
      <button className="button-form">Ingresar</button>
      </div>
     </>
   );
}