
import {Link} from "react-router-dom"
import { Button } from '../components/Button'

export default function Route() {
    return <>
    <h2>waiter</h2>
    <Link to='/'>
    <Button onClick={onclick} text='Salir'></Button>
    </Link>
  
    </>
    
}