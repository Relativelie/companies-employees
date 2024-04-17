import { Column } from '../Table';
import styles from './Thead.module.css';
import CheckboxColumn from '../CheckboxColumn/CheckboxColumn';
import { memo } from 'react';

type TheadProps<T> = {
  columns: Column<T>[];
  onToggleAll: () => void;
  isAllSelected: boolean;
};

const Thead = <T,>({ columns, onToggleAll, isAllSelected }: TheadProps<T>) => {
  const renderDataColumn = (column: Column<T>) => <th key={String(column.key)}>{column.title}</th>;

  return (
    <thead>
      <tr className={styles.theadTr}>
        <th>
          <CheckboxColumn checked={isAllSelected} onChange={onToggleAll} label='Выделить всe' />
        </th>
        {columns.map(renderDataColumn)}
      </tr>
    </thead>
  );
};

type GenericTheadComp = <T>(props: TheadProps<T>) => ReturnType<typeof Thead>;
export default memo(Thead) as GenericTheadComp;
