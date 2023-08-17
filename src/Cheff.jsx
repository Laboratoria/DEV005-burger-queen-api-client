import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";

const Cheff = () => (
  <section className="Cheff">
    <Header className="cheff-header" role="Cheff" />
    <Navigation tabs={['Orders in process', 'Orders Ready']} /> 
  </section>
);

export default Cheff;
