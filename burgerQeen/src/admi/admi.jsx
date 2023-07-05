import React from "react";
//  import "./admin.css";

const Admin = ({ user }) => {
  return (
    <div className="users">
      <div className="users-name">{user.email}</div>
      <div className="user-password">{user.password}</div>
      <div className="user-role">{user.role}</div>
     
    </div>
  );
};

export default Admin;
