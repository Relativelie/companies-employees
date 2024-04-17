/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from 'react';
import styles from './Select.module.css';

type SelectProps<T> = {
  options: T[];
  onChange: (selected: T) => void;
  selected?: T;
  name: string;
  label?: string;
  getLabel?: (option?: T) => string | undefined;
  getValue?: (option?: T) => string | undefined;
};

const Select = <T,>({
  options,
  onChange,
  selected,
  name,
  label,
  getLabel = (option: any) => option.label,
  getValue = (option: any) => option.value,
}: SelectProps<T>) => {
  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedItem = options.find((option) => getValue(option) === event.target.value);
    if (!selectedItem) {
      return;
    }

    onChange(selectedItem);
  };
  return (
    <div className={styles.selectContainer}>
      {selected && <label className={styles.label}>{label}</label>}
      <select
        name={name}
        className={styles.select}
        value={getValue?.(selected)}
        onChange={onSelect}
      >
        {options.map((option) => (
          <option key={getLabel(option)} value={getValue(option)}>
            {getLabel(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
