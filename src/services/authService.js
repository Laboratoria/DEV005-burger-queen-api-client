const authLogin = async (inputValue) => {
  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error en la conexión con el servidor");
  }
};

export default authLogin;
