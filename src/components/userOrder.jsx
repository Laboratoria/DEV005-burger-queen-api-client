import React, { useState } from "react";
import CounterMenu from "./CounterMenu";
import Button from "./Button";

const UserOrder = ({ menu }) => {
const [selected, setSelected] = useState([]);

  const handleProductQuantityChange = (productId, quantity) => {
    const updatedProducts = selected.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity };
      }
      return product;
    });
    setSelected(updatedProducts);
  }; 

  return (
    <>
    {/*   <table>
        <tbody>
          <tr>
            <th>
              <input type="text" placeholder="Cliente" />
            </th>
          </tr>
          {selectedProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <p>{product.quantity}</p>
                <p>{product.name}</p>
              </td>
              <td>
              <CounterMenu
                  product={product}
                  onQuantityChange={handleProductQuantityChange}
                />
              </td>
              <td>Total $</td>
              <td>
                <Button className="btnUserOrder" text="Generar Pedido" />
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </>
  );
};

export default UserOrder;








/*  const UserOrder = () => {

  return (
    <>
 <table>
  <tbody>
    <tr>
      <th>
        <input type="text" placeholder="Cliente" />
      </th>
    </tr>
    <tr>
      <td>
        <p>Cantidad</p>
        <p>Producto</p>
        <p>Valor total</p>
      </td>
      <td>Total $</td>
      <td>
        <Button className="btnUserOrder" text="Generar Pedido" />
      </td>
    </tr>
  </tbody>
</table>

    </>
  );
};


export default UserOrder  */