import styles from "./login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import TextField from "../../TextField/TextField";
import Button from "../../Button/Button";
import { ROUTES } from "../../../router/Routes";

const Login = () => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ email, password });
    navigate(ROUTES.BASE);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Login</h2>
      <TextField
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        shape="rectangle"
        isRequired
      />
      <TextField
        type="password"
        placeholder="Password"
        value={password}
        name="password"
        id="password"
        onChange={(event) => setPassword(event.target.value)}
        shape="rectangle"
        isRequired
      />
      <Button type="submit">Log in</Button>
      <div className={styles.link}>
        <NavLink to={ROUTES.REGISTER} className={styles.signUp}>
          Don`t have an account? Sign up
        </NavLink>
      </div>
    </form>
  );
};

export default Login;
