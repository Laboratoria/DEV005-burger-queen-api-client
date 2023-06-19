   import './login.css'
   import { useNavigation } from '../main'; 
   import { validationSchema } from '../components/validation';
   import { handleSubmittion } from "../response";
   import { LoginDom } from '../dom/logindom';


   export default function Login() {

    const {goToWaiter, goToAdmin} = useNavigation();
    const submit = handleSubmittion(goToWaiter,  goToAdmin)
    return(
     <LoginDom validationSchema={validationSchema} submit={submit}></LoginDom>
    )
    }
  
