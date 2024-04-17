import { Button } from '@shared/ui/Button';
import { addEmployee, convertEmployee } from '@entities/employee';
import { InputField } from '@shared/ui/InputField';
import { useEditForm } from '../model/useEditForm';
import useFormModal from '@shared/ui/FormModal/useFormModal';
import { useAppSelector } from '@shared/model';
import { getSelectedCompanies } from '@entities/company';
import { FormModal } from '@shared/ui/FormModal';
import { Select } from '@shared/ui/Select';
import { useEffect } from 'react';

const editFields = {
  firstName: 'Имя',
  lastName: 'Фамилия',
  position: 'Должность',
  companyId: 'Компания',
};

const AddEmployee = () => {
  const { formData, handleChange, onSelect, resetData } = useEditForm();
  const { isModalOpen, showModal, hideModal, handleSave, error } = useFormModal(
    addEmployee,
    convertEmployee,
    editFields,
  );
  const { firstName, lastName, position, companyId } = formData;
  const selectedCompanies = useAppSelector(getSelectedCompanies);

  useEffect(() => {
    if (!isModalOpen) {
      resetData();
    }
  }, [isModalOpen, resetData]);

  return (
    <>
      <Button onClick={showModal}>Добавить сотрудника</Button>
      <FormModal
        isOpen={isModalOpen}
        actionTitle='Добавление сотрудника'
        onConfirm={() => handleSave(formData)}
        onCancel={hideModal}
        error={error}
      >
        <InputField
          label={editFields.firstName}
          name='firstName'
          placeholder='Введите имя'
          value={firstName}
          onChange={handleChange}
          required
        />
        <InputField
          label={editFields.lastName}
          name='lastName'
          placeholder='Введите фамилию'
          value={lastName}
          onChange={handleChange}
          required
        />
        <InputField
          label={editFields.position}
          name='position'
          placeholder='Введите должность'
          value={position}
          onChange={handleChange}
          required
        />
        <Select
          label={editFields.companyId}
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
