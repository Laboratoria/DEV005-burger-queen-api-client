import axios from 'axios';

let authToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5MjEwODY3MCwiZXhwIjoxNjkyMTEyMjcwLCJzdWIiOiIyIn0.7wAUW0i0JnyMCL2J4SqzVBbSZWXYwlMXleIyShV8e0A";

// Función para actualizar el token de autenticación
async function updateAuth() {
  try {
    const response = await axios.post('http://localhost:8080/login',
     content-type: application/json
    {
        "email": "grace.hopper@systers.xyz",
        "password": "123456"
    });
    console.log(response, 'jijijijijijij')
    authToken = `Bearer ${response.data.token}`;
    console.log('NEW TOKEN', authToken);
  } catch (error) {
    console.error('Error updating auth:', error);
  }
}
updateAuth()

// Fetch users data
export async function Users(url) {
  try {
    const res = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": authToken
      }
    });

    console.log('RES', res.data);
    if (res.status === 401) {
      await updateAuth();
      return Users(url); // Return the result of the recursive call
    }

    console.log(res.data, 'mamama');
    return res.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return null;
  }
}





















{/*import axios from 'axios'

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
*/}