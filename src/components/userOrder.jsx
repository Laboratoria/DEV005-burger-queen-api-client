import Button from "./Button";

 const UserOrder = () => {

  return (
    <>
    <table>
    <tr>
    <th>
      <input type="text" placeholder="Cliente" />
      </th>
  </tr>
       <tr>
      <td>
      <p>Cantidad </p>
      <p>Producto</p>
      <p>Valor total</p>
      </td>
      <td>Total $</td>
      <td>
      <Button className="btnUserOrder" text='Generar Pedido'></Button>
      </td>
      </tr>
    </table>
    
    </>
  );
};

{/* <table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table> */}

export default UserOrder