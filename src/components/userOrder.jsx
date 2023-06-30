import React, { useEffect } from 'react';
import axios from 'axios';

const UserOrder = ({
  orderItems,
  setOrderItems,
  customerName,
  setCustomerName
}) => {
  useEffect(() => {
    restoreOrderItems();
  }, [setOrderItems]);

  const restoreOrderItems = () => {
    const storedOrderItems = localStorage.getItem('orderItems');
    if (storedOrderItems) {
      try {
        const parsedOrderItems = JSON.parse(storedOrderItems);
        setOrderItems(parsedOrderItems);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
  };

  const addToOrder = (product, quantity) => {
    const updatedItems = orderItems.map((item) =>
      item.id === product.id ? { ...item, quantity } : item
    );
    setOrderItems(updatedItems);
    saveOrderItems(updatedItems);
  };

  const saveOrderItems = (items) => {
    localStorage.setItem('orderItems', JSON.stringify(items));
  };

  const generateOrder = async () => {
    if (!customerName) {
      console.error('Debe ingresar el nombre del cliente');
      return;
    }

    const orderData = createOrderData();

    try {
      const response = await sendOrderData(orderData);

      console.log(orderData);
      if (response.status === 201) {
        console.log('Pedido enviado exitosamente');
      } else {
        console.error('Error al enviar el pedido:', response.status);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }

    clearOrderItems();
    clearLocalStorage();
    setCustomerName('');
  };

  const createOrderData = () => {
    return {
      userId: 1,
      client: customerName,
      products: orderItems.map((item) => ({
        qty: item.quantity,
        product: {
          id: item.id,
          name: item.name,
          price: item.price,
          typeFood: item.typeFood,
          dateEntry: item.dateEntry
        }
      })),
      status: 'pending',
      dataEntry: new Date().toISOString()
    };
  };

  const sendOrderData = async (orderData) => {
    const token = localStorage.getItem('token');
    return await axios.post('http://localhost:8080/orders', orderData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    });
  };

  const clearOrderItems = () => {
    setOrderItems([]);
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('orderItems');
  };

  return (
    <div className="orderSection">
      <input
        type="text"
        id="customerName"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Cliente"
      />
      <ShowOrder orderItems={orderItems} />
      <button onClick={generateOrder}>Generar Pedido</button>
    </div>
  );
};

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



/* import React, { useEffect } from 'react';
import axios from 'axios';

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
const handleGenerateOrder = async () => {
  if (!customerName) {
    console.error("Debe ingresar el nombre del cliente");
    return;
  }

  const orderData = {
    userId: 1,
    client: customerName,
    products: orderItems.map((order) => ({
      qty: order.quantity,
      product: {
        id: order.id,
        name: order.name,
        price: order.price,
        typeFood: order.typeFood,
        dateEntry: order.dateEntry,
      },
    })),
    status: "pending",
    dataEntry: new Date().toISOString(),
  };

  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "http://localhost:8080/orders",
      orderData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    console.log(orderData);
    if (response.status === 201) {
      console.log("Pedido enviado exitosamente");
    } else {
      console.error("Error al enviar el pedido:", response.status);
    }
  } catch (error) {
    console.error("Error de red:", error);
  }

  setOrderItems([]);
  localStorage.removeItem("orderItems");
  setCustomerName("");
};


  return (
    <div className="orderSection">
    <input
      type="text"
      id="customerName"
      value={customerName}
      onChange={(e) => setCustomerName(e.target.value)}
      placeholder="Cliente"
    />
    <ShowOrder orderItems={orderItems} />
    <button onClick={handleGenerateOrder}>Generar Pedido</button>
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
 */