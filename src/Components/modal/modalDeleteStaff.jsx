import React from 'react';
import close from '../../assets/close.png';
import './modalDeleteProduct.css'
import Api from '../../api_client/api'

const ModalDeleteStaff = ({ user, cancel, setUserWaiter, setUserCheff, setUserAdmin}) => {
 
    const token = localStorage.getItem('token');

    const deletetStaff = async () => {
        try {
            // console.log('Realizando solicitud de eliminación del personal');
            const response = await Api().fetchDeleteStaff({ user ,token});
            // console.log('usuario se elimino correctamente:', response);  
            // Actualizamos el estado de breakfasts después de eliminar el producto
            setUserWaiter(prevUserWaiter => prevUserWaiter.filter(item => item.id !== user.id));
            setUserCheff(prevUserCheff=> prevUserCheff.filter(item => item.id !== user.id));
            setUserAdmin(prevUserAdmin=> prevUserAdmin.filter(item => item.id !== user.id));
            cancel()
            
        } catch (error) {
            // console.log('Error en la solicitud de eliminación del producto:', error);
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
                    <p> Email:
                         {user.email}</p>
                    <p>Role:
                        {user.role}  </p>
                </div>
                <button onClick={deletetStaff} className="btn-modal btn-admin"> Continue </button>

            </div>

        </div>
    )
}

export default ModalDeleteStaff;