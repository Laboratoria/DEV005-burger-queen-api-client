import React from 'react';
import { useState, useEffect } from 'react';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
import Products from '../../Components/productsForWaiters/products'
import './waiter.css';


export default function Menu() {

  const [breakfasts, setBreakfasts] = useState([]);
  const [lunches, setLunches] = useState([]);

  const token = localStorage.getItem('token');
  // console.log(token);


  useEffect(() => {
    async function fetchProducts() {
        const response = await fetch('http://localhost:8080/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            }
        })

        const products = await response.json();
        // console.log(products);
        setBreakfasts(products.filter(item => item.type === 'Desayuno'))
        setLunches(products.filter(item => item.type === 'Almuerzo'))
    }
    fetchProducts()
}, [])

  //nombre del cliente
  const [firstName, setFirstName] = useState('');
  const [fullName, setFullName] = useState('');
  function manageNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value);
  };


  const [mostrarProducts, setMostrarProducts] = useState(false);
  const handleClick = () => {
    setMostrarProducts(!mostrarProducts);
  };

  return (
    <>
      <section className='global-container-waiter'>
        <div className='fondo'>
        <Logout />
        <LogoBurger />
        </div>
        <div className='container-columns1 container'>

          <div className='column-menu'>
            <div className='group-client'>
              <input type="text" placeholder="Client's name"
                id="inpClient"
                name="client"
                value={firstName}
                onChange={manageNameChange} />
            </div>

            {/* contenedor de los pedidos en general*/}
            <div className='content-order'>

              <h2 className='sub-title'>Menu option</h2>
              <div className='content-buttons'>
                <button onClick={handleClick} className='btn-break active'>Breakfast</button>
                <button onClick={handleClick} className='btn-lunch'>Lunch/Dinner</button>
              </div>

              {mostrarProducts ? < Products products={lunches} /> : <Products products={breakfasts} />}

            </div>

          </div>


          <div className='column-ticket'>

            <div className='ticket-header'>
              <h2 className='ticket-subtitle'>Order List</h2>
              <p>Client:{fullName}</p>
            </div>

            <div className='ticket-body'>
              {/* Contenido de la lista de pedidos */}
            </div>

            <div className='ticket-footer'>
              <p>Item:<span>01</span></p>
              <p>Total:<span>$300</span></p>
            </div>

            <div className='ticket-btns'>
              <button className='ticket-enviar active'>Send</button>
              <button className='ticket-cancel'>Cancel</button>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}