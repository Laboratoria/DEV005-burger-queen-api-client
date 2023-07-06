import axios from "axios";

export const handleSubmittion = (goToWaiter, goToAdmin) => {
     const handleSubmit = async (values, { resetForm }) => {
      const { email, password } = values;
      try {
        const response = await axios.post("http://localhost:8080/login", {
          email,
          password,
        });
        const accessToken = response.data.accessToken;
        localStorage.setItem ("accessToken",accessToken)
      console.log('petition', accessToken);
      
      if (response.data.user.role === "admin") {
        goToAdmin();
      } else if (response.data.user.role === "waiter") {
        goToWaiter();
      } else if (response.data.user.role === "chef") {
        goToChef();
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
  return handleSubmit;
};
  



