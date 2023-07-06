// eslint-disable-next-line no-unused-vars
import React from "react";
import "./admi.css"
// eslint-disable-next-line react/prop-types
const Admin = ({user}) => {
    
  return (
    <div className="users">
      <div className="user-name">{user.email}</div>
      <div className="user-role">{user.role}</div>
      <div className="user-password">{user.password}</div>
    </div>
  );
};
export default Admin;
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
