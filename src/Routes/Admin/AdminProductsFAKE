import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import MenuTableEdit from '../../components/MenuTableEdit';

function BtnEditModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>EDIT</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}>
        <h1>HELLO WORLD</h1>
        
        <button onClick={closeModal}>CLOSE</button>
      </Modal>
    </div>
  )
}

const AdminProducts = () => {
  return (
    <div>
      <MenuTableEdit BtnEditModal={BtnEditModal} />
    </div>
  );
}


export default AdminProducts;
