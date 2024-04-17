import { useState } from 'react';

const INIT_DATA = { name: '', address: '' };

export const useEditForm = () => {
  const [formData, setFormData] = useState(INIT_DATA);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetData = () => {
    setFormData(INIT_DATA);
  };

  return { formData, handleChange, resetData };
};
