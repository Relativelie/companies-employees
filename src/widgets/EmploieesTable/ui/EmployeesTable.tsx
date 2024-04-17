import { EmployeeTable } from '@entities/employee';
import { useAppSelector } from '@shared/model';
import TablePanelContainer from '@shared/ui/TablePanelContainer';
import { Title } from '@shared/ui/Title';
import { ControlPanelContainer } from '@shared/ui/ControlPanelContainer';
import { AddEmployee } from '@features/AddEmployee';
import { DeleteEmployee } from '@features/DeleteEmployee';
import { getHasSelectedCompanies } from '@entities/company';

const EmployeesTable = () => {
  const hasSelectedCompanies = useAppSelector(getHasSelectedCompanies);

  if (!hasSelectedCompanies) {
    return null;
  }
  return (
    <TablePanelContainer>
      <div>
        <Title>Сотрудники:</Title>
        <EmployeeTable />
      </div>

      <ControlPanelContainer>
        <AddEmployee />
        <DeleteEmployee />
      </ControlPanelContainer>
    </TablePanelContainer>
  );
};

export default EmployeesTable;
