import { addCompany, convertCompany } from '@entities/company';
import { Button } from '@shared/ui/Button';
import { InputField } from '@shared/ui/InputField';
import { useEditForm } from '../model/useEditForm';
import { FormModal } from '@shared/ui/FormModal';
import useFormModal from '@shared/ui/FormModal/useFormModal';
import { useEffect } from 'react';

const editFields = {
  name: 'Название компании',
  address: 'Адрес',
};

const AddCompany = () => {
  const { formData, handleChange, resetData } = useEditForm();
  const { name, address } = formData;
  const { isModalOpen, showModal, hideModal, handleSave, error } = useFormModal(
    addCompany,
    convertCompany,
    editFields,
  );

  useEffect(() => {
    if (!isModalOpen) {
      resetData();
    }
  }, [isModalOpen]);

  return (
    <>
      <Button onClick={showModal}>Добавить компанию</Button>
      <FormModal
        isOpen={isModalOpen}
        actionTitle='Добавление компании'
        onConfirm={() => handleSave(formData)}
        onCancel={hideModal}
        error={error}
      >
        <InputField
          label={editFields.name}
          name='name'
          placeholder='Введите название компании'
          value={name}
          onChange={handleChange}
          required
        />
        <InputField
          label={editFields.address}
          name='address'
          placeholder='Введите адрес компании'
          value={address}
          onChange={handleChange}
          required
        />
      </FormModal>
    </>
  );
};

export default AddCompany;
