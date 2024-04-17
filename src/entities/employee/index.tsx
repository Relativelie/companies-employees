export {
  default as employeeReducer,
  addEmployee,
  toggleAllEmployees,
  toggleEmployee,
  removeSelectedEmployees,
  updateEmployee,
} from './model/employeeSlice';
export { type Employee, type EmployeeState } from './model/types';
export { selectEmployees, getSelectedEmployees } from './model/selectors';
export { EmployeeTable } from './ui';
export { convertEmployee } from './lib/convertEmployee';
