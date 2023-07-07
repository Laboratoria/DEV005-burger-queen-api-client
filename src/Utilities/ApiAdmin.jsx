import { useState, useEffect } from "react";
import axios from "axios";
import EmployeesTable from "../components/employeesTable";

export const ApiAdmin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8080/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const usersData = response.data;
      setUsers(usersData);
    } catch (error) {
      console.error(error);
      setUsers([]);
    }
  };

  return (
    <div>
      <EmployeesTable users={users} />
    </div>
  );
};

