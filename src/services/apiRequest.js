const apiRequest = async (url, method, body) => {
  try {
    // Obtener el token del localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token no encontrado en localStorage");
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const requestOptions = {
      method: method,
      headers: headers,
    };

    if (body) {
      requestOptions.body = JSON.stringify(body);
    }

    const response = await fetch(`http://localhost:8080${url}`, requestOptions);

    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error en la conexión");
  }
};

export default apiRequest;
