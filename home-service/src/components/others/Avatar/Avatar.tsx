import styles from "./avatar.module.css";
import { useState } from "react";
import UserSettingsDropDown from "../UserDropdownMenu/UserDropdownMenu";

interface AvatarProps {
  children: React.ReactNode;
}

const Avatar = ({ children }: AvatarProps) => {
  const [isUserSettingOpen, setIsUserSettingOpen] = useState(false);

  const handlesUserSettingOpen = () => {
    setIsUserSettingOpen(!isUserSettingOpen);
  };

  return (
    <>
      <div className={styles.avatar} onClick={handlesUserSettingOpen} data-button="settingDropDown">
        {children}
      </div>
      <UserSettingsDropDown onClose={() => setIsUserSettingOpen(false)} isVisible={isUserSettingOpen} />
    </>
  );
};

export default Avatar;
