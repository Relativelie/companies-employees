import { Button } from '@shared/ui/Button';
import { addEmployee, convertEmployee } from '@entities/employee';
import { InputField } from '@shared/ui/InputField';
import { useEditForm } from '../model/useEditForm';
import useFormModal from '@shared/ui/FormModal/useFormModal';
import { useAppSelector } from '@shared/model';
import { getSelectedCompanies } from '@entities/company';
import { FormModal } from '@shared/ui/FormModal';
import { Select } from '@shared/ui/Select';

const AddEmployee = () => {
  const { formData, handleChange, onSelect } = useEditForm();
  const { isModalOpen, showModal, hideModal, handleSave } = useFormModal(
    addEmployee,
    convertEmployee,
  );
  const { firstName, lastName, position, companyId } = formData;
  const selectedCompanies = useAppSelector(getSelectedCompanies);

  return (
    <>
      <Button onClick={showModal}>Добавить сотрудника</Button>
      <FormModal
        isOpen={isModalOpen}
        actionTitle='Добавление сотрудника'
        onConfirm={() => handleSave(formData)}
        onCancel={hideModal}
      >
        <InputField
          label='Имя'
          name='firstName'
          placeholder='Введите имя'
          value={firstName}
          onChange={handleChange}
        />
        <InputField
          label='Фамилия'
          name='lastName'
          placeholder='Введите фамилию'
          value={lastName}
          onChange={handleChange}
        />
        <InputField
          label='Должность'
          name='position'
          placeholder='Введите должность'
          value={position}
          onChange={handleChange}
        />
        <Select
          options={selectedCompanies}
          name='companyId'
          onChange={onSelect}
          selected={selectedCompanies.find((company) => company.id === companyId)}
          getValue={(option) => option?.id}
          getLabel={(option) => option?.name}
        />
      </FormModal>
    </>
  );
};

export default AddEmployee;
