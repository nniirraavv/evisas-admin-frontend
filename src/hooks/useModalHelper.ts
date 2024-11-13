import { useState } from 'react';

const useModalHelper = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const onCancel = () => setOpen(false);

  return {
    open,
    openModal,
    onCancel,
  };
};

export default useModalHelper;
