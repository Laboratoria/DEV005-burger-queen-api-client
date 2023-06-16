import { Formik,  } from "formik";
import { Button } from "../components/buttons";
 
 // eslint-disable-next-line react/prop-types
 export const LoginDom = ({validationSchema, submit}) => {
    return (
     <> 
       <img className="logo" src="/src/assets/Veggie.png"/>
 
     <div className="inputs">
     <h1>Bienvenidos</h1> 
     <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={submit}
            >
     Usuario:<input className="us" type="email" placeholder="ejemplo@gmail.com" required/>
     Contraseña: <input className="pas" type="password" placeholder='*********' required/>  
     <Button  text="Ingresar" />
     </Formik>
     </div>
     </>
     
   );
   
 };
 