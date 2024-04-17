import { configureStore } from '@reduxjs/toolkit';
import { companyReducer } from '@entities/company';
import { employeeReducer } from '@entities/employee';

const rootReducer = {
  company: companyReducer,
  employee: employeeReducer,
};

export const appStore = configureStore({
  reducer: rootReducer,
});
