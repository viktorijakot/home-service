import { useEffect, useRef } from 'react';
import styles from './userDropdownMenu.module.css';
import classNames from 'classnames/bind';

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
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (dropDownRef.current && target.getAttribute('data-button') === 'settingDropDown') {
        return;
      }
      if (dropDownRef.current && !(dropDownRef.current as HTMLElement).contains(target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <ul
      role="menu"
      aria-label="settings menu"
      onClick={onClose}
      onKeyDown={onClose}
      tabIndex={0}
      className={cx({ dropDownCotainer: isVisible }, { hidden: !isVisible })}
    >
      {buttons.map((button, index) => (
        <li key={index}>
          <button
            ref={dropDownRef}
            className={styles.button}
            type="button"
            aria-label={button.ariaLabel || button.label}
            role="menuitem"
            onClick={button.onClick}
          >
            {button.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserSettingsDropDown;
