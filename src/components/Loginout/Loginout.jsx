import { useNavigate } from 'react-router-dom'; 
import './loginout.css'
import Out from '../../../img/out.png'

export default function LoginOut() {
  const navigate = useNavigate();

  //  enviar a pagina inicial y eliminar la informacion del usurio
  const handleLoginout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');

    navigate('/');
  };

  
  return (
    <img
      src={Out}
      alt="Cerrar sesión"
      onClick={handleLoginout}
      className="out"
    />
  );
}