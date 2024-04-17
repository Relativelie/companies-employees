import { updateEmployee } from '@entities/employee';
import { Employee } from '@entities/employee/model/types';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import useInputField from '@shared/model/useInputField';
import { InputField } from '@shared/ui/InputField';

type EmployeeTableInputProps = {
  employee: Employee;
  employeeKey: keyof Employee;
  placeholder: string;
};
const EmployeeTableInput: React.FC<EmployeeTableInputProps> = ({
  employee,
  placeholder,
  employeeKey,
}) => {
  const dispatch = useDispatch();
  const saveValue = (value: string) => {
    dispatch(updateEmployee({ ...employee, [employeeKey]: value }));
  };
  const { value, onBlur, cancelEditing, onChange } = useInputField(
    employee[employeeKey],
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
      name={employeeKey}
      id={`employee-${employee.id}-${employeeKey}`}
    />
  );
};

export default memo(EmployeeTableInput);
