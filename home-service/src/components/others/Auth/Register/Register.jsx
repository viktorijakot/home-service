import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./register.module.css";
import { ROUTES } from "@/router/Routes";
import TextField from "@/components/common/TextField/TextField";
import Button from "@/components/common/Button/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setEmail("");
    setPassword("");
    setConfirmPassword("");

    navigate(ROUTES.LOGIN);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Register</h2>
      {error && <p className={styles.error}>{error}</p>}
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
      <TextField
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        name="confirmPassword"
        id="confirmPassword"
        onChange={(event) => setConfirmPassword(event.target.value)}
        shape="rectangle"
        isRequired
      />
      <Button type="submit">Sign Up</Button>
      <div className={styles.link}>
        <NavLink to={ROUTES.LOGIN} className={styles.signIn}>
          Already have an account? Log in
        </NavLink>
      </div>
    </form>
  );
};

export default Register;
