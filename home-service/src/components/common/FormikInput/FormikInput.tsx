import { Field, ErrorMessage } from "formik";
import styles from "../TextField/textField.module.css";
import TextField from "../TextField/TextField";

interface FormikFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const FormikInput = ({ name, ...props }: FormikFieldProps) => {
  return (
    <div>
      <Field name={name} as={TextField} {...props} />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};

export default FormikInput;
