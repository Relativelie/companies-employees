import { updateCompany } from '@entities/company';
import { Company } from '@entities/company/model/types';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import useInputField from '@shared/ui/InputField/useInputField';
import { InputField } from '@shared/ui/InputField';

type CompanyTableInputProps = {
  company: Company;
  companyKey: keyof Company;
  placeholder: string;
};

const CompanyTableInput = ({ company, placeholder, companyKey: key }: CompanyTableInputProps) => {
  const dispatch = useDispatch();
  const saveValue = (value: string) => {
    dispatch(updateCompany({ ...company, [key]: value }));
  };

  const { value, onBlur, cancelEditing, onChange } = useInputField(
    company[key] as string,
    saveValue,
    true,
  );

  return (
    <InputField
      onBlur={onBlur}
      onEscape={cancelEditing}
      onChange={onChange}
      onEnter={onBlur}
      value={value}
      placeholder={placeholder}
      name={key}
      id={`company-${company.id}-${key}`}
    />
  );
};

export default memo(CompanyTableInput);
