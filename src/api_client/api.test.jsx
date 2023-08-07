import React from 'react';
import Api from './api.jsx';

//fijando una fecha
const mockDate = new Date('12 Jul 2023')
//mokiamos la fecha
global.Date = jest.fn().mockImplementation(() => mockDate)

const token = 'validtoken123';

describe('Api', () => {
    //Login
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
            // const token = 'validtoken123';
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
                    'Authorization': `Bearer ${token}`,
                },
            });
            expect(response).toEqual({
                breakfasts: [{ id: 1, name: 'Product 1', type: 'Desayuno' }],
                lunches: [{ id: 2, name: 'Product 2', type: 'Almuerzo' }],
            });
        });

        test('should throw an error with an invalid token', async () => {
            // Simular respuesta de error
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: false,
                })
            );
            await expect(Api().fetchProducts({ token })).rejects.toThrowError('ERROR: token invalido');
        });
    });


    // Enviar lista de pedidos  a la Api
    describe('Función fetchSendOrder', () => {
        const orderDate = {
            client: 'John Doe',
            userId: 1,
            products: [],
            status: 'pending',
            dataEntry: new Date(),
        };

        beforeEach(() => {
            global.fetch = jest.fn(); // Mockear global.fetch antes de cada prueba
        })

        afterEach(() => {
            jest.restoreAllMocks(); // Restaurar todos los mocks después de cada prueba
        });

        test('enviar orden exitosamente', async () => {
            // Simular una respuesta exitosa de la API
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                })
            )
            const result = await Api().fetchSendOrder(orderDate, token);
            expect(fetch).toHaveBeenCalledWith('http://localhost:8080/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(orderDate),
            });
            expect(result).toEqual(orderDate); // Verificar que la función devuelva los datos de la orden
        });

        test('Deberia mostrar error cuando el token es invalido-fetchSendOrder', async () => {
            // Simular respuesta de error
            global.fetch = jest.fn(() =>
                Promise.reject(new Error())
            );
            // Envuelve la llamada en una función asíncrona
            const testFunction = async () => {
                await Api().fetchSendOrder(orderDate, token);
            };

            // Verifica que la función arroje un error
            await expect(testFunction()).rejects.toThrowError('Error de la solicitud HTTP');
        });
    })


    // trae lista de pedidos de la APi
    describe('Función fetchGetOrder', () => {
        test('Deberia mostrar la lista de pedidos', async () => {
            // Simula una respuesta exitosa
            const mockResponse = {
                ok: true,
                json: jest.fn().mockResolvedValue([
                    { name: 'Pollo', type: 'Desayuno' },
                    { name: 'Papas', type: 'Almuerzo' },
                    { name: 'Aros de cebolla', type: "Almuerzo" }
                ])
            };
            global.fetch = jest.fn().mockResolvedValue(mockResponse);

            //   Llama a la función y verifica los resultados
            const result = await Api().fetchGetOrder({ token });

            expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/orders', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });
        })

        test('Deberia mostrar error cuando el token es invalido -fetchGetOrder', async () => {
            // Simular respuesta de error
            global.fetch = jest.fn(() =>
                Promise.reject(new Error())
            );
            // Envuelve la llamada en una función asíncrona
            const testFunction = async () => {
                await Api().fetchGetOrder({ token })
            };
            // Verifica que la función arroje un error
            await expect(testFunction()).rejects.toThrow('Error de la solicitud HTTP');
        });

    })

    //Cambiando el estado de la orden 
    describe('Función changeStatus', () => {
        const order = { id: 1 };
        const status = 'delivery';
        test('Deberia modificar el estado de la orden', async () => {
            // Simula una respuesta exitosa
            const mockResponse = {
                ok: true,
                json: jest.fn().mockResolvedValue([{ id: 1, status: 'delivery' }])
            };
            global.fetch = jest.fn().mockResolvedValue(mockResponse);

            // Llama a la función y verifica los resultados
            const result = await Api().changeStatus(order, status, token);

            expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/orders/1', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    status: 'delivery',
                    dateProcessed: new Date(),
                })
            })
            expect(result).toEqual([{ id: 1, status: 'delivery' }]);
        })

        test('Deberia mostrar error ', async () => {
            // Simular respuesta de error
            global.fetch = jest.fn(() =>
                Promise.reject(new Error())
            );
            // Envuelve la llamada en una función asíncrona
            const testFunction = async () => {
                await Api().changeStatus(order, status, token);
            };
            // Verifica que la función arroje un error
            await expect(testFunction()).rejects.toThrow('Error de la solicitud HTTP');
        });

    })

    // traer usuarios
    describe('fetchShowUsers', () => {
        test('debería devolver los usuarios filtrados por rol si la respuesta es exitosa', async () => {
            // Simula una respuesta exitosa
            const mockResponse = {
                ok: true,
                json: jest.fn().mockResolvedValue([
                    { name: 'Usuario1', role: 'admin' },
                    { name: 'Usuario2', role: 'waiter' },
                    { name: 'Usuario3', role: 'cheff' }
                ])
            };
            global.fetch = jest.fn().mockResolvedValue(mockResponse);

            //   Llama a la función y verifica los resultados
            const result = await Api().fetchShowUsers({ token });

            expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });
            expect(mockResponse.json).toHaveBeenCalled();
            expect(result).toEqual({
                admin: [{ name: 'Usuario1', role: 'admin' }],
                waiter: [{ name: 'Usuario2', role: 'waiter' }],
                cheff: [{ name: 'Usuario3', role: 'cheff' }]
            });
        });

        test('Deberia mostrar error ', async () => {
            // Simular respuesta de error
            global.fetch = jest.fn(() =>
                Promise.reject(new Error())
            );
            // Envuelve la llamada en una función asíncrona
            const testFunction = async () => {
                await Api().fetchShowUsers({ token });
            };
            // Verifica que la función arroje un error
            await expect(testFunction()).rejects.toThrow('Error de la solicitud HTTP');
        });
    });



    //Crear productos
    describe('Función fetchCreateProduct ', () => {
        test('Debe crear un producto', async () => {
            const name = 'Papa Frita';
            const price = 500;
            const img = 'https://img.freepik.com/vector-gratis/papas-fritas-realistas-3d-caja-papel-rojo-condimento-mayochup-tazon_1441-2192.jpg?w=740&t=st=1689196713~exp=1689197313~hmac=a88d540b0944e540e0842b60530e4d888133590339af6c56be737eafe3f011a3';
            const type = 'Desayuno';
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                })
            )

            const result = await Api().fetchCreateProduct({ token, name, price, img, type });
            expect(fetch).toHaveBeenCalledWith(
                'http://localhost:8080/products',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        "name": name,
                        "price": price,
                        "image": img,
                        "dateEntry": new Date(),
                        "type": type
                    })
                })
        })
    })

    //Crear usuarios
    describe('Función fetchCreateStaff ', () => {
        test('Debe crear un usuario', async () => {
            const email = 'waiter@bbq.com';
            const password = '123456';
            const role = 'Waiter'
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                })
            )
            const result = await Api().fetchCreateStaff({ token, email, password, role });
            expect(fetch).toHaveBeenCalledWith(
                'http://localhost:8080/users',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        "email": email,
                        "password": password,
                        "role": role,
                    })
                })
        })
    })

    //editar producto
    describe('Función fetchEditProducts ', () => {
        const product = {
            id: 1,
            name: 'Papas Fritas',
            price: 500,
            image: 'https://img.freepik.com/vector-gratis/papas-fritas-realistas-3d-caja-papel-rojo-condimento-mayochup-tazon_1441-2192.jpg?w=740&t=st=1689196713~exp=1689197313~hmac=a88d540b0944e540e0842b60530e4d888133590339af6c56be737eafe3f011a3',
            type: 'Desayuno'
        };
        test('Debe Editar a un producto especifico', async () => {
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                })
            )
            const result = await Api().fetchEditProducts(token, product);
            expect(fetch).toHaveBeenCalledWith(
                `http://localhost:8080/products/${product.id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        "name": product.name,
                        "price": product.price,
                        "image": product.img,
                        "type": product.type
                    })
                }
            );
        });
    })

    //editar staff
    describe('Función fetchEditStaff', () => {
        const user = { id: 1, email: 'example@example.com', role: 'admin' };
        test('Debe Editar a un personal especifico', async () => {
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                })
            )
            const result = await Api().fetchEditStaff(token, user);
            expect(fetch).toHaveBeenCalledWith(
                `http://localhost:8080/users/${user.id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        "email": user.email,
                        "role": user.role,
                    })
                }
            );
        });
    })

    // Eliminar productos
    describe('Función fetchDeleteProduct', () => {
        const productId = { id: 1 };
        test('Debe eliminar el producto especificado', async () => {
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                })
            )
            const result = await Api().fetchDeleteProduct({ token, productId });
            expect(fetch).toHaveBeenCalledWith(
                `http://localhost:8080/products/${productId}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
        });
        test('Debe lanzar un error si la solicitud falla', async () => {
            // Simular respuesta de error
            global.fetch = jest.fn(() =>
                Promise.reject(new Error())
            );
            // Envuelve la llamada en una función asíncrona
            const testFunction = async () => {
                await Api().fetchDeleteProduct({ token, productId });
            };
            // Verifica que la función arroje un error
            await expect(testFunction).rejects.toThrow('Error de la solicitud HTTP');
        });
    })

    // Eliminar personal
    describe('Función fetchDeleteStaff', () => {
        const user = { id: 1 };
        test('Debe eliminar el usuario especificado', async () => {
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                })
            )
            const result = await Api().fetchDeleteStaff({ token, user });
            expect(fetch).toHaveBeenCalledWith(
                `http://localhost:8080/users/${user.id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
        });
        test('Debe lanzar un error si la solicitud falla-', async () => {
            // Simular respuesta de error
            global.fetch = jest.fn(() =>
                Promise.reject(new Error())
            );
            // Envuelve la llamada en una función asíncrona
            const testFunction = async () => {
                await Api().fetchDeleteStaff({ token, user });
            };
            // Verifica que la función arroje un error
            await expect(testFunction).rejects.toThrow('Error de la solicitud HTTP');
        });
    })

});