import './chef.css'
import OrTicket from './tickets';
import { useState, useEffect} from 'react';

const Chef = () => {
  const [orders, setOrders] = useState([]);
  //crear const con dataExit en memoria
  // const [dataExit, setDataExit] = useState(null);
  const token = localStorage.getItem('accessToken');
  //variable que se crea al presionar el boton de chef cuando el pedido está listo
  useEffect(() =>{ 
    function getOrders() {
      fetch('http://localhost:8080/orders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`,
        }
      })
      .then((resp) => resp.json())
      .then((dataOrders) => {
        console.log(dataOrders);
        setOrders(dataOrders);
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        
      });
    }
    // se ejecuta getOrders una vez para que la primera llamada sea inmediata y no esperar 5 segundos
    getOrders();
    
    // crear un intervalo, donde va la función que trae la petición fetch y luego el tiempo en milisegundos(5 segundos)
    const intervalId = setInterval(getOrders, 10000)
    //este retorno es opcional del useEffect, evita que se ejecute cuando estoy en otra pantalla o que se pueda duplicar
    return () => {
      clearInterval(intervalId)
    };
  }, [token])

  const changeStatus = (order) => {
      //Cambiando el estado de la orden de pending a delivery
    console.log(order.id)
          //agreggamos constante newDataExit y le asignamos la hora actual
    const dataEntry = order.dataEntry;
    const newDataExit = new Date(Date.now()).toLocaleTimeString();
    const entryTime = new Date(`01/01/2000 ${dataEntry}`);
    const exitTime = new Date(`01/01/2000 ${newDataExit}`);
    const minutesDiference = (exitTime - entryTime) / 60000;
    console.log('Esta es la hora de entrada del pedido', dataEntry);
    console.log('Esta es la hora de salida del pedido', newDataExit);
    console.log('Estos son los minutos que tardó en preparar', minutesDiference);

    const dataOrder = {
      status: 'delivery',
      dataExit: minutesDiference,
    };
    fetch(`http://localhost:8080/orders/${order.id}`, {

      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,  
      },
      body: JSON.stringify(dataOrder)
    })
    .then((resp) => resp.json())
    .then((updatedOrder) => {
    //actualizamos los estados
      updateOrderStatus(updatedOrder.id, updatedOrder.status, minutesDiference);
    })
    .catch(error => console.log(error))
  }

  // Actualizando la lista de pedidos luego del cambio de estado  
  const updateOrderStatus = (orderId, newStatus, minutesDiference) => {
    setOrders(prevOrders => {
      return prevOrders.map(order => {
        if (order.id === orderId) {
          return { ...order, status: newStatus, dataExit: minutesDiference};
        }
        return order;
      });
    });
  };

  return(
  <> 
  <div className='body'>
    <section className='title-chef-orders'>
      <h1 className='title-orders'>Ordenes</h1>
      </section>
    <section className='container-cooking'>
        <div className='container-order-ticket'>
        {orders
        .filter(order => order.status === 'pending')
        .map(order => (<OrTicket key={order.id} order={order} changeStatus={changeStatus} showButton= {true}/>))}
        </div>
        <div className='container-delivery'>
        {orders
        .filter(order => order.status === 'delivery')
        .map(order => (<OrTicket key={order.id} order={order} showButton= {false}/>))}
        </div>
        <div>
     
    </div>
    
   </section> 
   <img src="/src/assets/chef.png" className='chef'/>
   </div>
  </>
  );
};

export default Chef
