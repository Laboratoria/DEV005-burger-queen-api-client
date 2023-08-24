import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";

const Chef = () => (
  <section className="Chef">
    <Header className="chef-header" role="Chef" />
    <Navigation tabs={['Orders in process', 'Orders Ready']} /> 
  </section>
);

export default Chef;
