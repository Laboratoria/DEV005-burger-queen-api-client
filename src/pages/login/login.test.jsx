import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Login from './login';
import api from '../../api_client/api';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('Login', () => {
    test('debería navegar a la página correcta al iniciar sesión correctamente', async () => {
        const email = 'example@example.com';
        const password = 'password';

        const loginSpy = jest.fn().mockResolvedValueOnce({
            user: {
                role: 'admin',
            },
            accessToken: 'accessToken',
        });

        api().login = loginSpy;

        render(<Login />);

        const emailInput = screen.getByTestId('email');
        const passwordInput = screen.getByTestId('password');

        fireEvent.change(emailInput, { target: { value: email } });
        fireEvent.change(passwordInput, { target: { value: password } });

        const loginButton = screen.getByText('Login');
        fireEvent.click(loginButton);

        await act(async () => {
            await Promise.resolve();
        });
        expect(navigate).toHaveBeenCalledWith('/admin');
        const setItemSpy = jest.spyOn(localStorage, 'setItem');
        expect(setItemSpy).toHaveBeenCalledWith('token', 'accessToken');

        setItemSpy.mockRestore();
    });


    test('debe mostrar un mensaje de error para los campos vacíos', async () => {
        render(<Login />);

        const loginButton = screen.getByTestId('button-login');
        fireEvent.click(loginButton);

        const errorMessage = screen.getByText('* These fields are required');
        expect(errorMessage).toBeInTheDocument();
    });
});

