import React from 'react';
import close from '../../assets/close.png';
import './modal.css'

const ModalCancel = ({ handleClickCancel, cancel }) => {
    return (
        <div className="modal">

            <div className="modal-content">
                
                <figure className= 'box-close'onClick={cancel} >
                    <img src={close} className='close' alt="close" />
                </figure>

                <p className="modal-text">Do you wish to delete the entire order?</p>
                <button onClick={handleClickCancel} className="btn-modal"> Continue </button>

            </div>

        </div>
    )
}

export default ModalCancel;