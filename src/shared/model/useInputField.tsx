import { useState, useRef, useCallback } from 'react';

type SaveAction = (value: string) => void;
type CancelAction = () => void;

const useInputField = (initialValue: string, onSave: SaveAction, onCancel?: CancelAction) => {
  const [value, setValue] = useState(initialValue);
  const isCancel = useRef(false);

  const onBlur = useCallback(() => {
    if (isCancel.current) {
      isCancel.current = false;
    } else {
      onSave(value);
    }
  }, [onSave, value]);

  const cancelEditing = useCallback(() => {
    isCancel.current = true;
    setValue(initialValue);
    if (onCancel) onCancel();
  }, [initialValue, onCancel]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return { value, onBlur, cancelEditing, onChange };
};

export default useInputField;
