import { useState } from 'react';
import { useAppSelector } from '@shared/model';
import { Company, getSelectedCompaniesIds } from '@entities/company';

export const useEditForm = () => {
  const selectedCompanies = useAppSelector(getSelectedCompaniesIds);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    position: '',
    companyId: selectedCompanies[0],
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSelect = (selected: Company) => {
    setFormData((prev) => ({ ...prev, companyId: selected.id }));
  };

  return { formData, handleChange, onSelect };
};
