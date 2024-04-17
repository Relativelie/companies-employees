import React from 'react';
import { Modal } from '../Modal';
import { Button, ButtonTypes, ButtonVariants } from '../Button';
import styles from './FormModal.module.css';

type FormModalProps = {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  actionTitle: string;
  children: React.ReactNode;
  error?: string | null;
};

const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  actionTitle,
  children,
  error,
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.stopPropagation();
    onConfirm();
  };

  return (
    <Modal onClose={onCancel} isOpen={isOpen}>
      <>
        <h3>{actionTitle}</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          {children}
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.actions}>
            <Button type={ButtonTypes.Submit}>Сохранить</Button>
            <Button variant={ButtonVariants.Secondary} onClick={onCancel}>
              Отменить
            </Button>
          </div>
        </form>
      </>
    </Modal>
  );
};

export default FormModal;
