import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";

const Admin = () => (
  <section className="Admin">
    <Header className="admin-header" role="Admin" />
    <Navigation tabs={['Products', 'Employees']}/>
  </section>
);

export default Admin;
