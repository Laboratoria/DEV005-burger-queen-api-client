import React from 'react';
import check from '../../assets/check.png';
import './modal.css'

const Modal = ({close}) => {
    return (
        <div className="modal">

            <div className="modal-content">     
                <figure>
                    <img src={check} className='check' alt="logoCheck" />
                </figure>
                <p className="modal-text">Order sent to kitchen</p>
                <button onClick={close} className="btn-modal"> OK </button>

            </div>

        </div>
    )
}

export default Modal;