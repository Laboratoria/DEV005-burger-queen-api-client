import { useEffect, useState } from "react";
import Dropdown from "../DropDownList/DropDownList";

import Products from "../Products/Products";
import { getproduct } from "../../services/UseAxios";
import Navigation from "../navigation/navigation";



function ProductsManagement() {


    const [selectedTab, setSelectedTab] = useState('Desayuno');

    const handleTabChange = (tab) => {
      setSelectedTab(tab);
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await getproduct();
          console.log(response, 'si yo fuera tu');    
          setProducts(response);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }; 
      fetchProducts();
    }, []);



    const [kindOfFood, setKindOfFood] = useState([])
    function handleOnChange(e) {
        console.log(e.target.value, "lililili");
        setKindOfFood(e.target.value);
      }
    
      const items = [
        {
          id: 1,
          value: "Desayuno",
        },
        {
          id: 2,
          value: "Almuerzo",
        },
       
      ];


  return (
    <>
      <section>
        <form action="">
         
          <Dropdown items={items} handleOnChange={handleOnChange} kindOfFood={kindOfFood}/>
          <input type="text" placeholder="$ Price" />
        </form>
      </section>
      <section>

      <Navigation
          tabs={["All", "Desayuno", "Almuerzo" ]}
          activeTab={selectedTab}
          onSelectTab={handleTabChange}
        />
        <Products productType={selectedTab}
          products={products}
        />
      </section>
    </>
  );
}

export default ProductsManagement;
