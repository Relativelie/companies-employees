/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactNode, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const modalId = 'modal-root';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const onEscapeKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  const onOutsideClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      console.log('onOutsideClick');
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onEscapeKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', onEscapeKeyPress);
    };
  }, [isOpen, onEscapeKeyPress, onOutsideClick]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={onOutsideClick}>
      <div className={styles.modal}>{children}</div>
    </div>,
    document.getElementById(modalId)!,
  );
};

export default Modal;
