import { useEffect, useRef } from "react";
import styles from "./userDropdownMenu.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export interface DropdownButton {
  label: string;
  onClick: () => void;
  ariaLabel?: string;
}

interface UserSettingsDropDownProps {
  onClose: () => void;
  isVisible: boolean;
  buttons: DropdownButton[];
}

const UserSettingsDropDown = ({ isVisible, onClose, buttons }: UserSettingsDropDownProps) => {
  const dropDownRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (dropDownRef.current && target.getAttribute("data-button") === "settingDropDown") {
        return;
      }
      if (dropDownRef.current && !dropDownRef.current.contains(target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <ul
      ref={dropDownRef}
      role="menu"
      aria-label="settings menu"
      tabIndex={0}
      className={cx({ dropDownCotainer: isVisible }, { hidden: !isVisible })}
    >
      {buttons.map(({ label, ariaLabel, onClick }) => (
        <li key={label}>
          <button
            className={styles.button}
            type="button"
            aria-label={ariaLabel || label}
            role="menuitem"
            onClick={() => {
              onClick();
              onClose();
            }}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserSettingsDropDown;
