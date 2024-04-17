import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Employee, EmployeeDictionary, EmployeeState } from './types';
import { employees } from './data';
import { filterOutSelected } from '../lib/filterOutSelected';
import { updateEmployeeById } from '../lib/updateEmployeeById';
import { toggleAllCompanies, toggleCompany } from '@entities/company';

const groupEmployeesByCompany = (employees: Employee[]): EmployeeDictionary => {
  return employees.reduce<EmployeeDictionary>((acc, employee) => {
    const { companyId } = employee;
    if (!acc[companyId]) {
      acc[companyId] = [];
    }
    acc[companyId].push(employee);
    return acc;
  }, {});
};

const initialState: EmployeeState = {
  shownEmployees: [],
  selectedEmployees: [],
  allEmployees: groupEmployeesByCompany(employees),
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      const employee = action.payload;

      if (!state.allEmployees[employee.companyId]) {
        state.allEmployees[employee.companyId] = [];
      }
      state.allEmployees[employee.companyId].push(employee);
      state.shownEmployees.push(employee);
    },
    removeSelectedEmployees: (state) => {
      state.shownEmployees = filterOutSelected(state.shownEmployees, state.selectedEmployees);

      state.selectedEmployees.forEach((id) => {
        const employee = state.shownEmployees.find((emp) => emp.id === id);
        if (employee) {
          const companyEmployees = state.allEmployees[employee.companyId];
          state.allEmployees[employee.companyId] = companyEmployees.filter((emp) => emp.id !== id);
        }
      });

      state.selectedEmployees = [];
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      updateEmployeeById(state.shownEmployees, action.payload.id, action.payload);
      updateEmployeeById(
        state.allEmployees[action.payload.companyId],
        action.payload.id,
        action.payload,
      );
    },
    toggleEmployee: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.selectedEmployees.indexOf(id);
      if (index !== -1) {
        state.selectedEmployees.splice(index, 1);
        return;
      }
      state.selectedEmployees.push(id);
    },
    toggleAllEmployees: (state) => {
      if (state.selectedEmployees.length === state.shownEmployees.length) {
        state.selectedEmployees = [];
        return;
      }
      state.selectedEmployees = state.shownEmployees.map((item) => item.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(toggleAllCompanies, (state) => {
      const allEmployees = Object.values(state.allEmployees).flat();

      if (state.shownEmployees.length === allEmployees.length) {
        state.shownEmployees = [];
        state.selectedEmployees = [];
        return;
      }
      state.shownEmployees = allEmployees;
    });

    builder.addCase(toggleCompany, (state, action: PayloadAction<string>) => {
      const toggledCompanyId = action.payload;
      const companyIsCurrentlyShown = state.shownEmployees.some(
        (emp) => emp.companyId === toggledCompanyId,
      );

      if (companyIsCurrentlyShown) {
        // If the company is currently shown, remove its employees from shownEmployees
        state.shownEmployees = state.shownEmployees.filter(
          (emp) => emp.companyId !== toggledCompanyId,
        );

        // Also remove these employees from selectedEmployees
        const companyEmployees = state.allEmployees[toggledCompanyId];

        state.selectedEmployees = state.selectedEmployees.filter(
          (selectedId) => !companyEmployees.some((emp) => emp.id === selectedId),
        );
        return;
      }
      // Else add employees to shownEmployees
      const newShownEmployees = state.allEmployees[toggledCompanyId] ?? [];
      state.shownEmployees = [...state.shownEmployees, ...newShownEmployees];
    });
  },
});

export const {
  addEmployee,
  toggleAllEmployees,
  toggleEmployee,
  removeSelectedEmployees,
  updateEmployee,
} = employeeSlice.actions;
export default employeeSlice.reducer;
