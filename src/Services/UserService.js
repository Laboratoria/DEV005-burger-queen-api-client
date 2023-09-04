// --- funcion para logearse
export const login = (formData) => {
    return fetch("http://localhost:8080/login", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {"Content-Type": "application/json"}
    })
    .then((res) => res.json())
    .then((res) => {
      if (typeof res === 'string')
        throw res;
      return res;
    });
};

//------- Funcion Token ------

export function getRequestOptions(method) {
  const bearerToken = localStorage.getItem("token");
  let requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (bearerToken) {
    requestOptions.headers["Authorization"] = `Bearer ${bearerToken}`;
  }
  return requestOptions;
}


// --------- Obtener productos del menú ------
export const getProducts = (requestOptions) => {
  return fetch("http://localhost:8080/products", requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

//----------- funcion agregar Orden al API----

export function postOrders(client, orderProducts) {
  const bearerToken = localStorage.getItem("token");

  
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + bearerToken,
    },
    body: JSON.stringify({
      client: client,
      products: orderProducts,
      status: "pending",
      //dataEntry: new Date().toLocaleString(),
      dataEntry: new Date().toISOString(),
    }),
  };

  return fetch("http://localhost:8080/orders", requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log("Response from server:", data); 
    if (data.error) {
      throw new Error(data.error);
    }
    return data;
  })
  .catch(error => {
    console.error(error);
    throw error;
  })
}


//----------- funcion traer Orden de la API----
export const getOrders = (requestOptions) => {
  return fetch("http://localhost:8080/orders", requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      throw error;
    });
};


//---- funcion patch -- cambiar estado de la orden a delivered

// export const patchOrders = (requestOptions)  => {
//   return fetch("http://localhost:8080/orders", requestOptions)
//     .then((response) => response.json())
//     .catch((error) => {
//       console.error(error);
//       throw error;
//     });
// };

export function patchOrders(orderId, patchData, requestOptions) {
  const url = `http://localhost:8080/orders/${orderId}`;

  return fetch(url, {
    ...requestOptions,
    body: JSON.stringify(patchData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response from server:", data);
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

// --------- Obtener productos2 del menú ------
export const getProducts2 = () => {
  const requestOptions = getRequestOptions("GET"); // Utiliza la función getRequestOptions para obtener el encabezado de autorización
  
  return fetch("http://localhost:8080/products", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching products");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      throw error;
    });
};

// --------- Agregar productos al menú ------
export const addProduct = (newProduct) => {
  const requestOptions = getRequestOptions("POST"); // Utiliza la función getRequestOptions para obtener el encabezado de autorización

  return fetch("http://localhost:8080/products", {
    ...requestOptions,
    body: JSON.stringify(newProduct),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error adding product");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error adding product:", error);
      throw error;
    });
};

// --------- Eliminar productos del menú ------
export const deleteProduct = (productId) => {
  const requestOptions = getRequestOptions("DELETE"); // Utiliza la función getRequestOptions para obtener el encabezado de autorización

  return fetch(`http://localhost:8080/products/${productId}`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error deleting product");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error deleting product:", error);
      throw error;
    });
};

//-------------Traer los usuarios---------
export const getUsers = () => {
  const requestOptions = getRequestOptions("GET"); 
  
  return fetch("http://localhost:8080/users", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching users");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      throw error;
    });
};

// --------- Agregar usuarios ------
 export const addUsers = (newUser) => {
  console.log(newUser);
  const requestOptions = getRequestOptions("POST"); 
  return fetch("http://localhost:8080/users", {
    ...requestOptions,
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error adding user");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error adding user:", error);
      throw error;
    });
};

// --------- Eliminar usuarios------
export const deleteUsers = (usersId) => {
  const requestOptions = getRequestOptions("DELETE");

  return fetch(`http://localhost:8080/users/${usersId}`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error deleting users");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error deleting users:", error);
      throw error;
    });
};