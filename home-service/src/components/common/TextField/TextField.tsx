import styles from './textField.module.css';
import classNames from 'classnames/bind';
import { ChangeEvent } from 'react';

const cx = classNames.bind(styles);

interface TextFieldProps {
  type: string;
  name: string;
  placeholder: string;
  id: string;
  shape?: 'rounded' | 'rectangle';
  isDisabled?: boolean;
  isRequired?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  type,
  name,
  placeholder,
  id,
  shape = 'rounded',
  isDisabled = false,
  isRequired = false,
  onChange,
}: TextFieldProps) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      disabled={isDisabled}
      required={isRequired}
      onChange={onChange}
      className={cx('textField', shape)}
    />
  );
};

export default TextField;
