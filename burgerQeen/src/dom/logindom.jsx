import { Formik } from "formik";
import Button from "../components/buttons";
import { validationSchema } from "../components/validation";
import { handleSubmittion } from "../Petitions/response";
import { useNavigation } from "../components/navegation";

export const LoginDom = () => {
  const { goToAdmin, goToWaiter, goToChef } = useNavigation();
  const submit = handleSubmittion(goToAdmin, goToWaiter, goToChef);
  return (
    <>
     <img className="logo" src="/src/assets/Veggie.png" />

      <div className="inputs">
        <h1 className="bienvenidos">Bienvenidos</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={submit}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <div className="Usuario">
                Usuario:
                <input
                  className="usuario"
                  type="email"
                  name="email"
                  placeholder="ejemplo@gmail.com"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="m-error">{errors.email}</span>}
              </div>
              <div>
                Contraseña:
                <input
                  className="pasword"
                  type="password"
                  name="password"
                  placeholder="*********"
                  value={values.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <span className="m-error">{errors.password}</span>}
              </div>
              <Button className="btn-login" text="Ingresar" type="submit" />
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
