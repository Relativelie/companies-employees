import { addCompany, convertCompany } from '@entities/company';
import { Button } from '@shared/ui/Button';
import { InputField } from '@shared/ui/InputField';
import { useEditForm } from '../model/useEditForm';
import { FormModal } from '@shared/ui/FormModal';
import useFormModal from '@shared/ui/FormModal/useFormModal';

const AddCompany = () => {
  const { formData, handleChange } = useEditForm();
  const { name, address } = formData;
  const { isModalOpen, showModal, hideModal, handleSave } = useFormModal(
    addCompany,
    convertCompany,
  );

  return (
    <>
      <Button onClick={showModal}>Добавить компанию</Button>
      <FormModal
        isOpen={isModalOpen}
        actionTitle='Добавление компании'
        onConfirm={() => handleSave(formData)}
        onCancel={hideModal}
      >
        <InputField
          label='Название компании'
          name='name'
          placeholder='Введите название компании'
          value={name}
          onChange={handleChange}
        />
        <InputField
          label='Адрес'
          name='address'
          placeholder='Введите адрес компании'
          value={address}
          onChange={handleChange}
        />
      </FormModal>
    </>
  );
};

export default AddCompany;
