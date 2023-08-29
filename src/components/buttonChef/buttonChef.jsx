import { useNavigate } from 'react-router-dom';
import './buttonChef.css'
import Chef from '../../../img/chef.png'

export default function ButtonChef() {
  const navigate = useNavigate();

  // Enviar a cocina
  const handleButtonChef = () => {
    navigate('/kitchen');
  };

  return (
    <img
      src={Chef}
      alt="Ir a vista de cocina"
      onClick={handleButtonChef}
      className="out"
    />
  );
}