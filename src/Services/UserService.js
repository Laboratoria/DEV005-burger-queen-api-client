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

// --- funcion para logearse
export const login = (formData) => {
    return fetch("https://bendigo-quokka-fbxt.1.us-1.fl0.io/login", {
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

// --------- Obtener productos del menú ------
export const getProducts2 = () => {
  const requestOptions = getRequestOptions("GET"); // Utiliza la función getRequestOptions para obtener el encabezado de autorización
  
  return fetch("https://bendigo-quokka-fbxt.1.us-1.fl0.io/products", requestOptions)
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

// //----------- funcion agregar Orden al API----
export function postOrders(orderData) {
  const bearerToken = localStorage.getItem("token");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + bearerToken,
    },
    body: JSON.stringify(orderData), // Envía el objeto orderData
  };
  return fetch("https://bendigo-quokka-fbxt.1.us-1.fl0.io/orders", requestOptions)
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
}

//----------- funcion traer Orden de la API----
export const getOrders = (requestOptions) => {
  return fetch("https://bendigo-quokka-fbxt.1.us-1.fl0.io/orders", requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

//----------- Funcion para cambiar estado de la orden ---------

export function patchOrders(orderId, patchData, requestOptions) {
  const url = `https://bendigo-quokka-fbxt.1.us-1.fl0.io/orders/${orderId}`;

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

// --------- Agregar productos al menú ------
export const addProduct = (newProduct) => {
  const requestOptions = getRequestOptions("POST"); // Utiliza la función getRequestOptions para obtener el encabezado de autorización

  return fetch("https://bendigo-quokka-fbxt.1.us-1.fl0.io/products", {
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

  return fetch(`https://bendigo-quokka-fbxt.1.us-1.fl0.io/products/${productId}`, requestOptions)
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

// --------- Editar productos del menú ------
export const updateProduct = (productId, updatedProductData) => {
  const requestOptions = getRequestOptions("PUT"); 

  return fetch(`https://bendigo-quokka-fbxt.1.us-1.fl0.io/products/${productId}`, {
    ...requestOptions,
    body: JSON.stringify(updatedProductData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error updating product");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error updating product:", error);
      throw error;
    });
};

//-------------Traer los usuarios---------
export const getUsers = () => {
  const requestOptions = getRequestOptions("GET"); 
  
  return fetch("https://bendigo-quokka-fbxt.1.us-1.fl0.io/users", requestOptions)
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
  return fetch("https://bendigo-quokka-fbxt.1.us-1.fl0.io/users", {
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

  return fetch(`https://bendigo-quokka-fbxt.1.us-1.fl0.io/users/${usersId}`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error deleting users");
      }
      }) 
    }
  

    // ------------ Editar Usuarios -----------------//

    export const updateUser = (updatedUser) => {
      const bearerToken = localStorage.getItem("token");
      const requestOptions = {
        method: "PUT", // Utiliza el método PUT para actualizar el usuario
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
        body: JSON.stringify(updatedUser),
      };
    
      return fetch(`https://bendigo-quokka-fbxt.1.us-1.fl0.io/users/${updatedUser.id}`, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error updating user");
          }
          return response.json();
        })
      .catch((error) => {
          console.error("Error updating user:", error);
          throw error;
        });
    };