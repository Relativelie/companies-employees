export {
  default as companyReducer,
  addCompany,
  removeSelectedCompanies as removeCompanies,
  toggleCompany,
  toggleAllCompanies,
  reduceEmployeesCount,
  updateCompany,
} from './model/companiesSlice';

export { type Company } from './model/types';
export { CompanyTable } from './ui';
export { getAllCompanies, getSelectedCompaniesIds, getSelectedCompanies } from './model/selectors';
export { convertCompany } from './lib/convertCompany';
