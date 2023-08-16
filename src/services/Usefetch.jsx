import axios from "axios";

let authToken =`Bearer ${localStorage.getItem("code")}`; 

// Function to update authentication token
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
    console.error("Error updating auth:", error);
  }
}

/* // Fetch users data
export async function Users() {
  console.log("Entre al user");
  try {
    const res = await axios.get('http://localhost:8080/users', {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${authToken}`,
      },
    });

    console.log("RES", res.data);

    console.log(res.data, "MAMAMAMAMAMAMA");
    return res.data;
  } catch (error) {
    if (error.response.status == 401) {
      updateAuth();
      return Users();
    }
    console.error("Error fetching users:", error);
    return null;
  }
} */

{
  /*import axios from 'axios'
const options =  {
  "Content-Type": "application/json",
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5MjA0ODg2OSwiZXhwIjoxNjkyMDUyNDY5LCJzdWIiOiIyIn0.bxA1V5tjjmwMBp8AxsJ8BdGklPU9ZBbJLVpj0zZIu6s"
}
//Actualizar JWT  solicitud a la url de inicio de sesion 
async function updateAuth(){
  const response = await axios.post('http://localhost:8080/users',{
    "email": "grace.hopper@systers.xyz",
    "password": "123456"
})
  const newToken = response.data.token;
  console.log('NEW TOKEN', response.data.token)
  options.Authorization = `Bearer ${newToken}`
}
//Traer los usuarios
export async function Users(url) {
    const res = await axios.get(url,{  headers: options})
    console.log('RES', res)
    //funcion recursiva para actualizar JWT si da 402
    if(res.status == 402){
      updateAuth()
      Users(url)
    }
    console.log(res.data,'mamama') 
  return res.data;
}
*/
}
