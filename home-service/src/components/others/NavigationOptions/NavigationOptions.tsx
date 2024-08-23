import { NavLink } from "react-router-dom";
import styles from "./navigationOptions.module.css";

export interface NavigationOptionsProps {
  link: string;
  linkTitle: string;
}

const NavigationOptions = ({ link, linkTitle }: NavigationOptionsProps) => {
  return (
    <NavLink className={styles.navigationOption} to={link}>
      {linkTitle}
    </NavLink>
  );
};

export default NavigationOptions;
