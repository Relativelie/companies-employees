import { Button, ButtonVariants } from '@shared/ui/Button';
import useModal from '@shared/ui/Modal/useModal';
import { useAppDispatch, useAppSelector } from '@shared/model';
import { ConfirmationModal } from '@shared/ui/ConfirmationModal';
import { getSelectedEmployees, removeSelectedEmployees, selectEmployees } from '@entities/employee';
import { reduceEmployeesCount } from '@entities/company';

const DeleteEmployee = () => {
  const { isModalOpen, showModal, hideModal } = useModal();
  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectEmployees);
  const selectedEmployees = useAppSelector(getSelectedEmployees);
  const hasSelectedEmployees = selectedEmployees.length > 0;

  const deleteCompany = () => {
    dispatch(removeSelectedEmployees());

    const remainingEmployees = employees.filter(
      (employee) => !selectedEmployees.includes(employee.id),
    );
    dispatch(reduceEmployeesCount(remainingEmployees));
    hideModal();
  };

  const actionTitle = selectedEmployees.length === 1 ? 'сотрудника' : 'сотрудников';

  return (
    <>
      <Button
        onClick={showModal}
        variant={ButtonVariants.Danger}
        isDisabled={!hasSelectedEmployees}
      >
        Удалить выбранныx сотрудников
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

export default DeleteEmployee;
