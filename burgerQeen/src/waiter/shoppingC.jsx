import Shopping from "./shopping";
import PropTypes from 'prop-types';
import Button from "../components/buttons";
import { useState, useEffect } from 'react';

const ShoppingC = ({ selectedProducts, totalPrice, reduceProduct, sendOrder, clientValue }) => {
  const [btnActive, setBtnActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    setBtnActive(!!clientValue && clientValue.length > 0 && selectedProducts.length > 0);
  }, [clientValue, selectedProducts]);

  const handleSendOrder = () => {
    sendOrder();
    setIsModalOpen(true);
    setModalMessage("La orden fue enviada exitosamente");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='container-order'>
        <div className='container-shopping-list'>
          <Shopping selectedProducts={selectedProducts} totalPrice={totalPrice} reduceProduct={reduceProduct} />
        </div>
        <div className='container-btn-order'>
          <Button className="btn-cook" onClick={handleSendOrder} text="Enviar a cocina" disabled={!btnActive} />
        </div>
        <div className="cubo"></div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{modalMessage}</h3>
            <button className="btn-cerrar" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
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

export default ShoppingC;
