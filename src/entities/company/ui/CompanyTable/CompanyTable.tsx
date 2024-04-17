import { useAppDispatch, useAppSelector } from '@shared/model';
import { Column, Table } from '@shared/ui/Table';
import {
  Company,
  getAllCompanies,
  getSelectedCompaniesIds,
  toggleAllCompanies,
  toggleCompany,
} from '@entities/company';
import { useCallback } from 'react';

import CompanyTableInput from './CompanyTableInput';

const columns: Column<Company>[] = [
  {
    title: 'Название компании',
    key: 'name',
    render: (row) => (
      <CompanyTableInput placeholder='Название компании' companyKey='name' company={row} />
    ),
  },
  {
    title: 'Кол-во сотрудников',
    key: 'employeesCount',
  },
  {
    title: 'Адрес',
    key: 'address',
    render: (row) => <CompanyTableInput placeholder='Адрес' companyKey='address' company={row} />,
  },
];

const CompanyTable = () => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(getAllCompanies);
  const selectedCompanies = useAppSelector(getSelectedCompaniesIds);

  const onToggleCompany = useCallback(
    (company: Company) => {
      dispatch(toggleCompany(company.id));
    },
    [dispatch],
  );

  const isSelectedCompany = useCallback(
    (company: Company) => {
      return selectedCompanies?.some((id) => id === company.id) || false;
    },
    [selectedCompanies],
  );

  const onToggleAllCompanies = useCallback(() => {
    dispatch(toggleAllCompanies());
  }, [dispatch]);

  return (
    <Table
      columns={columns}
      data={companies}
      toggleItem={onToggleCompany}
      isRowSelected={isSelectedCompany}
      isAllSelected={companies.length === selectedCompanies.length && !!companies.length}
      onToggleAll={onToggleAllCompanies}
    />
  );
};

export default CompanyTable;
