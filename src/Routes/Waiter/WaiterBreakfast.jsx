import "../../Style/breakfast.css";
import Header from "../../components/Header";
import UserOrder from "../../components/userOrder";
import WaiterMenu from "../../Utilities/Api";
import { useState } from "react";

export default function Breakfast() {
  const [orderItems, setOrderItems] = useState([]);
  const [customerName, setCustomerName] = useState('');
  return (
    <>
        <Header />
      <div className="mainContentWaiter">
        <div>
        <WaiterMenu
            orderItems={orderItems}
            setOrderItems={setOrderItems}
            customerName={customerName}
            setCustomerName={setCustomerName}
          />
          <div className="userOrder">
          <UserOrder
              orderItems={orderItems}
              setOrderItems={setOrderItems}
              customerName={customerName}
              setCustomerName={setCustomerName}
            />
        </div>
        </div>
      </div>
    </>
  );
}

/*   const [menu, setMenu] = useState([]);
  const handleProductQuantityChange = (productId, quantity) => {
    const updatedMenu = menu.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity };
      }
      return product;
    });
    setMenu(updatedMenu);
<<<<<<< HEAD
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
=======
  }; */
