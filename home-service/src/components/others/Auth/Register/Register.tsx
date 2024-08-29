import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './register.module.css';
import { ROUTES } from '@/router/Routes';
import Button from '@/components/common/Button/Button';
import { RegisterUser } from '@/types/user';
import { Formik, Form } from 'formik';
import { registerInitialValus, reigsterValidationSchema } from '../const';
import FormikInput from '@/components/common/FormikInput/FormikInput';
import { ErrorResponse } from '@/types/error';
import { useRegisterUser } from '@/hooks/useRegisterUser';

const Register = () => {
  const { mutateAsync: registerUser } = useRegisterUser();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (formValues: RegisterUser) => {
    try {
      await registerUser(formValues);
      navigate(ROUTES.LOGIN);
    } catch (error) {
      const errorMessage = error as ErrorResponse;
      console.log(errorMessage);
      setError(errorMessage?.response?.data.message ?? '');
    }
  };

  return (
    <Formik initialValues={registerInitialValus} validationSchema={reigsterValidationSchema} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <h2 className={styles.title}>Register</h2>
        <FormikInput name="name" placeholder="name" />
        <FormikInput name="email" type="email" placeholder="Email" />
        <FormikInput name="password" type="password" placeholder="Password" />
        <FormikInput name="repeatPassword" type="password" placeholder="Repeat Password" />
        {error && <p className={styles.error}>{error}</p>}
        <Button type="submit">Sign Up</Button>
        <div className={styles.link}>
          <NavLink to={ROUTES.LOGIN} className={styles.signIn}>
            Already have an account? Log in
          </NavLink>
        </div>
      </Form>
    </Formik>
  );
};

export default Register;
