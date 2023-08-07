import LoginCSS from "../Style/login.module.css";
import { Formik, Form } from "formik";
import { handleSubmittion } from "../Utilities/Submit";
import { useNavigation } from "../Utilities/Direction";
import { Input } from "./Input";
import LabelText from "./Label";
import Button  from "./Button";
import { validationSchema } from "../Utilities/Validation";

const LoginForm = () => {
  const { goToAdmin, goToWaiter, goToChef } = useNavigation();
  const submit = handleSubmittion(goToAdmin, goToWaiter, goToChef);

  return (
    <div className={LoginCSS.login}>
      <h1>Burger Queen</h1>
      <section className={LoginCSS.form}>
        <h2>Inicio de Sesión</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={submit}>
          <Form>
            <LabelText text="Correo Electrónico" />
            <Input type="email" name="email" />
            <LabelText text="Contraseña" />
            <Input type="password" name="password" />
            <Button className={`${LoginCSS.green} button`} text="Ingresar" />
          </Form>
        </Formik>
      </section>
    </div>
  );
};
export default LoginForm