import React, { useEffect, useState } from 'react';

// Mostrar la orden del usuario
const UserOrder = ({ orderItems, setOrderItems, customerName, setCustomerName }) => {
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
  }, [setOrderItems]);

  const addToOrder = (product, quantity) => {
    const item = { ...product, quantity };
    const updatedItems = orderItems.map((orderItem) => {
      if (orderItem.id === item.id) {
        return { ...orderItem, quantity };
      }
      return orderItem;
    });
    setOrderItems(updatedItems);
    localStorage.setItem('orderItems', JSON.stringify(updatedItems));
  };

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
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Nombre del cliente"
      />
      <ShowOrder orderItems={orderItems} />
      {orderItems.length === 0 ? (
        <p></p>
      ) : (
        <button onClick={handleGenerateOrder}>Generar Pedido</button>
      )}
    </div>
  );
};

// Muestrar los elementos de la orden
const ShowOrder = ({ orderItems }) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    orderItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Cantidad</th>
          <th>Producto</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {orderItems.map((item) => (
          <ItemEntry key={item.id} item={item} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2">Total:</td>
          <td>${calculateTotalPrice()}</td>
        </tr>
      </tfoot>
    </table>
  );
};


// Valor y cantidad de productos
const ItemEntry = ({ item }) => {
  return (
    <tr>
      <td>{item.quantity}</td>
      <td>{item.name}</td>
      <td>${item.price * item.quantity}</td>
    </tr>
  );
};
export default UserOrder;



/* import React, { useEffect, useState } from 'react';

// Mostrar la orden del usuario
const UserOrder = ({ orderItems, setOrderItems, customerName, setCustomerName }) => {
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
  }, [setOrderItems]);
  
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
  
      
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Nombre del cliente"
          />
          <ShowOrder orderItems={orderItems} />
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
 */