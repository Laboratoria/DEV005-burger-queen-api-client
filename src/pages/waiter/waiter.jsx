import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
import Products from '../../Components/productsForWaiters/products';
import './waiter.css';
import api from '../../api_client/api';
import ProductList from '../../Components/productList/productList';
import Modal from '../../Components/modal/modalConfirmation';
import ModalCancel from '../../Components/modal/modalCancel';
import Icon from '../../assets/iconWaiter.png';
import './waiter.css'

//agrupar los productos por su ID y devolver un array de productos agrupados.
function groupProductsById(products) {
  const groupedProducts = Object.values(products.reduce((grouped, product) => {
    const { id } = product;

    if (grouped[id]) {
      grouped[id].qty += 1;
      // console.log(grouped[id])
    } else {
      grouped[id] = {
        qty: 1,
        product: {
          "id": product.id,
          "name": product.name,
          "price": product.price,
          "image": product.image,
          "type": product.type,
          "dateEntry": product.dateEntry
        }
      };
    }
    return grouped;
  }, {}));
  return groupedProducts;
}

export default function Menu() {
  const token = localStorage.getItem('token');
  const [breakfasts, setBreakfasts] = useState([])
  const [lunches, setLunches] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const result = await api().fetchProducts({ token });
      setBreakfasts(result.breakfasts);
      setLunches(result.lunches); 
    }
    fetchProducts();
  }, [])

  //nombre del cliente con evento onChange
  const [firstName, setFirstName] = useState('');
  const [fullName, setFullName] = useState('');
  function manageNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value);
  };

  //muestra desayuno o almuerzo
  const [mostrarProducts, setMostrarProducts] = useState("breakfast");
  const [isActive, setIsActive] = useState(true);
  const handleClick = (value) => {
    setMostrarProducts(value);
    //activa el color del botton 
    if (value === 'breakfast') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  //productos seleccionados que se muestran en OrderList
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleClickProduct = (product) => {
    // operador de propagación '...' crear una nueva lista de productos seleccionados.
    setSelectedProducts([...selectedProducts, product]);
  }

  // suma el precio total de productos
  const contarTotalProductos = (selectedProducts) => {
    let total = 0;
    selectedProducts.forEach((product) => {
      total += parseFloat(product.price);
    });
    return total;
  }

  // suma los Items
  const contarTotalItems = (selectedProducts) => {
    return selectedProducts.length
  }

  // Borrar producto de orderList (1x1)
  const handleClickRemover = (productIndex) => {
    setSelectedProducts(prevSelectedProducts =>
      prevSelectedProducts.filter((product, index) => index !== productIndex));
  }

  
  // enviar lista de pedidos a cocina segun la estructura
  const [orderSent, setOrderSent] = useState([]);
  // funcion que ejecuta al dar click btn enviar a cocina

  const sendOrderToKitchen = async () => {
    const orderDate = {
      "client": fullName,
      "userId": 1,
      "products": [],
      "status": "pending",
      "dataEntry": new Date(),
    }
    //guarda en OrderDate.products los productos agrupados por id
    orderDate.products.push(...groupProductsById(selectedProducts))
    await api().fetchSendOrder(orderDate, token);
    
    setOrderSent(orderDate);
    setFullName('');
    setFirstName('');
    setSelectedProducts([]);
    // Muestra el modal al enviar el pedido
    setShowModal(true);
  };


  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    // Oculta el modal al hacer clic en "OK"
    setShowModal(false);
  };

  //abre modal de cancel
  const [showModalCancel, setShowModalCancel] = useState(false);
  const handleClickCancelModal = () => {
    setShowModalCancel(true);
  }
  // Borrar datos en general (cancelar)
  const handleClickCancel = () => {
    setFullName('');
    setFirstName('');
    setSelectedProducts([]);
    setShowModalCancel(false);
  }
  //cierra modal de cancel
  const cancel = () => {
    setShowModalCancel(false);
  }

  //navega a la pages StatusOrder
  const navigate = useNavigate();
  const handleClickNavigate = () => {
    navigate('/statusOrder');
  };

  return (
    <>
      <section className='global-container-waiter'>
        <header>
          <div className='box-btn'>
            <Logout text='Waiter' icon={Icon} />
            <LogoBurger />
          </div>
        </header>

        <main>
          <div className='container-all container'>

            <div className='box-btn-view'>
              <button className='btn-viewOrder' onClick={handleClickNavigate}>View Order</button>
            </div>

            <div className='container-columns1'>

              <div className='column-menu'>

                <div className='group-client'>
                  <input type="text" placeholder="Client's name"
                    id="inpClient"
                    name="client"
                    value={firstName}
                    onChange={manageNameChange} />
                </div>

                <div className='content-order'>
                  <h2 className='sub-title'>Menu option</h2>
                  <div className='content-buttons'>
                    <button
                      id='break'
                      onClick={() => handleClick('breakfast')}
                      className={`btn-break ${isActive && 'active'}`}>Breakfast</button>
                    <button
                      id='lunch'
                      onClick={() => handleClick('lunch')}
                      className={`btn-lunch ${!isActive && 'active'}`}>Lunch/Dinner</button>
                  </div>
                  {mostrarProducts === "lunch" ? < Products products={lunches} handleClickProduct={handleClickProduct} /> : <Products products={breakfasts} handleClickProduct={handleClickProduct} />}
                </div>

              </div>

              <div className='column-ticket'>

                <div className='ticket-header'>
                  <h2 className='ticket-subtitle'>Order List</h2>
                  <p>Client:{fullName}</p>
                </div>

                <div className='ticket-body'>
                  <div className='subtitle-list'>
                    <p className='subtitle-product'>Item</p>
                    <p className='subtitle-product'>Product</p>
                    <p className='subtitle-product'>Price</p>
                  </div>
                  {/* Contenido de la lista de pedidos */}
                  <ProductList products={selectedProducts} handleClickRemover={handleClickRemover} >  </ProductList>
                </div>


                <div className='ticket-footer'>
                  <p>Item:<span> {contarTotalItems(selectedProducts)}</span></p>
                  <p>Total $:<span>{`${contarTotalProductos(selectedProducts)}`} </span> </p>
                </div>

                <div className='ticket-btns'>
                  <button data-testid='button-send' className='ticket-enviar active' disabled={!firstName || selectedProducts.length === 0} onClick={sendOrderToKitchen}>Send to kitchen</button>

                  {showModal && <Modal close={closeModal} />}

                  <button onClick={handleClickCancelModal} disabled={!firstName} className='ticket-cancel'>Cancel</button>
                  {showModalCancel && <ModalCancel cancel={cancel} handleClickCancel={handleClickCancel} />}
                </div>
              </div>

            </div>
          </div>
        </main>
      </section>
    </>
  );
}