import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiGetProducts = ({ renderTableBody }) => {
    const [products, setProducts] = useState([]);

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
                console.log(products)
                setProducts(products);
                /* const breakfastItems = products.filter(
                    (product) => product.type === 'Desayuno'
                );
                const lunchItems = products.filter(
                    (product) => product.type === 'Almuerzo'
                );
                setBreakfastProducts(breakfastItems);
                setLunchProducts(lunchItems); */
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, []);

/*     const breakfastProducts = products.filter(
        (product) => product.type === 'Desayuno'
      );
    
      const lunchProducts = products.filter(
        (product) => product.type === 'Almuerzo'
      ); */

      return renderTableBody(products);
}

export default ApiGetProducts;