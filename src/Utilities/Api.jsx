import axios from "axios";

const Api = async () => {
  // const { id, name, price, type } = products;
  try {
    const response = await axios.post("http://localhost:8080/products");

    const prueba = response.data;
    console.log(prueba);
  } catch (error) {
    console.error(error);
  }
};

export default Api;





 /* const accessToken = response.data.accessToken;
    console.log("LuisMi", accessToken); */

