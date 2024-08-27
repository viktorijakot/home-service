import { ChangeEvent, MouseEvent, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './register.module.css';
import { ROUTES } from '@/router/Routes';
import TextField from '@/components/common/TextField/TextField';
import Button from '@/components/common/Button/Button';
import { registerUser } from '@/api/authApi';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const resetValues = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    try {
      await registerUser({ name, email, password });
      navigate(ROUTES.LOGIN);
      resetValues();
    } catch (error) {
      const errorMsg: any = error;
      setError(errorMsg.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Register</h2>
      {error && <p className={styles.error}>{error}</p>}
      <TextField
        type="name"
        placeholder="Name"
        name="name"
        id="name"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        shape="rectangle"
        isRequired
      />
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
      <TextField
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        id="confirmPassword"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
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
