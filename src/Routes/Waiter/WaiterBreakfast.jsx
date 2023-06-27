import "../../Style/breakfast.css";
import Header from "../../components/Header";
import UserOrder from "../../components/userOrder";
import WaiterMenu from "../../Utilities/Api";

export default function Breakfast() {
  return (
    <>
        <Header />
      <div className="mainContentWaiter">
        <div>
          <WaiterMenu />
          <div className="userOrder">
          <UserOrder />
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
