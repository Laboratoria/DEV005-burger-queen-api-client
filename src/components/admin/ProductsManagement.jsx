import { useEffect, useState } from "react";
import Dropdown from "../DropDownList/DropDownList";

import Products from "../Products/Products";
import { createProduct, getproduct } from "../../services/UseAxios";
import Navigation from "../navigation/navigation";
import Buttons from "../Buttons/Buttons";
import Swal from 'sweetalert2';

function ProductsManagement() {
// CREAR PRODUCTOS
  const handleSubmit = async (event) => {
      event.preventDefault();
 
      if (!nameProduct || !priceProduct) {
        Swal.fire({
          title: 'Please fill in the required information',
          icon: 'error',
          confirmButtonColor: '#D62828',
        });
        return;
      } 

      try {
        const response = await createProduct(nameProduct, priceProduct, image, typeProduct);
        console.log(response, 'tu te me quitas')
        nameProduct("");
        priceProduct("");
        image("");
        typeProduct("");
        return response
       
      } catch (error) {
        Swal.fire({
          title: 'Error registering product, please try again later',
          icon: 'error',
          confirmButtonColor: '#D62828',
        });
      }
       
      
    } 

















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

// ESTADO DE INPUT DE IMAGEN
const [image, setImage] = useState("");

    const handleImageChange = (event) => {
      console.log(event.target.value);
      setImage(event.target.value);
    };
// ESTADO DE INPUT DE NOMBRE DE PRODUCTO
const [nameProduct, setNameProduct] = useState("");

    const handleNameProductChange = (event) => {
      console.log(event.target.value);
      setNameProduct(event.target.value);
    };
// ESTADO DE INPUT DE PRECIO
const [priceProduct, setPriceProduct] = useState("");

    const handlesetPriceProductChange = (event) => {
      console.log(event.target.value);
      setPriceProduct(event.target.value);
    };

// ESTADO DE TIPO DE COMIDA
    const [typeProduct, setTypeProduct] = useState('')
    function handleTypeProductChange(e) {
        console.log(e.target.value, "lililili");
        setTypeProduct(e.target.value);
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
        <form action="" onSubmit={handleSubmit}>
        <input 
        className="inputs-login"
        type="text" 
        name="nameProduct" 
        id="" 
        placeholder=" Product Name" 
        value={nameProduct}
        onChange={handleNameProductChange}/>
        <input 
        
        type="file" 
        name="image" 
        id="" 
        onChange={handleImageChange}
        
        />
        <input
        onChange={handlesetPriceProductChange} className="inputs-login" type="number"
        name="priceProduct" 
        placeholder=" $ Product Price" 
        value={priceProduct} />
         
          <Dropdown items={items} handleOnChange={handleTypeProductChange}/>
          
          <Buttons
          tag="Upload" 
          type="submit"/>

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
