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

  const deleteCompany = () => {
    dispatch(removeSelectedEmployees());

    const remainingEmployees = employees.filter(
      (employee) => !selectedEmployees.includes(employee.id),
    );
    dispatch(reduceEmployeesCount(remainingEmployees));
    hideModal();
  };

  return (
    <>
      <Button onClick={showModal} variant={ButtonVariants.Danger}>
        Удалить выбранныx сотрудников
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

export default DeleteEmployee;
