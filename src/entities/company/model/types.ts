export interface Company {
  readonly id: string;
  name: string;
  address: string;
  employeesCount: number;
}

export interface CompanyState {
  companies: Company[];
  selectedCompaniesIds: string[];
  hasMore: boolean;
}
