import { createSelector } from '@reduxjs/toolkit';
import { EmployeeState } from './types';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.employee,
);

export const selectEmployees = createSelector(
  selectBase,
  (state: EmployeeState) => state.shownEmployees,
);

export const getSelectedEmployees = createSelector(
  selectBase,
  (state: EmployeeState) => state.selectedEmployees,
);
