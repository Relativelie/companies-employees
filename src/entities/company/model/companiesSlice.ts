import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company, CompanyState } from './types';
import { addEmployee, Employee } from '@entities/employee';
import { companies } from './data';

const initialState: CompanyState = {
  companies: companies.reduce(
    (acc, company) => {
      acc[company.id] = company;
      return acc;
    },
    {} as Record<string, Company>,
  ),
  selectedCompaniesIds: [],
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    addCompany: (state, action: PayloadAction<Company>) => {
      state.companies[action.payload.id] = action.payload;
    },
    removeSelectedCompanies: (state) => {
      state.selectedCompaniesIds.forEach((id) => {
        delete state.companies[id];
      });
      state.selectedCompaniesIds = [];
    },
    updateCompany: (state, action: PayloadAction<Company>) => {
      const company = state.companies[action.payload.id];
      if (company) {
        state.companies[action.payload.id] = { ...company, ...action.payload };
      }
    },
    toggleCompany: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.selectedCompaniesIds.indexOf(id);
      if (index !== -1) {
        state.selectedCompaniesIds.splice(index, 1);
        return;
      }
      state.selectedCompaniesIds.push(id);
    },
    toggleAllCompanies: (state) => {
      if (state.selectedCompaniesIds.length === Object.keys(state.companies).length) {
        state.selectedCompaniesIds = [];
      } else {
        state.selectedCompaniesIds = Object.keys(state.companies);
      }
    },
    reduceEmployeesCount: (state, action: PayloadAction<Employee[]>) => {
      const reductions = action.payload.reduce(
        (acc, employee) => {
          acc[employee.companyId] = (acc[employee.companyId] || 0) + 1;
          return acc;
        },
        {} as Record<string, number>,
      );

      Object.keys(reductions).forEach((companyId) => {
        if (state.companies[companyId] && state.selectedCompaniesIds.includes(companyId)) {
          state.companies[companyId].employeesCount -= reductions[companyId];
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addEmployee, (state, action: PayloadAction<Employee>) => {
      const company = state.companies[action.payload.companyId];
      if (company) {
        company.employeesCount = (company.employeesCount || 0) + 1;
      }
    });
  },
});

export const {
  addCompany,
  removeSelectedCompanies,
  toggleCompany,
  toggleAllCompanies,
  reduceEmployeesCount,
  updateCompany,
} = companySlice.actions;
export default companySlice.reducer;
