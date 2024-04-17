import { Employee } from '../model/types';

export const filterOutSelected = (employees: Employee[], selectedIds: string[]) => {
  return employees.filter((emp) => !selectedIds.includes(emp.id));
};
