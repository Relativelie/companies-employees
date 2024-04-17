import { useState, useCallback } from 'react';

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const showModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const hideModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return {
    isModalOpen,
    showModal,
    hideModal,
  };
};

export default useModal;
