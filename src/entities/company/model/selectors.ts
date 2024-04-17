import { createSelector } from '@reduxjs/toolkit';
import { CompanyState } from './types';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.company,
);

export const getAllCompanies = createSelector(selectBase, (state: CompanyState) => state.companies);

export const getSelectedCompaniesIds = createSelector(
  selectBase,
  (state: CompanyState) => state.selectedCompaniesIds,
);

export const getSelectedCompanies = createSelector(selectBase, (state: CompanyState) =>
  state.companies.filter((company) => state.selectedCompaniesIds.includes(company.id)),
);

export const getHasSelectedCompanies = createSelector(
  selectBase,
  (state: CompanyState) => state.selectedCompaniesIds.length > 0,
);
