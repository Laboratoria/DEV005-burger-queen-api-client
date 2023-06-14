import "../App.css";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "../components/Input";
import LabelText from "../components/Label";
import { Button } from "../components/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import { useHistory } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  // const history = useHistory();
  const handleSubmit = async (values, { resetForm }) => {
    const { email, password } = values;
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      // <Link to="/admin"></Link>;

      const accessToken = response.data.accessToken;
      console.log('chayanne', accessToken);
      
      if (response.data.user.role === "admin") {
        navigate("/admin");
      } else if (response.data.user.role === "waiter") {
        navigate("/waiter");
      }
      resetForm();
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          console.error("Error: Se requiere correo y contraseña");
        } else if (error.response.status === 404) {
          console.error("Error: Credenciales incorrectas");
        }
      } else {
        console.error("Error: No se pudo conectar al servidor");
      }
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("Campo requerido"),
    password: Yup.string().required("Campo requerido"),
  });
  /* if (redirectTo) {
    return <Redirect to={redirectTo} />;
  } */
  return (
    <>
      <h1>Burger Queen</h1>
      <section className="form">
        <h2>Inicio de Sesión</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
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
}
export default Login;

/* function Login() {
  const handleSubmit = (values) => {
    // Lógica para enviar los datos del formulario
    console.log(values);
  };

  return (
    <>
      <h1>Burger Queen</h1>
      <section className="form">
        <h2>Inicio de Sesión</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <CustomField  type="email" name="email" />
              <CustomField  type="password" name="password" />
              <Button onClick={onclick} text='Ingresar'></Button>
              <Link to='/waiter'>
                </Link> 
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
} */
