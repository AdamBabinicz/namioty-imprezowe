import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { lighten } from "polished";

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => lighten(0.2, theme.body)};
  padding: 0.3rem; /* Padding ogólny, może być nadpisany przez klasy */
  border-radius: 10px;
  box-shadow: 0 10px 20px ${({ theme }) => theme.cardShadow};
  width: 90vw;
  max-width: 600px;
  height: auto;
  max-height: 80vh;
  position: relative;
  overflow: hidden;

  .modal-text {
    padding: 2rem; /* Padding dla tekstu */
    font-size: 1rem;
    line-height: 1.5;
  }

  .modal-image {
    padding: 0.3rem; /* Padding dla obrazów */
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 7px;
  }

  @media (max-width: 768px) {
    width: 90vw;
    max-width: 90vw;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
`;

const Modal = ({ closeModal, children }) => (
  <ModalOverlay
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={closeModal}
  >
    <ModalContent
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <CloseButton onClick={closeModal}>
        <FaTimes />
      </CloseButton>
      {React.isValidElement(children) ? (
        React.cloneElement(children, {
          className: children.props.src ? "modal-image" : "modal-text",
        })
      ) : (
        <div className="modal-text">{children}</div>
      )}
    </ModalContent>
  </ModalOverlay>
);

export default Modal;
