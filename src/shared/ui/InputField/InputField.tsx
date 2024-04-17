import { useRef } from 'react';
import styles from './InputField.module.css';

type InputFieldProps = {
  label?: string;
  name: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEscape?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  id,
  onChange,
  onBlur,
  onEscape,
  onEnter,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      onEscape?.(event);
      ref.current?.blur();
    } else if (event.key === 'Enter') {
      onEnter?.(event);
      ref.current?.blur();
    }
  };

  return (
    <div className={styles.inputContainer}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        autoComplete='off'
      />
    </div>
  );
};

export default InputField;
