import { useContext, useRef } from "react";
import styles from "./userDropdownMenu.module.css";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/context/UserContext";
import useOutsideClick from "@/hooks/useOutsideClick";
import { getUserDropdownButtons } from "./utils";

const cx = classNames.bind(styles);

interface UserSettingsDropDownProps {
  onClose: () => void;
  isVisible: boolean;
}

const UserSettingsDropDown = ({ isVisible, onClose }: UserSettingsDropDownProps) => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();
  const dropDownRef = useRef<HTMLUListElement | null>(null);

  useOutsideClick(dropDownRef, onClose, "settingDropDown");

  return (
    <ul
      ref={dropDownRef}
      role="menu"
      aria-label="settings menu"
      tabIndex={0}
      onClick={onClose}
      onKeyDown={onClose}
      className={cx({ dropDownCotainer: isVisible }, { hidden: !isVisible })}
    >
      {getUserDropdownButtons(navigate, logout).map(({ label, onClick }) => (
        <li key={label}>
          <button className={styles.button} type="button" aria-label={label} role="menuitem" onClick={onClick}>
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserSettingsDropDown;
