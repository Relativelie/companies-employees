import { Column, WithId } from '../Table';
import Row from './Row';
import styles from './Tbody.module.css';

type TbodyProps<T extends WithId> = {
  data: T[];
  columns: Column<T>[];
  toggleItem: (row: T) => void;
  isRowSelected: (row: T) => boolean;
};

const Tbody = <T extends WithId>({ data, columns, toggleItem, isRowSelected }: TbodyProps<T>) => {
  return (
    <tbody className={styles.tbody}>
      {data.map((row: T) => {
        const isSelected = isRowSelected(row);

        return (
          <Row
            key={row.id}
            row={row}
            columns={columns}
            toggleItem={toggleItem}
            isSelected={isSelected}
          />
        );
      })}
    </tbody>
  );
};

export default Tbody;
