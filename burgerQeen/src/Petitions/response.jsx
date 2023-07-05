import axios from "axios";

export const handleSubmittion = (goToAdmin, goToWaiter, goToChef) => {
     const handleSubmit = async (values, { resetForm }) => {
      const { email, password } = values;
      try {
        const response = await axios.post("http://localhost:8080/login", {
          email,
          password,
        });
        localStorage.setItem("accessToken", response.data.accessToken);
        const accessToken = response.data.accessToken;
        console.log('petition', accessToken);

      const user = response.data.user; 
        localStorage.setItem('email', user.email);
        console.log(user);
      
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
  
return handleSubmit
}



