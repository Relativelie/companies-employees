import { createSelector } from '@reduxjs/toolkit';
import { CompanyState } from './types';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.company,
);
export const getAllCompanies = createSelector(selectBase, (state: CompanyState) =>
  Object.values(state.companies),
);

export const getSelectedCompaniesIds = createSelector(
  selectBase,
  (state: CompanyState) => state.selectedCompaniesIds,
);

export const getSelectedCompanies = createSelector(selectBase, (state: CompanyState) =>
  state.selectedCompaniesIds.map((id) => state.companies[id]).filter(Boolean),
);

export const getHasSelectedCompanies = createSelector(
  selectBase,
  (state: CompanyState) => state.selectedCompaniesIds.length > 0,
);
