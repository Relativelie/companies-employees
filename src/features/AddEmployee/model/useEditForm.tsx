import { useState } from 'react';
import { useAppSelector } from '@shared/model';
import { Company, getSelectedCompaniesIds } from '@entities/company';

const INIT_DATA = { firstName: '', lastName: '', position: '' };

export const useEditForm = () => {
  const selectedCompanies = useAppSelector(getSelectedCompaniesIds);

  const [formData, setFormData] = useState({
    ...INIT_DATA,
    companyId: selectedCompanies[0],
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSelect = (selected: Company) => {
    setFormData((prev) => ({ ...prev, companyId: selected.id }));
  };

  const resetData = () => {
    setFormData({ ...INIT_DATA, companyId: selectedCompanies[0] });
  };

  return { formData, handleChange, onSelect, resetData };
};
