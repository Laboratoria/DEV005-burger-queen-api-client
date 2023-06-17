import "../../Style/admin.css";
import {Link} from "react-router-dom"
import  Button  from "../../components/Button"

export default function Admin() {
    return <>
    <h2>Admin</h2>
    <Link to='/'>
    <Button onClick={onclick} text='Chayanne, Admin de mi <3'></Button>
    </Link>
  
    </>
    
}