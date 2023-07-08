import React, { useState, useEffect } from 'react';

const ApiGetProducts = () => {
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
}

export default ApiGetProducts;