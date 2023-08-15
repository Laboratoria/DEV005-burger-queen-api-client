import axios from 'axios'

const options =  {
  "Content-Type": "application/json",
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5MjA2NTUwMSwiZXhwIjoxNjkyMDY5MTAxLCJzdWIiOiIyIn0.4m-Ms7GaOb3KqoJiHh479AjLwG_KYC23S9d_xpSC6Fw"
}

//Actualizar JWT
async function updateAuth(){
  const NuevoCodigo = await axios.post('http://localhost:8080/login',{
    "email": "grace.hopper@systers.xyz",
    "password": "123456"
})
  options.Authorization = NuevoCodigo
}

//Traer los usuarios
async function Users(url) {
 
    const res = await axios.get(url,{  headers: options})
    console.log('RES', res.status)
    //funcion recursiva para actualizar JWT si da 402
    if(!res.status == 200){
      updateAuth()
      Users(url)
    }
    console.log(res.data, 'mamama') 
  return res.data;
}
export default Users
/* const url =  'http://localhost:8080/users'
fetch(url)
.then(response => response.json())
.then(data => mostrarData(data))
.catch(err => console.log(err))
const mostrarData = (data) => {
    console.log(data)
} */
