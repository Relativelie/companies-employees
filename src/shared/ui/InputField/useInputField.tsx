import { useState, useRef, useCallback } from 'react';

type SaveAction = (value: string) => void;
type CancelAction = () => void;

const useInputField = (
  initialValue: string,
  onSave: SaveAction,
  required = false,
  onCancel?: CancelAction,
) => {
  const [value, setValue] = useState(initialValue);
  const isCancel = useRef(false);

  const handleSave = useCallback(() => {
    if (required && !value.trim()) {
      setValue(initialValue);
    } else {
      onSave(value);
    }
  }, [onSave, value, initialValue, required]);

  const onBlur = useCallback(() => {
    if (isCancel.current) {
      isCancel.current = false;
    } else {
      handleSave();
    }
  }, [handleSave, value]);

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
