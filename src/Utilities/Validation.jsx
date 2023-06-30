import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("Ingresa un correo valído, por favor"),
    password: Yup.string().required("Ingresa una contraseña valída, por favor"),
  });