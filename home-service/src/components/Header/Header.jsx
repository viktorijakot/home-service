import styles from "./header.module.css";
import Logo from "../../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/Routes";
import NavigationOptions from "../NavigationOptions/NavigationOptions";
import { getNavLinks } from "../../router/PagesConfig";
import Button from "../Button/Button";

function Header() {
  const navLinksToDisplay = getNavLinks().map(
    ({ path, text }) =>
      path !== "login" && (
        <NavigationOptions key={path} link={path} linkTitle={text} />
      )
  );

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navigation}>
        <NavLink to={ROUTES.BASE} className={styles.logo}>
          <img src={Logo} alt="logo" />
        </NavLink>
        {navLinksToDisplay}
      </nav>
      <Button type="button" onClick={handleClick}>
        Login / Sign Up
      </Button>
    </header>
  );
}

export default Header;
