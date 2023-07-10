// eslint-disable-next-line no-unused-vars
import React from "react";
import "./admi.css"
// eslint-disable-next-line react/prop-types
const Admin = ({user, handleEditUser}) => {
    
  return (
    <>
    
    <div className="users">
      <div className="user-id">{user.id}</div>
      <div className="user-name">{user.name}</div>
      <div className="user-email">{user.email}</div>
      <div className="user-role">{user.role}</div>
      

      <img src="src/assets/editar.png" alt="editar" className="btn-editar-users"
        onClick={() => handleEditUser(user)} />
    </div></>
  );
};
export default Admin;
