import Dropdown from "../DropDownList/DropDownList";

import Buttons from "../Buttons/Buttons";
import { useEffect, useState } from "react";
import { createUsers, deleteUser, editUser, getUsers } from "../../services/UseAxios";
import Swal from 'sweetalert2';



function EmployeesManagement() {
   
  // ESTADO DE ROLE
  const [role, setRole] = useState("");
  // CREAR USUARIOS
  const [email, setEmail] = useState("");
  // OBTENER LOS USUARIOS YA CREADOS
  const [users, setUsers] = useState([]);
  // ID USUARIOS
  const [userId, setUserId] = useState(null);
  // ESTADO PASSWORD
  const [password, setPassword] = useState("");

   
  const items = [
    {
      id: 1,
      value: "Waiter",
    },
    {
      id: 2,
      value: "Chef",
    },
    {
      id: 3,
      value: "Admin",
    },
  ];

  function handleOnChangeRole(e) {
    console.log(e.target.value, "lililili");
    setRole(e.target.value);
  }


    const handleEmailChange = (event) => {
      console.log('EMAIL',event.target.value);
      setEmail(event.target.value);
    };


    const handlePasswordChange = (event) => {
      console.log(event.target.value);
      setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
   
        if (!email || !password ) {
          Swal.fire({
            title: 'Please fill in the required information',
            icon: 'error',
            confirmButtonColor: '#D62828',
          });
          return;
        } 
  
        try {
          const response = await createUsers(email, password, role);
          console.log(response.user, 'tu te me quitas')
          setEmail("");
          setPassword("");
          setRole("");
          return response
         
        } catch (error) {
          Swal.fire({
            title: 'Error registering user, please try again later',
            icon: 'error',
            confirmButtonColor: '#D62828',
          });
        }
      } 

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
  
      console.log(response, "MIRIA ANTONIA");
      setUsers(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  
const handleEditSubmit = async () => {

  try {

    const response = await editUser(userId,  email, password, role);

    console.log(response, 'COMANDO')
     response.newEmail = setEmail(users.email)
  
  } catch (error) {
    // Manejo de errores
  }
};

// ELIMINAR USUARIOS 
const handleDeleteUser = async (userId) => {
  try {
    const response = await deleteUser(userId);
    console.log(response, "Usuario eliminado");

    // Actualiza la lista de usuarios después de la eliminación
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
  }
};

useEffect(() => {
  fetchUsers();
}, []); 

  return (
    <main>
      <section>
        <form  action="" >
        <input 
        onChange={handleEmailChange}
        className="inputs-login"
        type="text" 
        name="email" 
        id="" placeholder=" 👤︎ Employee email" 
        value={email}/>
        <input
        onChange={handlePasswordChange} className="inputs-login" type="password"
        name="password" 
        placeholder=" 🔒︎ Password" 
        value={password} />
          <Dropdown
            handleOnChange={handleOnChangeRole}
          items={items}   
          role={role}        
          />
          

{userId ? (
  <Buttons tag="Confirm Edit" onClick={handleEditSubmit}  />
  
) : (
  <Buttons tag="Upload" onClick={handleSubmit} />
)}


        </form>

        <section>
          {users.map((user) => (
            <div key={user.id}>
              <p>{user.email}</p>
              <p>{user.role}</p>
              <button className="delete" onClick={() => handleDeleteUser(user.id)} type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#626262"
                  className="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
              </button>
              <button className="edit" type="button"  onClick={() => {
                 console.log(user.role, 'A VER')
                 console.log(user.id, 'A VER')
                 setUserId(user.id);
      setEmail(user.email);
      setPassword('');
      setRole(user.role);
    
  }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-edit"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#626262"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                  <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                  <path d="M16 5l3 3" />
                </svg>
              </button>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
export default EmployeesManagement;
