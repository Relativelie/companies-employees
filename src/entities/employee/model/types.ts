export interface Employee {
  readonly id: string;
  firstName: string;
  lastName: string;
  position: string;
  companyId: string;
}

export interface EmployeeState {
  // shownEmployees: Employee[];
  // selectedEmployees: string[];
  // allEmployees: Employee[];

  shownEmployees: Employee[];
  selectedEmployees: string[];
  allEmployees: EmployeeDictionary;
}

export type EmployeeDictionary = Record<string, Employee[]>;
