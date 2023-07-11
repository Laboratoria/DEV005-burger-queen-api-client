import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './loginForm';


describe('LoginForm', () => {
    test('placeholder fields should exist/Debería existir los campos de placeholder', () => {
        const user = {
            email: 'example@example.com',
            password: '*********',
        };

        const component = render(<LoginForm users={user} />);
        // console.log(component);

        expect(component.container).toBeInTheDocument()
    });
});