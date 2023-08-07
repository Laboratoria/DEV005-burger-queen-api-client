import React from 'react';
import check from '../../assets/check.png';
import './modal.css'

const Modal = ({back}) => {
    return (
        <div className="modal">

            <div className="modal-content">     
                <figure>
                    <img src={check} className='check' alt="logoCheck" />
                </figure>
                <p className="modal-text">Order delivered</p>
                <button onClick={back} className="btn-modal"> OK </button>

            </div>

        </div>
    )
}

export default Modal;