import React, { useEffect, useState } from 'react';

const UserOrder = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
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

  const addToOrder = (product, quantity) => {
    const existingItem = orderItems.find(item => item.id === product.id);
    if (existingItem) {
      const updatedItems = orderItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
      setOrderItems(updatedItems);
      localStorage.setItem('orderItems', JSON.stringify(updatedItems));
    } else {
      const newItem = { ...product, quantity };
      setOrderItems(prevItems => [...prevItems, newItem]);
      localStorage.setItem('orderItems', JSON.stringify([...orderItems, newItem]));
    }
  };

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
  const removeFromOrder = (itemToRemove) => {
    const updatedItems = orderItems.filter(item => item.id !== itemToRemove.id);
    setOrderItems(updatedItems);
    localStorage.setItem('orderItems', JSON.stringify(updatedItems));
  };

  return (
    <div className="userOrder">
      <h2>Orden</h2>
      {orderItems.length === 0 ? (
        <p>No hay productos seleccionados.</p>
      ) : (
        <>
                <ShowOrder orderItems={orderItems} removeFromOrder={removeFromOrder} />
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Nombre del cliente"
          />
          <button onClick={handleGenerateOrder}>Generar Pedido</button>
        </>
      )}
    </div>
  );
};

const ShowOrder = ({ orderItems }) => {
  return (
    <ul>
      {orderItems.map((item) => (
        <ItemEntry key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ItemEntry = ({ item, removeFromOrder }) => {
  return (
    <li>
      {item.name} ({item.quantity > 1 && `x${item.quantity} `}${item.price * item.quantity})
      {item.quantity > 1 && (
        <button onClick={() => removeFromOrder(item)}>Eliminar</button>
      )}
    </li>
  );
};


export default UserOrder;


/* import React, { useEffect, useState } from 'react';

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
      {orderItems.length === 0 ? (
        <p>No hay productos seleccionados.</p>
      ) : (
        <>
          <ShowOrder orderItems={orderItems} />
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Nombre del cliente"
          />
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
 */