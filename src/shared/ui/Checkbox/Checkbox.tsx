import { ChangeEvent } from 'react';
import styles from './Checkbox.module.css';

type CheckboxProps = {
  checked: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  id?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label, id }) => {
  return (
    <label htmlFor={id} className={styles.label}>
      <input
        id={id}
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className={styles.input}
      />
      {label}
    </label>
  );
};

export default Checkbox;
