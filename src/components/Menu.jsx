import CounterMenu from "./CounterMenu";

const Menu = () => {
  const products = {
    id: 1214,
    name: "Sandwich de jamón y queso",
    price: 1000,
    type: "Desayuno",
  };

  return (
    <table>
      <tr>
        <th>{products.type}</th>
        <th>Valor</th>
        <th>Cantidad</th>
      </tr>
      <tr>
        <td>{products.name}</td>
        <td>${products.price}</td>
        <CounterMenu />
      </tr>
    </table>
  );
};
export default Menu;


{/* <table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
 */}
{
  /*  <tr>{products.type}</tr>
        <td>{products.name}</td>
        <td> ${products.price}</td>
        <td> <CounterMenu/> </td> */
}
