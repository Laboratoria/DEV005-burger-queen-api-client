describe('Prueba en demo component />', () => {
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
})