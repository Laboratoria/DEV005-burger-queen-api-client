import React from 'react';
import Api from './api.jsx';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';



describe('Api', () => {
    describe('Función login', () => {
        test('should log in with correct credentials', async () => {
            const email = 'waiter@bbq.com';
            const password = '123456';

            // Simular respuesta exitosa
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve({ token: 'token123' }),
                })
            );
            const response = await Api().login(email, password);
            expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            expect(response).toEqual({ token: 'token123' });
        });

        test('should throw an error with incorrect credentials', async () => {
            const mensageError = new Error('Oops! That username and password combination is incorrect. Please try again.');
            const email = 'waiter@bbq.com';
            const password = 'waiter123456';
            // Simular respuesta de error
            global.fetch = jest.fn(() =>
                Promise.reject({
                    mensageError
                })
            );
            await expect(Api().login(email, password)).rejects.toThrowError(mensageError);
        });
    });

    describe('Función fetchProducts', () => {
        test('should fetch products with a valid token//debe buscar productos con un token válido', async () => {
            const token = 'validtoken123';
            // Simular respuesta exitosa
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () =>
                        Promise.resolve([
                            { id: 1, name: 'Product 1', type: 'Desayuno' },
                            { id: 2, name: 'Product 2', type: 'Almuerzo' },
                        ]),
                })
            );
            const response = await Api().fetchProducts({ token });
            expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`,
                },
            });
            expect(response).toEqual({
                breakfasts: [{ id: 1, name: 'Product 1', type: 'Desayuno' }],
                lunches: [{ id: 2, name: 'Product 2', type: 'Almuerzo' }],
            });
        });

        test('should throw an error with an invalid token', async () => {
            const token = 'invalidtoken123';
            // Simular respuesta de error
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: false,
                })
            );
            await expect(Api().fetchProducts({ token })).rejects.toThrowError('ERROR: token invalido');
        });
    });


    //    // servidor de prueba para simular la respuesta de la API
    //     const server = setupServer(
    //         rest.post('http://localhost:8080/orders', (req, res, ctx) => {
    //             return res(ctx.json({ success: true }));
    //         })
    //     );

    //     beforeAll(() => server.listen());
    //     afterEach(() => server.resetHandlers());
    //     afterAll(() => server.close());

    //     describe('fetchSendOrder', () => {
    //         test('envía la orden correctamente y muestra un mensaje de éxito', async () => {
    //             const order = {
    //                 "client": 'Claudia',
    //                 "userId": 1,
    //                 "products": [],
    //                 "status": "pending",
    //                 "dataEntry": new Date(),
    //             };
    //             const token = '123456';

    //             render(<Api />);

    //             const sendButton = screen.getByText('Send to kitchen');
    //             fireEvent.click(sendButton);

    //             await waitFor(() => screen.getByText('La orden se envió correctamente'));
    //             // Ajusta este selector según el mensaje de éxito esperado

    //             expect(fetch).toHaveBeenCalledWith('http://localhost:8080/orders', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': `Bearer ${token}`
    //                 },
    //                 body: JSON.stringify(order)
    //             });
    // });
    // });


    describe('Función fetchShowUsers', () => {
        beforeEach(() => {
            
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () =>
                        Promise.resolve([
                            { id: 1, role: 'admin', name: 'Admin User' },
                            { id: 2, role: 'waiter', name: 'Waiter User' },
                            { id: 3, role: 'cheff', name: 'Cheff User' },
                        ]),
                })
            );
        });
        afterEach(() => {
            jest.clearAllMocks();
        });

        it('debe obtener los usuarios y filtrarlos por función', async () => {
            const token = 'token123';
            const expectedUsers = {
                admin: [{ id: 1, role: 'admin', name: 'Admin User' }],
                waiter: [{ id: 2, role: 'waiter', name: 'Waiter User' }],
                cheff: [{ id: 3, role: 'cheff', name: 'Cheff User' }],
            };
            const { result } = renderHook(() => fetchShowUsers({ token }));
            //WAITFOR: se utiliza para esperar a que se cumpla una condición antes de continuar con las comprobaciones en un test unitario.
            await waitFor(() => {
                expect(result.current).toEqual(expectedUsers);
            });
            expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            });
        });

        it('should throw an error when response is not "ok"', async () => {
            global.fetch.mockImplementationOnce(() =>
                Promise.resolve({
                    ok: false,
                })
            );
            const token = 'token789';
            const { result } = renderHook(() => fetchShowUsers({ token }));
            await waitFor(() => {
                expect(result.error).toEqual(Error('ERROR: token inválido'));
            });
            expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            });
        });

        it('should throw an error when an error occurs during the request', async () => {
            const expectedError = new Error('Network error');
            global.fetch.mockImplementationOnce(() => Promise.reject(expectedError));
            const token = 'token456';
            const { result } = renderHook(() => fetchShowUsers(token));
            await waitFor(() => {
                expect(result.error).toEqual(expectedError);
            });
            expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            });
        });
    });
});