import styles from "./button.module.css";
import PropTypes from "prop-types";

function Button({ type = "button", children, isDisabled = false, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      type={type}
      className={styles.button}
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
