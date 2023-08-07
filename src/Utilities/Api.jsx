import axios from "axios";

const ApiProducts = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:8080/products", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const MENU = response.data;
    localStorage.setItem('products', JSON.stringify(response.data));
    return MENU;
  } catch (error) {
    console.error(error);
  }
};

export default ApiProducts;
