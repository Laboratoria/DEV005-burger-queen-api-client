import "../../Style/breakfast.css";
import { useState } from "react";
//import Button from "../../components/Button";
import TopBar from "../../components/topBar";
import Header from "../../components/Header";
// import CounterMenu  from "../../components/CounterMenu";
//import Menu from "../../components/Menu";
import UserOrder from "../../components/userOrder";
// import Api  from "../../Utilities/Api";
import WaiterMenu from "../../Utilities/Api";

export default function Breakfast() {
  const [menu, setMenu] = useState([]);

  // Función para manejar el cambio de cantidad de productos
  const handleProductQuantityChange = (productId, quantity) => {
    // Actualizar la cantidad del producto en el estado del menú
    const updatedMenu = menu.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity };
      }
      return product;
    });
    setMenu(updatedMenu);
  };
  return (
    <>
      <Header prop="Marta" />
      <TopBar />
      <div className="mainContentWaiter">
        <div className="menuTable">
          <WaiterMenu
            menuData={menu}
            onProductQuantityChange={handleProductQuantityChange}
          />
        </div>
        <div className="userOrder">
          <UserOrder menu={menu} />
        </div>
      </div>
    </>

  );
}
