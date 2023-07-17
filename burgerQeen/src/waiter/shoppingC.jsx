import Shopping from "./shopping";
import PropTypes from 'prop-types';
import Button from "../components/buttons";
import { useState, useEffect } from 'react';
const ShoppingC = ({selectedProducts, totalPrice, reduceProduct,sendOrder, clientValue}) => {
    const [btnActive, setBtnActive] = useState(false);
   useEffect(() => {
    setBtnActive(!!clientValue && clientValue.length > 0 && selectedProducts.length > 0);
    console.log('selectedProducts', selectedProducts)
    console.log('CLIENT VALUE',!!clientValue && clientValue.length > 0,);
  }, [clientValue, selectedProducts]);
return(
    <>
    {/* <img src="/src/assets/waiter.png" className="logoWaiter"/> */}
    <div className='container-order'>
      <div className='container-shopping-list'>
        <Shopping selectedProducts = {selectedProducts} totalPrice = {totalPrice} reduceProduct = {reduceProduct}/>
      </div>
      <div className='container-btn-order'>
        <Button className = "btn-cook"  onClick ={()=> sendOrder()} text="Enviar a cocina" disabled={!btnActive}/>
      </div>
      <div className="cubo"></div>
    </div>
  </>
  );
 }
  ShoppingC.propTypes = {
  selectedProducts: PropTypes.array,
  totalPrice: PropTypes.number,
  reduceProduct: PropTypes.func,
  sendOrder: PropTypes.func,
  clientValue: PropTypes.string
}
export default ShoppingC