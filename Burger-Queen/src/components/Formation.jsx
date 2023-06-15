import { Formik, Form } from "formik";
import { Input } from "./Input";
import LabelText from "./Label";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const Forma = ({ validationSchema, luismi }) => {
    return (
      <>
        <h1>Burger Queen</h1>
        <section className="form">
          <h2>Inicio de Sesión</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={luismi}
          >
            <Form>
              <LabelText text="Correo Electrónico" />
              <Input type="email" name="email" />
              <LabelText text="Contraseña" />
              <Input type="password" name="password" />
              <Button  text="Ingresar" />
              <Link to="/admin"></Link>
  
              <Link to="/waiter"></Link>
            </Form>
          </Formik>
        </section>
      </>
    );
  };

/*   return (
    <button onClick={onClick}>{text}</button>
  ); */