import bearerToken from "../http";
import axios from "axios";

function Get() {
  const headers = { Authorization: `Bearer ${bearerToken.token}` };

  const getTrending = () => {
    axios({
      method: "get",
      url: "http://localhost:8080/products",
      headers,
    }).then((response) => console.log("get products", response));
    axios({
      method: "get",
      url: "http://localhost:8080/users",
      headers,
    }).then((response) => console.log("get users", response));
    axios({
      method: "get",
      url: "http://localhost:8080/orders",
      headers,
    }).then((response) => console.log("get orders", response));
    const loginDta = axios.post(
        "http://localhost:8080/login",
        {
          email: "grace.hopper@systers.xyz",
          password: "123456",
        },
        headers
      )
      .then((response) => {
        const datas = response; 
        console.log(datas.data.accessToken)});
      axios.patch(
        " http://localhost:8080/orders/2",
        {
          status: "delivered",
          dateProcessed: "2022-03-05 16:00"
      },
        loginDta
      )
      .then((response) => console.log("patch orders", response));
  };

  getTrending();

  return (
    <>
      <h1>Burger QAC</h1>
    </>
  );
}

export default Get;
