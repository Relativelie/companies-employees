import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company, CompanyState } from './types';
import { addEmployee, Employee } from '@entities/employee';
import { companies } from './data';

const initialState: CompanyState = {
  companies,
  selectedCompaniesIds: [],
  hasMore: true,
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    addCompany: (state, action: PayloadAction<Company>) => {
      state.companies.push(action.payload);
    },
    removeSelectedCompanies: (state) => {
      if (!state.selectedCompaniesIds.length) {
        return;
      }
      state.companies = state.companies.filter(
        (company) => !state.selectedCompaniesIds.includes(company.id),
      );
      state.selectedCompaniesIds = [];
    },
    updateCompany: (state, action: PayloadAction<Company>) => {
      const company = state.companies.find((company) => company.id === action.payload.id);
      if (company) {
        Object.assign(company, action.payload);
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
      if (state.selectedCompaniesIds.length === state.companies.length) {
        state.selectedCompaniesIds = [];
      } else {
        state.selectedCompaniesIds = state.companies.map((item) => item.id);
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

      state.companies.forEach((company) => {
        if (state.selectedCompaniesIds.includes(company.id)) {
          company.employeesCount = reductions[company.id] || 0;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addEmployee, (state, action: PayloadAction<Employee>) => {
      const company = state.companies.find((company) => company.id === action.payload.companyId);
      if (company) {
        company.employeesCount++;
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
