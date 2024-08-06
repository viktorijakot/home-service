import { NavLink } from "react-router-dom";
import styles from "./navigationOptions.module.css";
import PropTypes from "prop-types";

function NavigationOptions({ link, linkTitle }) {
  return (
    <NavLink className={styles.navigationOption} to={link}>
      {linkTitle}
    </NavLink>
  );
}

NavigationOptions.propTypes = {
  link: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
};

export default NavigationOptions;
