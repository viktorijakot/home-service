import styles from './login.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { ChangeEvent, MouseEvent, useContext, useState } from 'react';
import Button from '@/components/common/Button/Button';
import { UserContext } from '@/context/UserContext';
import { ROUTES } from '@/router/Routes';
import { loginUser } from '@/api/authApi';
import { LoginRequest } from '@/types/user';
import { Form, Formik } from 'formik';
import { loginInitialValues, loginValidationSchema } from '../const';
import FormikInput from '@/components/common/FormikInput/FormikInput';
import { AxiosError } from 'axios';

const Login = () => {
  const { login } = useContext(UserContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (formValues: LoginRequest) => {
    try {
      const response = await loginUser(formValues);
      login(response);
      navigate(ROUTES.BASE);
    } catch (error) {
      const errorMessage = error as AxiosError<{ message: string }>;
      setError(errorMessage.response?.data.message ?? '');
    }
  };

  return (
    <Formik initialValues={loginInitialValues} validationSchema={loginValidationSchema} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <FormikInput name="email" type="email" placeholder="Email" />
        <FormikInput name="password" type="password" placeholder="Password" />
        {error && <p className={styles.error}>{error}</p>}
        <Button type="submit">Log in</Button>
        <div className={styles.link}>
          <NavLink to={ROUTES.REGISTER} className={styles.signUp}>
            Don`t have an account? Sign up
          </NavLink>
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
