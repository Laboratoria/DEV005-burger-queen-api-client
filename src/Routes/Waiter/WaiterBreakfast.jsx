import "../../Style/breakfast.css";
//import Button from "../../components/Button";
import TopBar from "../../components/topBar";
import Header from "../../components/Header";
// import CounterMenu  from "../../components/CounterMenu";
import Menu from "../../components/Menu";
import UserOrder  from "../../components/userOrder";
import Api  from "../../Utilities/Api";

export default function Breakfast() {
  console.log(Api())
  return (
    <>
      <><Header prop="Marta" /><TopBar /><div className="menuTable">
      <Menu />
    </div><div className="userOrder">
        <UserOrder />
      </div></>
    </>

  );
}
