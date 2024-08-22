import { useLocation } from "react-router-dom";
import styles from "./loginRegisterCard.module.css";
import { ROUTES } from "@/router/Routes";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";

const LoginRegisterCard = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      {location.pathname === ROUTES.LOGIN && <Login />}
      {location.pathname === ROUTES.REGISTER && <Register />}
    </div>
  );
};

export default LoginRegisterCard;
