import styles from './login.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { ChangeEvent, MouseEvent, useContext, useState } from 'react';
import Button from '@/components/common/Button/Button';
import { UserContext } from '@/context/UserContext';
import { ROUTES } from '@/router/Routes';
import TextField from '@/components/common/TextField/TextField';

const Login = () => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        shape="rectangle"
        isRequired
      />
      <TextField
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
