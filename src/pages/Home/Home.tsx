import { CompaniesTable } from '@widgets/CompaniesTable';
import { EmployeesTable } from '@widgets/EmploieesTable';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <CompaniesTable />
      <EmployeesTable />
    </div>
  );
};

export default Home;
