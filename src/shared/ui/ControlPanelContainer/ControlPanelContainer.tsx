import styles from './ControlPanelContainer.module.css';

type ControlPanelContainerProps = {
  children: React.ReactNode;
};
const ControlPanelContainer: React.FC<ControlPanelContainerProps> = ({ children }) => {
  return <div className={styles.controlPanel}>{children}</div>;
};

export default ControlPanelContainer;
