// useModal.js
import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    console.log("Opening modal...");
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal...");
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};

export default useModal;
