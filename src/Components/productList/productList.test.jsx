import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductList from './productList';

const mockHandleClickRemover = jest.fn();

const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
  ];

  test('should render product list with correct data and handle click on remove button', () => {
    const { getByText, queryAllByTestId } = render(
      <ProductList products={products} handleClickRemover={mockHandleClickRemover} />
    );
  
    // Verificar si los productos se muestran correctamente
    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('Product 2')).toBeInTheDocument();
    expect(getByText('Product 3')).toBeInTheDocument();
  
    // Simular clic en el botón de eliminación del primer producto
    const removeButtons = queryAllByTestId('delete-button');
    fireEvent.click(removeButtons[0]);
  
    // Verificar si la función handleClickRemover se invoca con el índice correcto
    expect(mockHandleClickRemover).toHaveBeenCalledTimes(1);
    expect(mockHandleClickRemover).toHaveBeenCalledWith(0);
  });
  