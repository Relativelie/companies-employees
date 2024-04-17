import { Checkbox } from '../../Checkbox';
import styles from './CheckboxColumn.module.css';

type CheckboxColumnProps = {
  checked: boolean;
  onChange: () => void;
  label?: string;
};

const CheckboxColumn: React.FC<CheckboxColumnProps> = ({ checked, onChange, label }) => {
  const onClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    onChange();
  };

  return (
    <div className={styles.checkboxColumn}>
      <Checkbox checked={checked} onChange={onClick} label={label} />
    </div>
  );
};

export default CheckboxColumn;
