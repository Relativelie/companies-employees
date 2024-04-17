import { CompanyTable } from '@entities/company';
import { AddCompany } from '@features/AddCompany';
import { DeleteCompany } from '@features/DeleteCompany';
import TablePanelContainer from '@shared/ui/TablePanelContainer';
import { Title } from '@shared/ui/Title';
import { ControlPanelContainer } from '@shared/ui/ControlPanelContainer';

const CompaniesTable = () => {
  return (
    <TablePanelContainer>
      <div>
        <Title>Компании:</Title>
        <CompanyTable />
      </div>

      <ControlPanelContainer>
        <AddCompany />
        <DeleteCompany />
      </ControlPanelContainer>
    </TablePanelContainer>
  );
};

export default CompaniesTable;
