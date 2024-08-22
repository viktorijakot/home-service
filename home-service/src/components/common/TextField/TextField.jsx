import PropTypes from "prop-types";
import styles from "./textField.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TextField = ({
  type,
  name,
  placeholder,
  id,
  shape = "rounded",
  isDisabled = false,
  isRequired = false,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      disabled={isDisabled}
      required={isRequired}
      onChange={onChange}
      className={cx("textField", shape)}
    />
  );
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  shape: PropTypes.oneOf(["rounded", "rectangle"]),
  onChange: PropTypes.func,
};

export default TextField;
