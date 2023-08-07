import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Button } from "../src/components/Button";

describe('Button', () => {
    test('should call onClick when button is clicked', () => {
        // Mock the onClick function
        const onClickMock = jest.fn();
    
        // Render the component
        const { getByText } = render(
          <Button onClick={onClickMock} text="Ingresar" />
        );
    
        // Find the button element and simulate a click event
        const button = getByText('Ingresar');
        fireEvent.click(button);
    
        // Assert that onClick has been called
        expect(onClickMock).toHaveBeenCalledTimes(1);
      });
})
 /*  test('debe de incrementar con el botón +1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('11') ).toBeTruthy();

    }); */


/* describe('Prueba en demo component />', () => {
    test('esta prueba no debe de fallar', () => {
        if(1===0){
            throw new Error('no puede dividir entre 0')
        }
    })
})

test('esta prueba no debe de fallar', () => {
    const message1 = 'Hola Mundo';
    const message2 = message1.trim();
    expect(message1).toBe(message2)
}) */