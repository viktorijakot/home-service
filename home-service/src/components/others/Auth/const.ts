import * as Yup from 'yup';
import { LoginRequest, RegisterUser } from '@/types/user';
import { errorMessage } from './Register/const';

export const loginValidationSchema: Yup.Schema<LoginRequest> = Yup.object().shape({
  email: Yup.string().email(errorMessage.email).required(errorMessage.required),
  password: Yup.string().required(errorMessage.required),
});

export const reigsterValidationSchema: Yup.Schema<RegisterUser> = Yup.object().shape({
  name: Yup.string().required(errorMessage.required),
  email: Yup.string().email(errorMessage.email).required(errorMessage.required),
  password: Yup.string()
    .required(errorMessage.required)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
  repeatPassword: Yup.string()
    .required(errorMessage.required)
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
});

export const loginInitialValues: LoginRequest = {
  email: '',
  password: '',
};

export const registerInitialValus: RegisterUser = {
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
};
