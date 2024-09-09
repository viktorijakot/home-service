import styles from "./button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ButtonProps {
  type: "button" | "submit" | "reset";
  shape?: "rounded" | "circle" | "fullWidth";
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
}

const Button = ({ type = "button", children, isDisabled = false, onClick, shape = "rounded" }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={isDisabled} type={type} className={cx("button", shape)}>
      {children}
    </button>
  );
};

export default Button;
