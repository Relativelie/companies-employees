import { Employee } from '../model/types';

export const updateEmployeeById = (
  employees: Employee[],
  employeeId: string,
  changes: Partial<Employee>,
) => {
  const index = employees.findIndex((emp) => emp.id === employeeId);
  if (index !== -1) {
    employees[index] = { ...employees[index], ...changes };
  }
};
