import React from 'react';
import close from '../../assets/close.png';
import './modalDeleteProduct.css'
import Api from '../../api_client/api'

const ModalDeleteProduct = ({ product, cancel, setBreakfasts, setLunches}) => {

    const token = localStorage.getItem('token');

    const deletetProduct = async () => {
        try {
            // console.log('Realizando solicitud de eliminación del producto');
            const response = await Api().fetchDeleteProduct({
            productId: product.id,
            token
        });
            // console.log('producto se elimino correctamente:', response);  
            // Actualizamos el estado de breakfasts después de eliminar el producto
            setBreakfasts(prevBreakfasts => prevBreakfasts.filter(item => item.id !== product.id));
            setLunches(prevLunches=> prevLunches.filter(item => item.id !== product.id));
            cancel()
        } catch (error) {
            console.log('Error en la solicitud de eliminación del producto:', error);
            throw error;
        }
    }
    

   

    return (
        <div className="modal">

            <div className="modal-content modal-admin">

                <figure className='box-close' onClick={cancel} >
                    <img src={close} className='close' alt="close" />
                </figure>
                {/* agregar todo los datos del producto a eliminar */}

                <div className="modal-text-delete modal-text-admin">
                    <br />
                    <h2>Do you want to eliminate ?</h2>
                    <p> Product: {product.name}</p>
                    <p>Type: {product.type}</p>
                    <p>Price: ${product.price}</p>
                </div>
                <button onClick={deletetProduct} className="btn-modal btn-admin"> Continue </button>

            </div>

        </div>
    )
}

export default ModalDeleteProduct;