import styles from "./button.module.css";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Button({
  type = "button",
  children,
  isDisabled = false,
  onClick,
  shape = "rounded",
}) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      type={type}
      className={cx("button", shape)}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  shape: PropTypes.oneOf(["rounded", "circle"]),
};

export default Button;
