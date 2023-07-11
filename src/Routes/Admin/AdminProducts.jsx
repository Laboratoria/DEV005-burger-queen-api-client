import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { nanoid } from 'nanoid';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    name:'',
    price:'',
  })

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      id: nanoid(),
      name: addFormData.name,
      price: addFormData.price,
    }
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/products', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
        const products = response.data;
        setProducts(products);
      } catch (error) {
        console.error(error);
        setProducts([]);
      }
    };

    getData();
  }, []);

  return (
    <div className='adminContainer'>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add a product</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type='text'
          name='name'
          required='required'
          placeholder='Enter a product...'
          onChange={handleAddFormChange}
        />
        <input
          type='number'
          name='price'
          required='required'
          placeholder='Enter a price...'
          onChange={handleAddFormChange}
        />
        <button type='submit'>ADD</button>
      </form>
    </div>
  );
};

export default AdminProducts;
