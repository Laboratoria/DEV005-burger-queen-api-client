import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import MenuTableEdit from '../../components/MenuTableEdit';
import RenderTableBody from '../../components/RenderTableBody';
import ApiGetProducts from '../../components/ApiGetProducts';
import RenderBreakfast from '../../components/RenderBreakfastEdit';

Modal.setAppElement('#root');

function BtnBreakfastModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editFormData, seteditFormData] = useState({
    name: '',
    price: '',
  });

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

/*   const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAtribute('name');
    const fieldValue = event.target.value;
    
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleEditClick = (event, product) => {
    event.preventDefault();
    seteditFormData
  } */



  return (
    <div>
      <button onClick={openModal}>EDIT</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}>
        <table>
          <thead>
            <tr>
              <th>Desayuno</th>
            </tr>
          </thead>
          <RenderBreakfast />
          {/*      <ApiGetProducts
            renderTableBody={(products) => (
              <RenderTableBody products={products} type={"desayunoEdit"} />
            )}
          /> */}
        </table>
        <button onClick={closeModal}>CLOSE</button>
      </Modal>
    </div>
  )
}

function BtnLunchModal() {
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
        <form>
          <table>
            <thead>
              <tr>
                <th>Almuerzo</th>
              </tr>
            </thead>
            <ApiGetProducts
              renderTableBody={(products) => (
                <RenderTableBody products={products} type={"almuerzo"} />
              )}
            />
          </table>
        </form>
        <button onClick={closeModal}>CLOSE</button>
      </Modal>
    </div>
  )
}

const AdminProducts = () => {
  return (
    <div>
      <MenuTableEdit BtnBreakfastModal={BtnBreakfastModal} BtnLunchModal={BtnLunchModal} />
    </div>
  );
}


export default AdminProducts;
