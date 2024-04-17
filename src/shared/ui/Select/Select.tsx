import { ChangeEvent } from 'react';
import styles from './Select.module.css';

type SelectProps<T> = {
  options: T[];
  onChange: (selected: T) => void;
  selected?: T;
  name: string;
  getLabel?: (option?: T) => string | undefined;
  getValue?: (option?: T) => string | undefined;
};

const Select = <T,>({
  options,
  onChange,
  selected,
  name,
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
      {selected && <label className={styles.label}>{getLabel(selected)}</label>}
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
