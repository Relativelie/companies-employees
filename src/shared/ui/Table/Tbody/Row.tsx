import { memo } from 'react';
import { Column, WithId } from '../Table';
import styles from './Tbody.module.css';
import CheckboxColumn from '../CheckboxColumn/CheckboxColumn';

type RowProps<T extends WithId> = {
  row: T;
  columns: Column<T>[];
  toggleItem: (row: T) => void;
  isSelected: boolean;
};

const Row = <T extends WithId>({ row, columns, toggleItem, isSelected }: RowProps<T>) => {
  const renderCell = (column: Column<T>) => {
    const cellKey = `${row.id}-${String(column.key)}`;
    const cellContent = column.render ? column.render(row) : String(row[column.key]);

    return <td key={cellKey}>{cellContent}</td>;
  };

  const onToggleRow = () => {
    toggleItem(row);
  };

  const rowClass = `${styles.row} ${isSelected ? styles.selected : ''}`;

  return (
    <tr className={rowClass}>
      <td>
        <CheckboxColumn checked={isSelected} onChange={onToggleRow} />
      </td>
      {columns.map(renderCell)}
    </tr>
  );
};

type GenericTheadComp = <T extends WithId>(props: RowProps<T>) => ReturnType<typeof Row>;
export default memo(Row) as GenericTheadComp;
