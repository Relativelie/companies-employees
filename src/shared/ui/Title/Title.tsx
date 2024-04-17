import styles from './Title.module.css';

type TitleProps = {
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h3 className={styles.title}>{children}</h3>;
};

export default Title;
