import styles from "./header.module.css";
import Logo from "@/assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import NavigationOptions from "../NavigationOptions/NavigationOptions";
import { useContext } from "react";
import Avatar from "../Avatar/Avatar";
import { UserContext } from "@/context/UserContext";
import { getNavLinks } from "@/router/PagesConfig";
import { ROUTES } from "@/router/Routes";
import Button from "@/components/common/Button/Button";

const Header = () => {
  const navLinksToDisplay = getNavLinks().map(({ path, text }) => (
    <NavigationOptions key={path} link={path} linkTitle={text} />
  ));
  const { user } = useContext(UserContext);

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
      {user ? (
        <Avatar>{user.email[0]}</Avatar>
      ) : (
        <Button type="button" onClick={handleClick}>
          Login / Sign Up
        </Button>
      )}
    </header>
  );
};

export default Header;
