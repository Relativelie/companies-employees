import { getSelectedCompaniesIds } from '@entities/company';
import { EmployeeTable } from '@entities/employee';
import { useAppSelector } from '@shared/model';
import TablePanelContainer from '@shared/ui/TablePanelContainer';
import { Title } from '@shared/ui/Title';
import { ControlPanelContainer } from '@shared/ui/ControlPanelContainer';
import { AddEmployee } from '@features/AddEmployee';
import { DeleteEmployee } from '@features/DeleteEmployee';

const EmployeesTable = () => {
  const selectedCompaniesIds = useAppSelector(getSelectedCompaniesIds);
  const hasCompanies = selectedCompaniesIds.length > 0;

  if (!hasCompanies) {
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
