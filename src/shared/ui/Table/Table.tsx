import styles from './Table.module.css';
import Tbody from './Tbody/Tbody';
import Thead from './Thead/Thead';

export type Column<T> = {
  key: keyof T;
  title: string;
  render?: (row: T) => JSX.Element;
};

export interface WithId {
  id: string;
}

type TableProps<T extends WithId> = {
  columns: Column<T>[];
  data: T[];
  toggleItem: (row: T) => void;
  onToggleAll: () => void;
  isRowSelected: (row: T) => boolean;
  isAllSelected: boolean;
};

const Table = <T extends WithId>({
  columns,
  data,
  toggleItem,
  onToggleAll,
  isRowSelected,
  isAllSelected,
}: TableProps<T>) => {
  return (
    <table className={styles.table}>
      <Thead columns={columns} onToggleAll={onToggleAll} isAllSelected={isAllSelected} />
      <Tbody data={data} columns={columns} toggleItem={toggleItem} isRowSelected={isRowSelected} />
    </table>
  );
};

export default Table;
