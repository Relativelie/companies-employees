import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import useModal from '../Modal/useModal';
import { Action } from '@reduxjs/toolkit';

type ActionCreator<T> = (args: T) => Action;

type Converter<T, U> = (formData: T) => U;

const useFormModal = <T, U>(actionCreator: ActionCreator<U>, converter: Converter<T, U>) => {
  const { showModal, hideModal, isModalOpen } = useModal();
  const dispatch = useDispatch();

  const handleSave = useCallback(
    (formData: T) => {
      const entity = converter(formData);
      dispatch(actionCreator(entity));
      hideModal();
    },
    [dispatch, converter, hideModal, actionCreator],
  );

  return {
    isModalOpen,
    showModal,
    hideModal,
    handleSave,
  };
};

export default useFormModal;
