import { useState } from 'react';

export const useEditForm = () => {
  const [formData, setFormData] = useState({ name: '', address: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return { formData, handleChange };
};
