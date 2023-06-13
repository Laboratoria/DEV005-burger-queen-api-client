import '../App.css'

import {Link} from "react-router-dom"
import { Input  } from '../components/Input'
import LabelText  from '../components/Label'
import { Button } from '../components/Button'
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('El correo electrónico no es válido').required('El correo electrónico es obligatorio'),
  password: Yup.string().required('La contraseña es obligatoria'),
});

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

function Login() {
   const [pass, passInput] = Input ({ type: 'password'})
  const [email, emailInput] = Input ({ type: 'email'}) 
  const handleSubmit = (values) => {
    // Lógica para enviar los datos del formulario
    console.log(values);
  };

  return (
    <>
    <h1>Burger Queen</h1><section className="form">
      <h2>Inicio de Sesión</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
  
      <Form>
      {/* <CustomField label="Correo Electrónico" type="email" name="email" />
      <CustomField label="Contraseña" type="password" name="password" /> */}
  
        <div>
      <LabelText text="Correo Electrónico" />
      {emailInput}
      <ErrorMessage name='email' component='div' />
        {console.log({email})}

    </div>
    <div>
      <LabelText text="Contraseña" />
      {passInput}
      <ErrorMessage name='password' component='div' />
        {console.log({pass})}
    </div> 
    <Button onClick={onclick} text='Ingresar'></Button>
       <Link to='/waiter'>
        </Link> 
      </Form>
      </Formik>
    </section></>

  )
      }
  
export default Login
