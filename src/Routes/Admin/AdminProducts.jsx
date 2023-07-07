import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuTable = () => {
  const [breakfastProducts, setBreakfastProducts] = useState([]);
  const [lunchProducts, setLunchProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8080/products", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        });
        const products = response.data;
        const breakfastItems = products.filter(
          (product) => product.type === 'Desayuno'
        );
        const lunchItems = products.filter(
          (product) => product.type === 'Almuerzo'
        );
        setBreakfastProducts(breakfastItems);
        setLunchProducts(lunchItems);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  const renderTableBody = (products) => {
    return (
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>${product.price}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Desayuno</th>
          </tr>
        </thead>
        {renderTableBody(breakfastProducts)}
      </table>

      <table>
        <thead>
          <tr>
            <th>Almuerzo</th>
          </tr>
        </thead>
        {renderTableBody(lunchProducts)}
      </table>
    </div>
  );
};

export default MenuTable;
