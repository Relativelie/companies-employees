/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import useModal from '../Modal/useModal';
import { Action } from '@reduxjs/toolkit';

type ActionCreator<T> = (args: T) => Action;
type Converter<T, U> = (formData: T) => U;
type RequiredFields<T> = {
  [key in keyof T]?: string;
};

const useFormModal = <T, U>(
  actionCreator: ActionCreator<U>,
  converter: Converter<T, U>,
  requiredFields: RequiredFields<T>,
) => {
  const [error, setError] = useState<string | null>(null);
  const { showModal, hideModal, isModalOpen } = useModal();
  const dispatch = useDispatch();

  const validation = useCallback(
    (formData: T): string | null => {
      const missingFieldsMessages = Object.entries(requiredFields)
        .filter(([key, _]) => !formData[key as keyof T])
        .map(([key, label]) => label || `The field ${key} is required`);

      if (missingFieldsMessages.length > 0) {
        return `Пожалуйста, заполните обязательные поля: ${missingFieldsMessages.join(', ')}`;
      }
      return null;
    },
    [requiredFields],
  );

  const handleSave = useCallback(
    (formData: T) => {
      const error = validation(formData);
      if (error) {
        setError(error);
        return;
      }
      setError(null);

      const entity = converter(formData);
      dispatch(actionCreator(entity));
      hideModal();
    },
    [dispatch, converter, hideModal, actionCreator, validation],
  );

  return {
    isModalOpen,
    showModal,
    hideModal,
    handleSave,
    error,
  };
};

export default useFormModal;
