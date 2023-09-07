import axios from "axios";
import Swal from "sweetalert2";

let authToken =`Bearer ${localStorage.getItem("code")}`; 

// ACTUALIZAR TOKEN DE AUTENTICACION---------------------------------------------------------

export async function updateAuth(email, password) {
  console.log("Entre al update");
  try {
    const response = await axios.post("http://localhost:8080/login", {
      email: email,
      password: password,
    });
    authToken = `Bearer ${response.data.accessToken}`;
    localStorage.setItem("code", response.data.accessToken);
    console.log("NEW TOKEN", authToken);
    console.log('Datos Usuarios,', response.data.user)
    return response.data.user;
  } catch (error) {
    console.log(error.response.data)
   if(error.reponse.data ==='Entre al update'){
    new Swal('Error has occurred. try again later');
   }
   if(error.reponse.data ==='Incorrect password'){
    new Swal('Wrong email or password. Please enter the correct information');
   }
    
  }
}

// TRAER LOS PRODUCTOS------------------------------------------------------------------------
export async function getproduct() {
  try {
    const res = await axios.get('http://localhost:8080/products', {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${authToken}`,
      },
    });

    console.log("RES", res.data);
    return res.data;
  } catch (error) {
    new Swal('Error has occurred. try again later');
    return null;
  }
} 

//TRAER LAS ORDENES----------------------------------------------------------------------------------------
export async function getOrder() {
  try {
    const res = await axios.get('http://localhost:8080/orders', {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${authToken}`,
      },
    });

    return res.data;
  } catch (error) {
    new Swal('Error has occurred. try again later');
    return null;
  }
} 

//CREAR ORDENES--------------------------------------------------------------------------------------
export async function createOrder(clientName, table, products, total) {
 
  try {
    const dateEntry = new Date().toLocaleString()
    const response = await axios.post("http://localhost:8080/orders", {
    "client": clientName,
    "table" : table,
    "products": products,
    "total": total ,
    "status": 'pending',
    "dateEntry": dateEntry,
    "startTime": new Date(),
},  
{headers: {
  "Content-Type": "application/json",
  Authorization: `${authToken}`,
},})
    return response.data;
  } catch (error) {
    new Swal('Error has occurred. try again');
    return null;
   
  }
}

//ACTUALIZAR ORDENES--------------------------------------------------------------------------------------------
export async function updateOrder(orderId, newStatus , readyTime) {
  try {
    await axios.patch(
      `http://localhost:8080/orders/${orderId}`,
      {
        status: newStatus,
        readyTime: readyTime, //agregar el tiempo de preparacion al cuerpo de la solicitud
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authToken}`,
        },
      }, 
    );
    new Swal('Succesfully completed');
  } catch (error) {
    new Swal('Error has occurred. try again');
    return null;
   
  }
}

// OBTENER USUARIOS

export async function getUsers() {
  try {
    const res = await axios.get('http://localhost:8080/users', 
      
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${authToken}`,
      },
    });

    return res.data;
  } catch (error) {
    new Swal('Error has occurred. try again later');
    return null;
  }
} 



// CREAR USUARIOS
export async function createUsers(email, password, role ) {
 
  try {
    const response = await axios.post("http://localhost:8080/users", 
    {
      "email": email,
      "password": password,
      "role": role,
  },
{headers: {
  "Content-Type": "application/json",
  Authorization: `${authToken}`,
},})

    return response.data;
  } catch (error) {
    new Swal('Error has occurred. try again later');
   
  }
}
// CREAR PRODUCTO----------------------------------------------------------
export async function createProduct(nameProduct, price, image, type ) {
 
  try {
    const dateEntry = new Date().toLocaleString()
    const response = await axios.post("http://localhost:8080/products", 
    {
      
      "name": nameProduct,
      "price": price,
      "image": image,
      "type": type,
      "dateEntry": dateEntry
    },
{headers: {
  "Content-Type": "application/json",
  Authorization: `${authToken}`,
},})
    return response.data;
  } catch (error) {
    new Swal('Error has occurred. try again');
    return null;
   
  }
}


// EDITAR USUARIOS
export async function editUser(userId, newEmail, newPassword, newRole ) {
  try {
   
    const response = await axios.put(`http://localhost:8080/users/${userId}`, 
    {
      "email": newEmail,
      "password": newPassword,
      "role": newRole,
  },
{headers: {
  "Content-Type": "application/json",
  Authorization: `${authToken}`,
},})

console.log(response.data, 'ELEMENTOS PARA EDITAR')
    return response.data;
  } catch (error) {
    new Swal('Error has occurred. try again');
   
  }
}
// ELIMINAR USUARIOS
export async function deleteUser(userId) {
  try {
    const response = await axios.delete(`http://localhost:8080/users/${userId}`, 
    
{headers: {
  "Content-Type": "application/json",
  Authorization: `${authToken}`,
},})

    return response.data;
  } catch (error) {
    new Swal('Error has occurred. try again');
  }
}

// ELIMINAR PRODUCTOS
export async function deleteProduct(productId) {
  try {
    const response = await axios.delete(`http://localhost:8080/products/${productId}`, {
      headers: {
        Authorization: `${authToken}`,
      },
    });

    console.log(response.data, 'Producto eliminado correctamente :D');
    return response.data;
  } catch (error) {
    new Swal('Error has occurred. try again');
    throw error; 
  }
}

// EDITAR PRODUCTOS
export async function editProduct(productId, newName, newPrice, newImage, newType) {
  try {
    const response = await axios.patch(
      `http://localhost:8080/products/${productId}`,
      {
        name: newName,
        price: newPrice,
        image: newImage,
        type: newType,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authToken}`,
        },
      }
    );

    console.log(response.data, 'Producto editado correctamente :D');
    return response.data;
  } catch (error) {
    new Swal('Error has occurred. try again');
  }
}