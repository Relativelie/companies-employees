import { updateCompany } from '@entities/company';
import { Company } from '@entities/company/model/types';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import useInputField from '@shared/model/useInputField';
import { InputField } from '@shared/ui/InputField';

type CompanyTableInputProps = {
  company: Company;
  companyKey: keyof Company;
  placeholder: string;
};

const CompanyTableInput: React.FC<CompanyTableInputProps> = ({
  company,
  placeholder,
  companyKey: key,
}) => {
  const dispatch = useDispatch();
  const saveValue = (value: string) => {
    dispatch(updateCompany({ ...company, [key]: value }));
  };

  const { value, onBlur, cancelEditing, onChange } = useInputField(
    company[key] as string,
    saveValue,
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
