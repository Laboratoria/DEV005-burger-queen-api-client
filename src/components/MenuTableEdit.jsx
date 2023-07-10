import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import RenderTableBody from './RenderTableBody';
import ApiGetProducts from './ApiGetProducts';

const MenuTableEdit = ({ BtnBreakfastModal, BtnLunchModal }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Desayuno</th>
            <th><BtnBreakfastModal /></th>
          </tr>
        </thead>
        <ApiGetProducts
          renderTableBody={(products) => (
            <RenderTableBody products={products} type={"desayuno"} />
          )}
        />
      </table>

      <table>
        <thead>
          <tr>
            <th>Almuerzo</th>
            <th><BtnLunchModal /></th>
          </tr>
        </thead>
        <ApiGetProducts
          renderTableBody={(products) => (
            <RenderTableBody products={products} type={"almuerzo"} />
          )}
        />
      </table>
    </div>
  );
};

export default MenuTableEdit;