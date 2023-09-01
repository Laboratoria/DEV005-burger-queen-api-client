import Dropdown from "../DropDownList/DropDownList";

import Buttons from "../Buttons/Buttons";
import { useEffect, useState } from "react";
import { createUsers, editUser, getUsers } from "../../services/UseAxios";
import Swal from 'sweetalert2';



function EmployeesManagement() {
   
   
    // ESTADO DE ROLE
    const [role, setRole] = useState("");
    
    function handleOnChangeRole(e) {
        console.log(e.target.value, "lililili");
        setRole(e.target.value);
      }

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

    // CREAR USUARIOS
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
      console.log(event.target.value);
      setEmail(event.target.value);
    };
    const [password, setPassword] = useState("");

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

  // OBTENER LOS USUARIOS YA CREADOS
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();

        console.log(response, "MIRIA ANTONIA")
        setUsers(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchUsers();
  }, []);


// EDITAR USUARIOS
const [editingUserId, setEditingUserId] = useState(null);
const [newEmail, setNewEmail] = useState("");
const [newPassword, setNewPassword] = useState("");
const [newRole, setNewRole] = useState("");

const handleEditSubmit = async () => {
  try {
   
    const response = await editUser(editingUserId,  newEmail, newPassword, newRole);

    console.log(response, 'COMANDO')
     response.newEmail = setNewEmail(users.email)

    // Limpia los campos y el estado de edición
    setEditingUserId(null);
    setNewEmail("");
    setNewPassword("");
    setNewRole("");
  } catch (error) {
    // Manejo de errores
  }
};








  return (
    <main>
      <section>
        <form onSubmit={handleSubmit} action="">
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
          

{editingUserId ? (
  <Buttons tag="Confirm Edit" onClick={handleEditSubmit} type="submit" />
  
) : (
  <Buttons tag="Upload" type="submit" />
)}


        </form>

        <section>
          {users.map((user) => (
            <div key={user.id}>
              <p>{user.email}</p>
              <p>{user.role}</p>
              <button className="delete" type="button">
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
    setEditingUserId(user.id);
    setNewEmail(user.email);
    setNewPassword(""); 
    setNewRole(user.role);
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
