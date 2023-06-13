/* eslint-disable react/prop-types */
// import { useState } from 'react';
import { Field, ErrorMessage } from 'formik';

export const Input = ({ type, name }) => {
  return (
    <div>
      <Field type={type} id={name} name={name} />
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
}

/* export const Input = ({type}) => {
  const [value, setvalue] = useState('')
  const input = <input value= {value} onChange= {e => setvalue(e.target.value)} type={type}/>
  return [value, input];
}
 */

/* import { Field, ErrorMessage } from 'formik';

const CustomField = ({ type, name }) => {
  return (
    <div>
      <Field type={type} id={name} name={name} />
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
};

export default CustomField; */