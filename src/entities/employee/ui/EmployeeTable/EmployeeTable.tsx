import { useAppDispatch, useAppSelector } from '@shared/model';
import { Column, Table } from '@shared/ui/Table';
import { useCallback } from 'react';
import {
  Employee,
  getSelectedEmployees,
  selectEmployees,
  toggleAllEmployees,
  toggleEmployee,
} from '@entities/employee';
import EmployeeTableInput from './EmployeeTableInput';

const columns: Column<Employee>[] = [
  {
    title: 'Фамилия',
    key: 'lastName',
    render: (row) => (
      <EmployeeTableInput placeholder='Фамилия' employeeKey='lastName' employee={row} />
    ),
  },
  {
    title: 'Имя',
    key: 'firstName',
    render: (row) => (
      <EmployeeTableInput placeholder='Имя' employeeKey='firstName' employee={row} />
    ),
  },
  {
    title: 'Должность',
    key: 'position',
    render: (row) => (
      <EmployeeTableInput placeholder='Должность' employeeKey='position' employee={row} />
    ),
  },
];

const EmployeeTable = () => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectEmployees);
  const selectedEmployees = useAppSelector(getSelectedEmployees);

  const onToggleEmpl = useCallback(
    (company: Employee) => {
      dispatch(toggleEmployee(company.id));
    },
    [dispatch],
  );

  const isSelectedEmployees = useCallback(
    (employee: Employee) => {
      return selectedEmployees?.some((id) => id === employee.id) || false;
    },
    [selectedEmployees],
  );

  const onToggleAllEmployees = useCallback(() => {
    dispatch(toggleAllEmployees());
  }, [dispatch]);

  return (
    <Table
      columns={columns}
      data={employees}
      toggleItem={onToggleEmpl}
      isRowSelected={isSelectedEmployees}
      isAllSelected={employees.length === selectedEmployees.length && !!employees.length}
      onToggleAll={onToggleAllEmployees}
    />
  );
};

export default EmployeeTable;
