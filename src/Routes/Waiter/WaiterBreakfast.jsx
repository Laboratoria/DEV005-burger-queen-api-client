import { Button } from '../../components/Button'


export default function Breakfast() {
    return <>
    <Header />
  
    <Button onClick={onclick} text='Desayuno'></Button>
    <Button onClick={onclick} text='Almuerzo'></Button>
    <Button onClick={onclick} text='Pedidos'></Button>
    </>
    
}
