import "../App.css";
import { validationSchema } from "../Utilities/Validation";
import { useNavigation } from "../Utilities/Direction";
import { handleSubmittion } from "../Utilities/Submit";
import { LoginForm } from "../components/LoginForm";

function Login() {
  const { goToAdmin, goToWaiter } = useNavigation();
  const submit = handleSubmittion(goToAdmin, goToWaiter)
     return (
      <LoginForm validationSchema={validationSchema} submit={submit}></LoginForm>
     )
}
export default Login;
