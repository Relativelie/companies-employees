import { removeCompanies } from '@entities/company';
import { useAppDispatch } from '@shared/model';
import { Button, ButtonVariants } from '@shared/ui/Button';
import { ConfirmationModal } from '@shared/ui/ConfirmationModal';
import useModal from '@shared/ui/Modal/useModal';

const DeleteCompany = () => {
  const { isModalOpen, showModal, hideModal } = useModal();
  const dispatch = useAppDispatch();

  const deleteCompany = () => {
    dispatch(removeCompanies());
    hideModal();
  };

  return (
    <>
      <Button onClick={showModal} variant={ButtonVariants.Danger}>
        Удалить выбранные компании
      </Button>
      <ConfirmationModal
        isOpen={isModalOpen}
        onCancel={hideModal}
        onConfirm={deleteCompany}
        actionTitle='сотрудника'
      />
    </>
  );
};

export default DeleteCompany;
