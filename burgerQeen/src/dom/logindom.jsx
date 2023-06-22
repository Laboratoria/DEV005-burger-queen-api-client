import { Formik,  } from "formik";
import Button from "../components/buttons";
import { validationSchema } from "../components/validation";
import { handleSubmittion } from "../petitions/response";
import { useNavigation } from "../main";

 export const LoginDom = () => {
    const { goToAdmin, goToWaiter } = useNavigation();
  const submit = handleSubmittion(goToAdmin, goToWaiter);
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
  {({ handleSubmit, handleChange, values, errors }) => (
    <form onSubmit={handleSubmit}>
      <div>
        Usuario:
        <input
          className="us"
          type="email"
          name="email"
          placeholder="ejemplo@gmail.com"
          value={values.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        Contraseña:
        <input
          className="pas"
          type="password"
          name="password"
          placeholder="*********"
          value={values.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <Button className="btn-login" text="Ingresar" type="submit" />
    </form>
  )}
</Formik>
     </div>
     </>
     
   );
   
 };
 