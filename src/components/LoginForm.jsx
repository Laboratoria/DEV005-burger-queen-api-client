import { Formik, Form } from "formik";
import { Input } from "./Input";
import LabelText from "./Label";
import { Button } from "./Button";

export const LoginForm = ({ validationSchema, submit }) => {
    return (
      <>
        <h1>Burger Queen</h1>
        <section className="form">
          <h2>Inicio de Sesión</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={submit}
          >
            <Form>
              <LabelText text="Correo Electrónico" />
              <Input type="email" name="email" />
              <LabelText text="Contraseña" />
              <Input type="password" name="password" />
              <Button  text="Ingresar" />
         
            </Form>
          </Formik>
        </section>
      </>
    );
  };
