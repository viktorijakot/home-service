import { UserContext } from "@/context/UserContext";
import styles from "./avatar.module.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserSettingsDropDown from "../UserDropdownMenu/UserDropdownMenu";
import { getUserDropdownButtons } from "./utils";

interface AvatarProps {
  children: React.ReactNode;
}

const Avatar = ({ children }: AvatarProps) => {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  const [isUserSettingOpen, setIsUserSettingOpen] = useState(false);

  const handlesUserSettingOpen = () => {
    setIsUserSettingOpen(!isUserSettingOpen);
  };

  const buttons = getUserDropdownButtons(navigate, logout);

  return (
    <>
      <div className={styles.avatar} onClick={handlesUserSettingOpen} data-button="settingDropDown">
        {children}
      </div>
      <UserSettingsDropDown
        onClose={() => setIsUserSettingOpen(false)}
        isVisible={isUserSettingOpen}
        buttons={buttons}
      />
    </>
  );
};

export default Avatar;
