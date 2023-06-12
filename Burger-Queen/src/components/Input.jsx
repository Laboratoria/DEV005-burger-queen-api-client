import { useState } from 'react';

export const Input = ({type}) => {
  const [value, setvalue] = useState('')
  const input = <input value= {value} onChange= {e => setvalue(e.target.value)} type={type}/>
  return [value, input];
}


/* const email = ([value, onChange]) => {
  return(
    <section>
      <label htmlFor = "email">Correo Electrónico</label>
      <input
      type='email'
      value={value}
      onChange={onChange}
      />
    </section>
  );
};
const pass = ([value, onChange]) => {
  return(
    <section>
      <label htmlFor = "password">Contraseña</label>
      <input
      type='password'
      value={value}
      onChange={onChange}
      />
    </section>
  );
};

const Login = () => {
  const[ email, setEmail] = useState('')
  const[ pass, setPassword] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassword(event.target.value);
  };

 const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email', email);
    console.log('Pass', pass);
  };

  return(
    <form onSubmit={handleSubmit}>
     <email value={email} onChange={handleEmailChange}/>
     <pass value={pass} onChange={handlePassChange}/>
     <button type='submit'>Ingresar</button>
    </form>
  );
};
export default Login; */