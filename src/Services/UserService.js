
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

//-------

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


// ---------
export const getProducts = (requestOptions) => {
  return fetch("http://localhost:8080/products", requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

