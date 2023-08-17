import Dropdown from "./components/DropDownList/DropDownList";
import Header from "./components/header/header";

const Waiter = () => (
  <section className="Waiter">
    <Header role="Waiter" />
    <h3>Hello Waiter</h3>
        <div className="container">
          <input type="text" 
          placeholder="Client Name"
          className="inputs-login client-name"/>
      <Dropdown 
      title="Table" 
      items={items}
      multiSelect />
    </div>
  </section>
);

export default Waiter;















































const items = [
  {
    id: 1,
    value: 'Table 1',
  },
  {
    id: 2,
    value: 'Table 2',
  },
  {
    id: 3,
    value: 'Table 3',
  },
];