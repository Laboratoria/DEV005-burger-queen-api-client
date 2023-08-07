import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from './login';
import { act } from 'react-dom/test-utils';
import { useNavigate } from 'react-router-dom';


jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('Login', () => {
    test('debe mostrar un mensaje de error para los campos vacíos', async () => {
        render(<Login />);

        const loginButton = screen.getByTestId('button-login');
        fireEvent.click(loginButton);

        const errorMessage = screen.getByText('* These fields are required');
        expect(errorMessage).toBeInTheDocument();
    });
});


// Simula un error en la llamada a la API
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
  }));
  
  jest.mock('../../api_client/api', () => ({
    login: jest.fn().mockRejectedValue(new Error('API error')),
  }));
  
  describe('Login', () => {
    test('handleLogin muestra mensaje de error en caso de error en la API', async () => {
      render(<Login />);
  
      const emailInput = screen.getByTestId('email');
      const passwordInput = screen.getByTestId('password');
      const loginButton = screen.getByTestId('button-login');
  
      const email = 'test@example.com';
      const password = 'password';
  
      fireEvent.change(emailInput, { target: { value: email } });
      fireEvent.change(passwordInput, { target: { value: password } });
  
      await act(async () => {
        fireEvent.click(loginButton);
      });
  
      const errorMessage = screen.queryByText('Oops! That username and password combination is incorrect. Please try again');
    expect(errorMessage).toBeTruthy();
    
    });
  });
  


