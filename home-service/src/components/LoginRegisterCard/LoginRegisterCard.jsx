import { useLocation } from "react-router-dom";
import styles from "./loginRegisterCard.module.css";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import { ROUTES } from "@/router/Routes";

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
