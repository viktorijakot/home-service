import styles from "./header.module.css";
import Logo from "@/assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { navLinks } from "@/router/Router";
import NavigationOptions from "../NavigationOptions/NavigationOptions";
import { UserContext } from "@/context/UserContext";
import { ROUTES } from "@/router/Routes";
import Avatar from "../Avatar/Avatar";
import Button from "@/components/common/Button/Button";

const Header = () => {
  const navLinksToDisplay = navLinks.map(({ path, navLinkInfo }) => (
    <NavigationOptions key={path} link={path} linkTitle={navLinkInfo} />
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
        <Avatar>{user.name[0]}</Avatar>
      ) : (
        <Button type="button" onClick={handleClick}>
          Login / Sign Up
        </Button>
      )}
    </header>
  );
};

export default Header;
