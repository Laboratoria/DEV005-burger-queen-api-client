import { getproduct } from "../../../services/UseAxios";
import "./menu.css";



async function Breakfast(){
  let data_= await getproduct()
  
data_ = data_.filter((el) => (el.type.includes('Desayuno') ? el : data_));
  return data_;
}
 
    
  

export default Breakfast;
