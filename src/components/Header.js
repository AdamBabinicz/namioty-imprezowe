import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import image from "../assets/4.webp";

// Stylizacja nagłówka z efektem parallax
const HeaderContainer = styled.header`
  height: 100vh;
  background: url(${image}) center center/cover no-repeat;
  background-attachment: fixed; /* Efekt parallax */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 5rem;
  margin: 1rem 5rem 2rem;
  border-radius: 15px;
  overflow: hidden; /* Aby elementy nie wychodziły poza obszar nagłówka */

  @media (max-width: 768px) {
    margin: 0 1rem 1.5rem;
    padding: 1rem;
  }
`;

// Stylizacja kontentu nagłówka z animacjami
const HeaderContent = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: visible; /* Umożliwienie widoczności tooltipa */
  z-index: 1; /* Upewnij się, że kontent jest na wierzchu */

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: translate(-50%, -50%);
    animation: pulse 4s infinite;
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0.3;
    }
    100% {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0.5;
    }
  }
`;

// Stylizacja tytułu z animacjami
const Title = styled(motion.h1)`
  font-size: 3rem;
  margin: 0;
  font-family: "Arial", sans-serif;
  color: #fff;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.7rem;
    text-wrap: balance;
  }

  &:hover {
    color: #ff0; /* Zmiana koloru na żółty po najechaniu */
  }
`;

// Stylizacja tooltipów z ogonkami
const Tooltip = styled.div`
  position: absolute;
  top: -80px; /* Dalsze oddalenie tooltipa od napisu */
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
  white-space: nowrap;
  z-index: 1000; /* Upewnij się, że tooltip jest na wierzchu */

  &::after {
    content: "";
    position: absolute;
    bottom: -20px; /* Dostosowany ogonek tooltipa */
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;
  }
`;

// Stylizacja kontentu z tooltipem
const TooltipWrapper = styled.div`
  position: relative;

  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TooltipWrapper>
          <Title
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            Namioty imprezowe
          </Title>
          <Tooltip>Najlepsze namioty na każdą okazję!</Tooltip>
        </TooltipWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};
