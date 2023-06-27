import React, { useEffect, useState } from 'react';

// Mostrar la orden del usuario
const UserOrder = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
    // Traer los productos
    const storedOrderItems = localStorage.getItem('orderItems');
    if (storedOrderItems) {
      try {
        const parsedOrderItems = JSON.parse(storedOrderItems);
        setOrderItems(parsedOrderItems);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
  }, []);
  
  // Generar la orden
  const handleGenerateOrder = () => {
    const orderData = {
      customerName,
      orderItems
    };
// enviar a la API

    setOrderItems([]);
    localStorage.removeItem('orderItems');
    setCustomerName('');
  };

  return (
    <div className="userOrder">
      <h2>Orden</h2>
      <ShowOrder orderItems={orderItems} />
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Nombre del cliente"
          />
      {orderItems.length === 0 ? (
        <p>No hay productos seleccionados.</p>
      ) : (
        <>
          
          <button onClick={handleGenerateOrder}>Generar Pedido</button>
        </>
      )}
    </div>
  );
};

// Muestrar los elementos de la orden
const ShowOrder = ({ orderItems }) => {
  return (
    <ul>
      {orderItems.map((item) => (
        <ItemEntry key={item.id} item={item} />
      ))}
    </ul>
  );
};

// Valor y cantidad de productos
const ItemEntry = ({ item }) => {
  return (
    <li>
      {item.name} ({item.quantity > 1 ? `x${item.quantity} ` : ''}${item.price * item.quantity})
    </li>
  );
};

export default UserOrder;
