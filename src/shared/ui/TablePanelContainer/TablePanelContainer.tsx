import styles from './TablePanelContainer.module.css';

type TablePanelContainerProps = {
  children: React.ReactNode;
};

const TablePanelContainer: React.FC<TablePanelContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default TablePanelContainer;
