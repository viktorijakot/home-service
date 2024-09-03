import classNames from "classnames";
import styles from "./textField.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  shape?: "rounded";
}

const TextField = ({ shape, className, ...props }: InputProps) => {
  return (
    <input
      className={classNames(styles.textField, className, {
        [styles.rounded]: shape === "rounded",
      })}
      {...props}
    />
  );
};

export default TextField;
