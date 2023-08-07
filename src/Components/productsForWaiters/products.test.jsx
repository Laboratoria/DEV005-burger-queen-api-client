import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Products from './products';

const mockHandleClickProduct = jest.fn();

const productsCard = [
    { id: 1, name: 'ProductCard 1', price: 10 },
    { id: 2, name: 'ProductCard 2', price: 20 },
    { id: 3, name: 'ProductCard 3', price: 30 },
  ];

  test('debería agregar los productos a otro componente cuando se hace clic en el botón de agregar', () => {
    const { getByText, getAllByTestId } = render(
      <Products products={productsCard} handleClickProduct={mockHandleClickProduct} />
    );
  
    expect(getByText('ProductCard 1')).toBeInTheDocument();
    expect(getByText('ProductCard 2')).toBeInTheDocument();
    expect(getByText('ProductCard 3')).toBeInTheDocument();
  
    const addButtons = getAllByTestId('add-button');
    fireEvent.click(addButtons[0]);
  
    // Espera a que se resuelva la actualización del estado
    
      expect(mockHandleClickProduct).toHaveBeenCalledTimes(1);
      expect(mockHandleClickProduct).toHaveBeenCalledWith(productsCard[0]);
    
  });
  
  