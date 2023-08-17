import Dropdown from "./components/DropDownList/DropDownList";
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import Products from '../src/components/Products/Products'

const Waiter = () => (
  <div> 
    <Header role="Waiter" />
    <Navigation tabs={['Menu', 'Orders']} /> 
     <article className="Waiter">
   
    <section className="container-info">
      <input
        type="text"
        placeholder="Client Name"
        className="inputs-login client-name"
      />
      <Dropdown title="Table" items={items} multiSelect />
    </section>
    <section className="container-products">
      <Products />

    </section>
    <section className="container-count">

    </section>
  </article>
  </div>
);

export default Waiter;

const items = [
  {
    id: 1,
    value: "Table 1",
  },
  {
    id: 2,
    value: "Table 2",
  },
  {
    id: 3,
    value: "Table 3",
  },
];
