/* eslint-disable react/prop-types */
import { Field, ErrorMessage } from 'formik';

export const Input = ({ type, name }) => {
  return (
    <div>
      <Field type={type} name={name} />
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
}