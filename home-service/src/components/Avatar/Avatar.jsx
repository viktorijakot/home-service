import styles from "./avatar.module.css";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ROUTES } from "@/router/Routes";
import Button from "../Button/Button";

const Avatar = ({ children }) => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const handleLogoutClick = () => {
    logout();

    navigate(ROUTES.LOGIN);
  };

  const toggleLogoutVisibility = () => {
    setShowLogout(!showLogout);
  };

  return (
    <>
      <div className={styles.avatar} onClick={toggleLogoutVisibility}>
        {children}
      </div>
      {showLogout && (
        <div className={styles.logout}>
          <Button type="button" onClick={handleLogoutClick}>
            Log out
          </Button>
        </div>
      )}
    </>
  );
};

Avatar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Avatar;
