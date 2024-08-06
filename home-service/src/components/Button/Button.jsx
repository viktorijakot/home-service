import classNames from "classnames";
import styles from "./button.module.css";
import PropTypes from "prop-types";

function Button({
  type = "button",
  children,
  isDisabled = false,
  isUppercase,
  onClick,
}) {
  const buttonClasses = classNames(
    styles.button,
    isUppercase && styles.uppercase
  );

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      type={type}
      className={buttonClasses}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  isUppercase: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
