import { useEffect, useState, useRef } from "react";
import Dropdown from "../DropDownList/DropDownList";

import Products from "../Products/Products";
import { createProduct, getproduct, deleteProduct, editProduct  } from "../../services/UseAxios";
import Navigation from "../navigation/navigation";
import Buttons from "../Buttons/Buttons";
import Swal from "sweetalert2";

import './productsManagement.css'

function ProductsManagement() {
  // CREAR PRODUCTOS-----------------------------------------------------------
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!nameProduct || !priceProduct) {
      Swal.fire({
        title: "Please fill in the required information",
        icon: "error",
        confirmButtonColor: "#D62828",
      });
      return;
    }
  
    try {
      if (isEditing) {
        // Si estamos en modo edición
        await editProduct(
          editedProduct.id,
          nameProduct,
          priceProduct,
          image,
          typeProduct
        );
  
        // Actualiza la lista de productos después de editar
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === editedProduct.id
              ? { ...product, name: nameProduct, price: priceProduct, image, type: typeProduct }
              : product
          )
        );
      } else {
        // Si no estamos en modo edición, crea un nuevo producto
        const response = await createProduct(
          nameProduct,
          priceProduct,
          image,
          typeProduct
        );
  
        // Agrega el nuevo producto a la lista existente
        setProducts([...products, response]);
      }
  
      Swal.fire({
        icon: "success",
        title: isEditing ? "Product updated successfully" : "Product created successfully",
        showConfirmButton: false,
        timer: 1500,
      });
  
      // Restaurar los valores de los campos después de agregar/editar el producto
      setNameProduct("");
      setPriceProduct("");
      setImage("");
      setTypeProduct("");
      setIsEditing(false); // Sal del modo de edición
    } catch (error) {
      Swal.fire({
        title: isEditing
          ? "Error updating product, please try again later"
          : "Error creating product, please try again later",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  

  //BARRA DE NAVEGACION ----------------------------------------------
  const [selectedTab, setSelectedTab] = useState("All");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  // MOSTRAR PRODUCTOS-----------------------------------------------

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getproduct();
        //console.log(response, "PRODUCTOS EN ADMIN");
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // ESTADO DE INPUT DE IMAGEN------------------------------
  const [image, setImage] = useState("");

  const handleImageChange = (event) => {
    console.log(event.target.value);
    setImage(event.target.value);
  };
  // ESTADO DE INPUT DE NOMBRE DE PRODUCTO---------------------------
  const [nameProduct, setNameProduct] = useState("");

  const handleNameProductChange = (event) => {
    console.log(event.target.value);
    setNameProduct(event.target.value);
  };
  // ESTADO DE INPUT DE PRECIO-----------------------------------------
  const [priceProduct, setPriceProduct] = useState("");

  const handlesetPriceProductChange = (event) => {
    console.log(event.target.value);
    setPriceProduct(event.target.value);
  };

  // ESTADO DE TIPO DE COMIDA------------------------------------------
  const [typeProduct, setTypeProduct] = useState("");
  function handleTypeProductChange(e) {
    console.log(e.target.value, "SELECTED TAB");
    setTypeProduct(e.target.value);
  }

  const items = [
    {
      id: 1,
      value: "Breakfast",
    },
    {
      id: 2,
      value: "Lunch",
    },
  ];

  // visibilidad de los botones----------------------------------------------------------
  const showButtons = {
    add: false,
    edit: true,
    delete: true,
  };

// eliminar productos ------------------------------------------------------------------
  const handleDeleteProduct = async (productId) => {
    try {
      // Llama a la función para eliminar el producto por su ID
      await deleteProduct(productId);
  
      // Actualiza la lista de productos después de eliminar
      setProducts(products.filter((product) => product.id !== productId));
  
      Swal.fire({
        icon: "success",
        title: "Product deleted successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        title: "Error deleting product, please try again later",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

//editar--------------------------------------------------------------------
const [isEditing, setIsEditing] = useState(false);
const [editedProduct, setEditedProduct] = useState(null);

const handleEditProduct = (productId) => {
  const productToEdit = products.find((product) => product.id === productId);
  setIsEditing(true);
  setEditedProduct(productToEdit);
  // También puedes establecer los valores de los campos de entrada aquí
  setNameProduct(productToEdit.name);
  setPriceProduct(productToEdit.price);
  setImage(productToEdit.image);
  setTypeProduct(productToEdit.type);

  // Desplazar la página a la sección de los inputs
  if (inputsSectionRef.current) {
    inputsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }
};

// Crear una referencia para la sección de los inputs
const inputsSectionRef = useRef(null);


  return (
    <>
      <section >
        <form action="" onSubmit={handleSubmit} >
        <div 
        ref={inputsSectionRef}
        className="div-admin-prodcts"
        >
          <input
            className="inputs-admin-products"
            type="text"
            name="nameProduct"
            placeholder="Name"
            value={nameProduct}
            onChange={handleNameProductChange}
          />
         
          <input
            className="inputs-admin-products"
            type="text"
            name="priceProduct"
            placeholder="Price"
            value={priceProduct}
            onChange={handlesetPriceProductChange}
          />

          <input 
          type="url" 
          name="url"   
          className="inputs-admin-products"  
          placeholder="Image"
          value={image}
          onChange={handleImageChange}
          />

          <Dropdown 
          items={items}
          handleOnChange={handleTypeProductChange}
          value={typeProduct}
           />
          <div className="centered-button">
          <Buttons tag={isEditing ? "Confirm changes" : "Create product"} type="submit" />
          </div>
        
        </div>

        </form>
      </section>
      <section>
        <Navigation
          tabs={["All", "Breakfast", "Lunch"]}
          activeTab={selectedTab}
          onSelectTab={handleTabChange} 
        />
        <div className="admin-products">
        <Products
          productType={selectedTab === "All" ? "" : selectedTab}
          products={products}
          showButtons={showButtons}
          handleDeleteProduct={ handleDeleteProduct}
          handleEditProduct={handleEditProduct}
        />
        </div>
        
      </section>
    </>
  );
}

export default ProductsManagement;
