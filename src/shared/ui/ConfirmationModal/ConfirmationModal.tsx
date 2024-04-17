import React from 'react';
import { Modal } from '../Modal';
import { Button } from '../Button';
import styles from './ConfirmationModal.module.css';

type ConfirmationModalProps = {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  actionTitle: string;
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  actionTitle,
}) => {
  return (
    <Modal onClose={onCancel} isOpen={isOpen}>
      <h3>Вы действительно хотите {actionTitle}? </h3>
      <div className={styles.actions}>
        <Button onClick={onConfirm}>Да</Button>
        <Button onClick={onCancel}>Отменить</Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
