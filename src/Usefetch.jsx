import axios from 'axios'

const options =  {
  "Content-Type": "application/json",
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5MTg5MTI3MSwiZXhwIjoxNjkxODk0ODcxLCJzdWIiOiIyIn0.M1YZm2n2IEgIP43Xdt-69OCc12eABtWSvMIqmqtbZn4"
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

/* const url =  'http://localhost:8080/users'
fetch(url)
.then(response => response.json())
.then(data => mostrarData(data))
.catch(err => console.log(err))
const mostrarData = (data) => {
    console.log(data)
} */
