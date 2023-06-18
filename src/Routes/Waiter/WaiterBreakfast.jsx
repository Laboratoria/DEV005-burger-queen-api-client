import "../../Style/breakfast.css";
import Button  from '../../components/Button'
import Header from "../../components/Header";
import {CounterMenu} from '../../components/CounterMenu'

export default function Breakfast() {
    return <>
    <Header prop="Marta"/>
  <div className="topBar">
    <Button className="break" onClick={onclick} text='Desayuno'></Button>
    <Button className="break"  onClick={onclick} text='Almuerzo'></Button>
    <Button className="break"  onClick={onclick} text='Pedidos'></Button>
    </div>

    <CounterMenu/>
    </>
    
}
