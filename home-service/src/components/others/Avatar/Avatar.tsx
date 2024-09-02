import { UserContext } from "@/context/UserContext";
import styles from "./avatar.module.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/router/Routes";
import Button from "@/components/common/Button/Button";

interface AvatarProps {
  children: React.ReactNode;
}

const Avatar = ({ children }: AvatarProps) => {
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

export default Avatar;
