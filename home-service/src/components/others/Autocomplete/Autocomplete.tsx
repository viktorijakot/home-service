import { MouseEvent, KeyboardEvent } from "react";
import styles from "./autocomplete.module.css";

interface AutocompleteProps {
  options: string[];
  onClick: (e: MouseEvent<HTMLButtonElement>, selected: string) => void;
}

const Autocomplete = ({ options, onClick }: AutocompleteProps) => {
  return (
    <ul className={styles.autocomplete}>
      {options.map((option) => (
        <li key={option}>
          <button type="button" className={styles.options} onClick={(e) => onClick(e, option)}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Autocomplete;
