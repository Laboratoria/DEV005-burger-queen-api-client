import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import renderTableBody from './RenderTableBody';
import ApiGetProducts from './ApiGetProducts';

const MenuTableEdit = ({ BtnEditModal }) => {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Desayuno</th>
            <BtnEditModal />
          </tr>
        </thead>
        {renderTableBody(breakfastProducts)}
      </table>

      <table>
        <thead>
          <tr>
            <th>Almuerzo</th>
            <BtnEditModal />
          </tr>
        </thead>
        {renderTableBody(lunchProducts)}
      </table>
    </div>
  );
};

export default MenuTableEdit;