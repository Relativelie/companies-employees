import { Checkbox } from '../../Checkbox';
import styles from './CheckboxColumn.module.css';

type CheckboxColumnProps = {
  checked: boolean;
  onChange: () => void;
  label?: string;
};

const CheckboxColumn: React.FC<CheckboxColumnProps> = ({ checked, onChange, label }) => {
  return (
    <div className={styles.checkboxColumn}>
      <Checkbox checked={checked} onChange={onChange} label={label} />
    </div>
  );
};

export default CheckboxColumn;
