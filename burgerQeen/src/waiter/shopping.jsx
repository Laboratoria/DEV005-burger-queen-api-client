import PropTypes from 'prop-types';
import Button from '../components/buttons';
import "./menu.css"

const Shopping = ({selectedProducts, totalPrice, reduceProduct}) => {
return(
    <table>
          <thead className='orde-final'>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cant</th>
              <td>Total</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {selectedProducts.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.quantity * item.price}</td>
                <td>{<Button onClick={() => reduceProduct(item)} text="x"/>}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
        <tr>
          <td colSpan={3} align="center">Total a pagar</td>
          <td>${totalPrice}</td>
        </tr>
      </tfoot>
        </table>
      );
    };

    Shopping.propTypes = {
        selectedProducts: PropTypes.array,
        totalPrice: PropTypes.number,
        reduceProduct: PropTypes.func
      }
      export default Shopping