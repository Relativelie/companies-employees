import {
  getHasSelectedCompanies,
  getSelectedCompanies,
  getSelectedCompaniesIds,
  removeCompanies,
} from '@entities/company';
import { removeEmployeesByCompanyId } from '@entities/employee';

import { useAppDispatch, useAppSelector } from '@shared/model';
import { Button, ButtonVariants } from '@shared/ui/Button';
import { ConfirmationModal } from '@shared/ui/ConfirmationModal';
import useModal from '@shared/ui/Modal/useModal';

const DeleteCompany = () => {
  const { isModalOpen, showModal, hideModal } = useModal();
  const dispatch = useAppDispatch();
  const hasSelectedCompanies = useAppSelector(getHasSelectedCompanies);
  const selectedCompanies = useAppSelector(getSelectedCompanies);
  const selectedCompaniesIds = useAppSelector(getSelectedCompaniesIds);

  const deleteCompany = () => {
    dispatch(removeCompanies());
    dispatch(removeEmployeesByCompanyId(selectedCompaniesIds));
    hideModal();
  };

  const actionTitle = selectedCompanies.length === 1 ? 'компанию' : 'компании';

  return (
    <>
      <Button
        isDisabled={!hasSelectedCompanies}
        onClick={showModal}
        variant={ButtonVariants.Danger}
      >
        Удалить выбранные компании
      </Button>
      <ConfirmationModal
        isOpen={isModalOpen}
        onCancel={hideModal}
        onConfirm={deleteCompany}
        actionTitle={`удалить ${actionTitle}`}
      />
    </>
  );
};

export default DeleteCompany;
