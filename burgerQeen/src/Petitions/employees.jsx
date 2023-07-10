
import Button from "../components/buttons";
import { useState, useEffect } from "react";
import axios from "axios";
import Admin from "../admi/admi";
import { Link } from "react-router-dom";
const Employees = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:8080/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setEmployees(response.data);
        console.log(response);
        console.log("Mostrando los employees");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>

      <div className="buttonAdmin">
        <Button className="buttons" id="employees" text="Colaboradores" />
        <Button className="buttons" id="products" text="Productos" />
        <Link to="/">
          <img src="/src/assets/flecha.png" alt="" className="botton-back" />
        </Link>
      </div>
      <div className="container-user">
        {employees.map(( user ) => (
          <Admin key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};
export default Employees;