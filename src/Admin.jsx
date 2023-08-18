import Products from "./components/Products/Products";
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";


Products
const Admin = () => (
  <section className="Admin">
    <Header className="admin-header" role="Admin" />
    <Navigation tabs={['Products', 'Employees']}/>

    <Products/>
    <p></p>
    </section>
  );

export default Admin;
