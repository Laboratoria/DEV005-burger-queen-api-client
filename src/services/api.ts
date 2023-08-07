import { CreateUser, Order, Product, User,CreateProduct, CreateOrder } from "./interfaces";

export const api = {
  users:{
    getUsers: async (): Promise<User[] | []> => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`https://dev005-burger-queen-api-production.up.railway.app/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error en la solicitud");
        }
      } catch (error) {
        console.error("Error:", error);
        return [];
      }
    },
    createUser: async (props:CreateUser): Promise<User | {}> => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `https://dev005-burger-queen-api-production.up.railway.app/users`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(props),
          },
         
        );
    
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error en la solicitud");
        }
    
      } catch (error) {
        console.error("Error:", error);
        return {};
      }
    },
    updateUser: async (props:CreateUser): Promise<User | {}> => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `https://dev005-burger-queen-api-production.up.railway.app/users/${props?.email}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(props),
          },
         
        );
    
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error en la solicitud");
        }
    
      } catch (error) {
        console.error("Error:", error);
        return {};
      }
    },
    deleteUser: async (email:string): Promise<User | {}> => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `https://dev005-burger-queen-api-production.up.railway.app/users/${email}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
         
        );
    
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error en la solicitud");
        }
    
      } catch (error) {
        console.error("Error:", error);
        return {};
      }
    }
    
  },
  products:{ 
    getProducts: async (): Promise<Product[] | []> => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "https://dev005-burger-queen-api-production.up.railway.app/products",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error en la solicitud");
      }

    } catch (error) {
      console.error("Error:", error);
      return [];
    }
},
createProduct: async (props:CreateProduct): Promise<Product | {}> => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `https://dev005-burger-queen-api-production.up.railway.app/products`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...props,price:+props.price}),
      },
     
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error en la solicitud");
    }

  } catch (error) {
    console.error("Error:", error);
    return {};
  }
},
updateProduct: async (props:Product): Promise<Product | {}> => {
  const token = localStorage.getItem("token");

  const  {_id,...product} = props
  try {
    const response = await fetch(
      `https://dev005-burger-queen-api-production.up.railway.app/products/${_id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...product}),
      },
     
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error en la solicitud");
    }

  } catch (error) {
    console.error("Error:", error);
    return {};
  }
},
deleteProduct: async (id:string): Promise<Product | {}> => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `https://dev005-burger-queen-api-production.up.railway.app/products/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
     
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error en la solicitud");
    }

  } catch (error) {
    console.error("Error:", error);
    return {};
  }
}
},
  orders:{
    getOrders: async (): Promise<Order[] | []> => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "https://dev005-burger-queen-api-production.up.railway.app/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error en la solicitud");
      }

    } catch (error) {
      console.error("Error:", error);
      return [];
    }
},
createOrder: async (order:CreateOrder): Promise<Order[] | []> => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `https://dev005-burger-queen-api-production.up.railway.app/orders`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...order
        }),
      },
     
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error en la solicitud");
    }

  } catch (error) {
    console.error("Error:", error);
    return [];
  }
},
updateOrder: async (id:string,status:string): Promise<Order[] | []> => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `https://dev005-burger-queen-api-production.up.railway.app/orders/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status
        }),
      },
     
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error en la solicitud");
    }

  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
}
    
  };