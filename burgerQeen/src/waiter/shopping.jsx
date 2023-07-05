import PropTypes from "prop-types";

const Shopping = ({ selectedProducts, totalPrice, reduceProduct }) => {
  console.log("Holaaaa");
  return (
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cant</th>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        {selectedProducts.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>${item.quantity * item.price}</td>
            <td className="tacho-guia">
              <img src="/src/assets/tacho.png" className="tacho" onClick={() => reduceProduct(item)} />
              </td>                         
          </tr>
        ))}
      </tbody>
      <tfoot className="Total">
          <td colSpan={3} align="center">
            Total a pagar
          </td>
          <td>${totalPrice}</td>
      </tfoot>
    </table>
  );
};
Shopping.propTypes = {
  selectedProducts: PropTypes.array,
  totalPrice: PropTypes.number,
  reduceProduct: PropTypes.func,
};
export default Shopping;
