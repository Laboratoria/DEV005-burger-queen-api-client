import { useNavigate } from "react-router-dom";
export const useNavigation = () => {
  const navigateOn = useNavigate();

  const goToAdmin = () => {
    navigateOn("/admin");
  };
  const goToWaiter = () => {
    navigateOn("/waiter");
  };
  const goToChef = () => {
    navigateOn("/chef");
  };

  return { goToAdmin, goToWaiter, goToChef };
};
