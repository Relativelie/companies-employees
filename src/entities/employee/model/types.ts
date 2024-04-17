export interface Employee {
  readonly id: string;
  firstName: string;
  lastName: string;
  position: string;
  companyId: string;
}

export interface EmployeeState {
  shownEmployees: Employee[];
  selectedEmployees: string[];
  allEmployees: EmployeeMap;
}

export type EmployeeMap = Record<string, Employee[]>;
