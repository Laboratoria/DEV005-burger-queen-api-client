import React from "react";

function DeliveredOrders({ deliveredOrders }) {
  if (!deliveredOrders) {
    console.log("deliveredOrders es nulo o indefinido");
    return <p>Cargando...</p>;
  }

  const handleOrderClick = (order) => {
    // Aquí puedes mostrar los detalles del pedido en un alert
    // o hacer cualquier otra acción que desees
    alert(`Detalles del Pedido #${order.id}\n\n${formatOrderDetails(order)}`);
  };
  const formatOrderDetails = (order) => {
    // Esta función toma el objeto de la orden y lo formatea como una cadena de texto
    // con los detalles que deseas mostrar
    const productDetails = order.products.map((product, productIndex) => {
      return `${product.qty}  ${product.product.name}\n`;
    }).join("\n");
    return `
Cliente: ${order.client}
Productos:
${productDetails}`;
  };

  return (
    <div className="Total-delivering-container">
      {deliveredOrders.map((order) => {
        if (!order || !order.id) {
          console.log("order es nulo o no tiene propiedad 'id'", order);
          return null;
        }

        return (
          <button
            key={order.id}
            className="delivering-container"
            onClick={() => handleOrderClick(order)}
          >
            #{order.id}
          </button>
        );
      })}
    </div>
  );
}

export default DeliveredOrders;
